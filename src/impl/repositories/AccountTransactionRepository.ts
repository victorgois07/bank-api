import { AccountTransaction } from '../../core/entities/AccountTransaction';
import { IAccountTransactionRepository } from '../../core/repositories/AccountTransactionRepository';
import { Prisma, PrismaClient } from '../infra/db/prisma/generated/client';

export class AccountTransactionRepository
  implements IAccountTransactionRepository
{
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(transaction: AccountTransaction): Promise<AccountTransaction> {
    const prismaInput: Prisma.AccountTransactionCreateInput = {
      fromAccount: {
        connectOrCreate: {
          where: { id: transaction.fromAccount!.id },
          create: {
            balance: transaction.fromAccount!.balance,
            accountNumber: transaction.fromAccount!.accountNumber,
            accountType: transaction.fromAccount!.accountType,
            receivedTransactions: {
              create: transaction.fromAccount!.receivedTransactions.map(
                (receivedTransactions) => ({
                  transactionId: receivedTransactions.transactionId,
                })
              ),
            },
          },
        },
      },
      toAccount: {
        connectOrCreate: {
          where: { id: transaction.toAccount!.id },
          create: {
            balance: transaction.toAccount!.balance,
            accountNumber: transaction.toAccount!.accountNumber,
            accountType: transaction.toAccount!.accountType,
            sentTransactions: {
              create: transaction.toAccount!.sentTransactions.map(
                (sentTransactions) => ({
                  transactionId: sentTransactions.transactionId,
                })
              ),
            },
          },
        },
      },
      sentTransaction: {
        connectOrCreate: {
          where: { id: transaction.sentTransaction!.id },
          create: {
            amount: transaction.sentTransaction!.amount,
            type: transaction.sentTransaction!.type,
            pixKey: transaction.sentTransaction!.pixKey || undefined,
          },
        },
      },
      receivedTransaction: {
        connectOrCreate: {
          where: { id: transaction.receivedTransaction!.id },
          create: {
            amount: transaction.receivedTransaction!.amount,
            type: transaction.receivedTransaction!.type,
            pixKey: transaction.receivedTransaction!.pixKey || undefined,
          },
        },
      },
    };

    const accountTransactionCreate =
      await this.prisma.accountTransaction.create({
        data: prismaInput,
      });

    return new AccountTransaction(
      accountTransactionCreate.bankAccountId,
      accountTransactionCreate.transactionId
    );
  }

  async findByTransactionId(
    transactionId: string
  ): Promise<AccountTransaction | null> {
    const accountTransaction = await this.prisma.accountTransaction.findUnique({
      where: { id: transactionId },
    });

    if (!accountTransaction) return null;

    return new AccountTransaction(
      accountTransaction.bankAccountId,
      accountTransaction.transactionId
    );
  }

  async update(transaction: AccountTransaction): Promise<void> {
    const prismaInput: Prisma.AccountTransactionCreateInput = {
      fromAccount: {
        connectOrCreate: {
          where: { id: transaction.fromAccount!.id },
          create: {
            balance: transaction.fromAccount!.balance,
            accountNumber: transaction.fromAccount!.accountNumber,
            accountType: transaction.fromAccount!.accountType,
            receivedTransactions: {
              create: transaction.fromAccount!.receivedTransactions.map(
                (receivedTransactions) => ({
                  transactionId: receivedTransactions.transactionId,
                })
              ),
            },
          },
        },
      },
      toAccount: {
        connectOrCreate: {
          where: { id: transaction.toAccount!.id },
          create: {
            balance: transaction.toAccount!.balance,
            accountNumber: transaction.toAccount!.accountNumber,
            accountType: transaction.toAccount!.accountType,
            sentTransactions: {
              create: transaction.toAccount!.sentTransactions.map(
                (sentTransactions) => ({
                  transactionId: sentTransactions.transactionId,
                })
              ),
            },
          },
        },
      },
      sentTransaction: {
        connectOrCreate: {
          where: { id: transaction.sentTransaction!.id },
          create: {
            amount: transaction.sentTransaction!.amount,
            type: transaction.sentTransaction!.type,
            pixKey: transaction.sentTransaction!.pixKey || undefined,
          },
        },
      },
      receivedTransaction: {
        connectOrCreate: {
          where: { id: transaction.receivedTransaction!.id },
          create: {
            amount: transaction.receivedTransaction!.amount,
            type: transaction.receivedTransaction!.type,
            pixKey: transaction.receivedTransaction!.pixKey || undefined,
          },
        },
      },
    };

    await this.prisma.accountTransaction.update({
      where: { id: transaction.id },
      data: prismaInput,
    });
  }

  async delete(transactionId: string): Promise<void> {
    await this.prisma.accountTransaction.delete({
      where: { id: transactionId },
    });
  }

  async list(): Promise<AccountTransaction[]> {
    const accountTransactionsFromDB =
      await this.prisma.accountTransaction.findMany({});

    return accountTransactionsFromDB.map(
      (accountTransaction) =>
        new AccountTransaction(
          accountTransaction.bankAccountId,
          accountTransaction.transactionId
        )
    );
  }
}
