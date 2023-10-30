import { AccountTransaction } from '../../core/entities/AccountTransaction';
import { BankAccount } from '../../core/entities/BankAccount';
import { Transaction } from '../../core/entities/Transaction';
import { ITransactionRepository } from '../../core/repositories/TransactionRepository';
import {
  Prisma,
  PrismaClient,
  TransactionType,
} from '../infra/db/prisma/generated/client';

export class TransactionRepository implements ITransactionRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findByTransactionId(
    transactionId: string
  ): Promise<Transaction | null> {
    const transactionFromDB = await this.prisma.transaction.findUnique({
      where: { id: transactionId },
      include: {
        bankAccountFrom: true,
        bankAccountTo: true,
      },
    });

    if (!transactionFromDB) return null;

    return new Transaction(
      transactionFromDB.amount,
      transactionFromDB.type as TransactionType,
      transactionFromDB.pixKey || undefined
    );
  }

  async list(): Promise<Transaction[]> {
    const transactionsFromDB = await this.prisma.transaction.findMany({
      include: {
        bankAccountFrom: true,
        bankAccountTo: true,
      },
    });

    return transactionsFromDB.map(
      (transaction) =>
        new Transaction(
          transaction.amount,
          transaction.type as TransactionType,
          transaction.pixKey || undefined
        )
    );
  }

  async create(transaction: Transaction): Promise<Transaction> {
    const prismaInput: Prisma.TransactionCreateInput = {
      bankAccountFrom: {
        connectOrCreate: {
          where: { id: transaction.bankAccountFrom!.id },
          create: {
            id: transaction.bankAccountFrom!.id,
            bankAccountId: transaction.bankAccountFrom!.bankAccountId,
          },
        },
      },
      bankAccountTo: {
        connectOrCreate: {
          where: { id: transaction.bankAccountTo!.id },
          create: {
            id: transaction.bankAccountTo!.id,
            bankAccountId: transaction.bankAccountTo!.bankAccountId,
          },
        },
      },
      amount: transaction.amount,
      type: transaction.type,
      pixKey: transaction.pixKey || null,
    };

    const createdTransaction = await this.prisma.transaction.create({
      data: prismaInput,
    });

    return new Transaction(
      createdTransaction.amount,
      createdTransaction.type as TransactionType,
      createdTransaction.pixKey || undefined
    );
  }

  async findById(id: string): Promise<Transaction | null> {
    const transactionFromDB = await this.prisma.transaction.findUnique({
      where: { id },
      include: {
        bankAccountFrom: {
          include: {
            fromAccount: true,
          },
        },
        bankAccountTo: {
          include: {
            toAccount: true,
          },
        },
      },
    });

    if (
      !transactionFromDB ||
      (!transactionFromDB.bankAccountFrom && !transactionFromDB.bankAccountTo)
    )
      return null;

    const transformedBankAccountFrom: Partial<AccountTransaction> = {
      ...transactionFromDB.bankAccountFrom,
      fromAccount: transactionFromDB.bankAccountFrom?.fromAccount
        ? new BankAccount(
            transactionFromDB.bankAccountFrom.fromAccount.accountNumber,
            transactionFromDB.bankAccountFrom.fromAccount.accountType,
            transactionFromDB.bankAccountFrom.fromAccount.balance,
            transactionFromDB.bankAccountFrom.fromAccount.createdAt
          )
        : undefined,
      toAccount: undefined,
    };

    const transformedBankAccountTo: Partial<AccountTransaction> = {
      ...transactionFromDB.bankAccountTo,
      fromAccount: undefined,
      toAccount: transactionFromDB.bankAccountTo?.toAccount
        ? new BankAccount(
            transactionFromDB.bankAccountTo.toAccount.accountNumber,
            transactionFromDB.bankAccountTo.toAccount.accountType,
            transactionFromDB.bankAccountTo.toAccount.balance,
            transactionFromDB.bankAccountTo.toAccount.createdAt
          )
        : undefined,
    };

    return new Transaction(
      transactionFromDB.amount,
      transactionFromDB.type,
      transactionFromDB.pixKey || undefined,
      transactionFromDB.isReverted,
      transformedBankAccountFrom,
      transformedBankAccountTo
    );
  }

  async update(transaction: Transaction): Promise<Transaction> {
    const prismaInput: Prisma.TransactionCreateInput = {
      bankAccountFrom: {
        connectOrCreate: {
          where: { id: transaction.bankAccountFrom!.id },
          create: {
            id: transaction.bankAccountFrom!.id,
            bankAccountId: transaction.bankAccountFrom!.bankAccountId,
          },
        },
      },
      bankAccountTo: {
        connectOrCreate: {
          where: { id: transaction.bankAccountTo!.id },
          create: {
            id: transaction.bankAccountTo!.id,
            bankAccountId: transaction.bankAccountTo!.bankAccountId,
          },
        },
      },
      amount: transaction.amount,
      type: transaction.type,
      pixKey: transaction.pixKey || null,
    };

    const transactionUpdate = await this.prisma.transaction.update({
      where: { id: transaction.id },
      data: prismaInput,
    });

    return new Transaction(
      transactionUpdate.amount,
      transactionUpdate.type,
      transactionUpdate.pixKey || undefined
    );
  }

  async delete(id: string): Promise<void> {
    await this.prisma.transaction.delete({
      where: { id },
    });
  }

  async findByAccountNumber(
    accountNumber: string,
    limit: number
  ): Promise<Transaction[]> {
    const transactionsFromDB = await this.prisma.transaction.findMany({
      where: {
        OR: [
          {
            bankAccountFrom: {
              is: {
                fromAccount: {
                  is: { accountNumber: { equals: accountNumber } },
                },
              },
            },
          },
          {
            bankAccountTo: {
              is: {
                toAccount: {
                  is: { accountNumber: { equals: accountNumber } },
                },
              },
            },
          },
        ],
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
    });

    return transactionsFromDB.map(
      (transaction) =>
        new Transaction(
          transaction.amount,
          transaction.type,
          transaction.pixKey || undefined
        )
    );
  }

  async findByTransactionType(type: TransactionType): Promise<Transaction[]> {
    const transactionsFromDB = await this.prisma.transaction.findMany({
      where: { type },
    });

    return transactionsFromDB.map(
      (transaction) =>
        new Transaction(
          transaction.amount,
          transaction.type,
          transaction.pixKey || undefined
        )
    );
  }

  async findByDateRange(
    startDate: Date,
    endDate: Date
  ): Promise<Transaction[]> {
    const transactionsFromDB = await this.prisma.transaction.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    return transactionsFromDB.map(
      (transaction) =>
        new Transaction(
          transaction.amount,
          transaction.type,
          transaction.pixKey || undefined
        )
    );
  }

  async findByPixKey(pixKey: string): Promise<Transaction[]> {
    const transactionsFromDB = await this.prisma.transaction.findMany({
      where: { pixKey },
    });

    return transactionsFromDB.map(
      (transaction) =>
        new Transaction(
          transaction.amount,
          transaction.type,
          transaction.pixKey || undefined
        )
    );
  }

  async getTransactionsByDateRange(
    accountNumber: string,
    startDate: Date,
    endDate: Date
  ): Promise<Transaction[]> {
    const transactionsFromDB = await this.prisma.transaction.findMany({
      where: {
        OR: [
          {
            bankAccountFrom: {
              is: {
                fromAccount: {
                  is: { accountNumber: { equals: accountNumber } },
                },
              },
            },
          },
          {
            bankAccountTo: {
              is: {
                toAccount: {
                  is: { accountNumber: { equals: accountNumber } },
                },
              },
            },
          },
        ],
        AND: [
          { createdAt: { gte: startDate } },
          { createdAt: { lte: endDate } },
        ],
      },
      orderBy: { createdAt: 'desc' },
    });

    return transactionsFromDB.map(
      (transaction) =>
        new Transaction(
          transaction.amount,
          transaction.type,
          transaction.pixKey || undefined
        )
    );
  }

  async getRecentTransactions(
    accountNumber: string,
    limit: number = 10
  ): Promise<Transaction[]> {
    const transactionsFromDB = await this.prisma.transaction.findMany({
      where: {
        OR: [
          {
            bankAccountFrom: {
              is: {
                fromAccount: {
                  is: { accountNumber: { equals: accountNumber } },
                },
              },
            },
          },
          {
            bankAccountTo: {
              is: {
                toAccount: {
                  is: { accountNumber: { equals: accountNumber } },
                },
              },
            },
          },
        ],
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    return transactionsFromDB.map(
      (transaction) =>
        new Transaction(
          transaction.amount,
          transaction.type,
          transaction.pixKey || undefined
        )
    );
  }

  async getTransactionsByAccount(
    accountNumber: string
  ): Promise<Transaction[]> {
    const transactionsFromDB = await this.prisma.transaction.findMany({
      where: {
        OR: [
          {
            bankAccountFrom: {
              is: {
                fromAccount: {
                  is: { accountNumber: { equals: accountNumber } },
                },
              },
            },
          },
          {
            bankAccountTo: {
              is: {
                toAccount: {
                  is: { accountNumber: { equals: accountNumber } },
                },
              },
            },
          },
        ],
      },
      orderBy: { createdAt: 'desc' },
      include: {
        bankAccountFrom: {
          include: {
            fromAccount: true,
          },
        },
        bankAccountTo: {
          include: {
            toAccount: true,
          },
        },
      },
    });

    return transactionsFromDB.map(
      (transaction) =>
        new Transaction(
          transaction.amount,
          transaction.type,
          transaction.pixKey || undefined
        )
    );
  }

  async markAsReverted(transactionId: string): Promise<void> {
    try {
      await this.prisma.transaction.update({
        where: { id: transactionId },
        data: { isReverted: true },
      });
    } catch (error) {
      throw new Error(
        `Failed to mark the transaction as reverted: ${
          (error as Error).message
        }`
      );
    }
  }
}
