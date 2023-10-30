import { AccountType, BankAccount } from '../../core/entities/BankAccount';
import { BankAccountSearchCriteria } from '../../core/entities/BankAccountSearchCriteria';
import { IBankAccountRepository } from '../../core/repositories/BankAccountRepository';
import { Prisma, PrismaClient } from '../infra/db/prisma/generated/client';

export class BankAccountRepository implements IBankAccountRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async list(): Promise<BankAccount[]> {
    const bankAccountsFromDB = await this.prisma.bankAccount.findMany();

    return bankAccountsFromDB.map(
      (account) =>
        new BankAccount(
          account.accountNumber,
          account.accountType as AccountType,
          account.balance
        )
    );
  }

  async findById(id: string): Promise<BankAccount | null> {
    const bankAccount = await this.prisma.bankAccount.findUnique({
      where: { id },
    });

    if (!bankAccount) return null;

    return new BankAccount(
      bankAccount.accountNumber,
      bankAccount.accountType as AccountType,
      bankAccount.balance,
      bankAccount.createdAt
    );
  }

  async findByAccountNumber(
    accountNumber: string
  ): Promise<BankAccount | null> {
    const bankAccount = await this.prisma.bankAccount.findUnique({
      where: { accountNumber },
      include: {
        sentTransactions: true,
        receivedTransactions: true,
      },
    });

    if (!bankAccount) return null;

    return new BankAccount(
      bankAccount.accountNumber,
      bankAccount.accountType as AccountType,
      bankAccount.balance,
      bankAccount.createdAt
    );
  }

  async create(bankAccount: BankAccount): Promise<void> {
    await this.prisma.bankAccount.create({
      data: {
        accountNumber: bankAccount.accountNumber,
        accountType: bankAccount.accountType,
        balance: bankAccount.balance,
        createdAt: bankAccount.createdAt,
      },
    });
  }

  async update(bankAccount: BankAccount): Promise<void> {
    await this.prisma.bankAccount.update({
      where: { accountNumber: bankAccount.accountNumber },
      data: {
        accountType: bankAccount.accountType,
        balance: bankAccount.balance,
      },
    });
  }

  async delete(accountNumber: string): Promise<void> {
    await this.prisma.bankAccount.delete({
      where: { accountNumber },
    });
  }

  async search(criteria: BankAccountSearchCriteria): Promise<BankAccount[]> {
    const query: Prisma.BankAccountWhereInput = {
      accountNumber: criteria.accountNumber,
      accountType: criteria.accountType,
      balance: {
        ...(criteria.minBalance ? { gte: criteria.minBalance } : {}),
        ...(criteria.maxBalance ? { lte: criteria.maxBalance } : {}),
      },
      createdAt: {
        ...(criteria.fromDate ? { gte: criteria.fromDate } : {}),
        ...(criteria.toDate ? { lte: criteria.toDate } : {}),
      },
    };

    const bankAccountsFromDB = await this.prisma.bankAccount.findMany({
      where: query,
    });

    return bankAccountsFromDB.map(
      (account) =>
        new BankAccount(
          account.accountNumber,
          account.accountType as AccountType,
          account.balance
        )
    );
  }

  async deposit(accountNumber: string, amount: number): Promise<void> {
    const bankAccount = await this.prisma.bankAccount.findUnique({
      where: { accountNumber },
    });

    if (!bankAccount) throw new Error('Account not found.');

    await this.prisma.bankAccount.update({
      where: { accountNumber },
      data: { balance: bankAccount.balance + amount },
    });
  }

  async withdraw(accountNumber: string, amount: number): Promise<void> {
    const bankAccount = await this.prisma.bankAccount.findUnique({
      where: { accountNumber },
    });

    if (!bankAccount) throw new Error('Account not found.');
    if (bankAccount.balance < amount) throw new Error('Insufficient funds.');

    await this.prisma.bankAccount.update({
      where: { accountNumber },
      data: { balance: bankAccount.balance - amount },
    });
  }

  async pixTransfer(
    fromAccountNumber: string,
    toAccountNumber: string,
    amount: number
  ): Promise<void> {
    const fromBankAccount = await this.prisma.bankAccount.findUnique({
      where: { accountNumber: fromAccountNumber },
    });

    const toBankAccount = await this.prisma.bankAccount.findUnique({
      where: { accountNumber: toAccountNumber },
    });

    if (!fromBankAccount || !toBankAccount)
      throw new Error('One of the accounts not found.');
    if (fromBankAccount.balance < amount)
      throw new Error('Insufficient funds.');

    await this.prisma.bankAccount.update({
      where: { accountNumber: fromAccountNumber },
      data: { balance: fromBankAccount.balance - amount },
    });

    await this.prisma.bankAccount.update({
      where: { accountNumber: toAccountNumber },
      data: { balance: toBankAccount.balance + amount },
    });
  }
}
