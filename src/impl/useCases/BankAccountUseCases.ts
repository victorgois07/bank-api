import { BankAccount } from '../../core/entities/BankAccount';
import { Transaction } from '../../core/entities/Transaction';
import { IBankAccountRepository } from '../../core/repositories/BankAccountRepository';
import { ITransactionRepository } from '../../core/repositories/TransactionRepository';
import {
  AccountType,
  TransactionType,
} from '../infra/db/prisma/generated/client';

export class BankAccountUseCases {
  constructor(
    private bankAccountRepository: IBankAccountRepository,
    private transactionRepository: ITransactionRepository
  ) {}

  async create(
    accountNumber: string,
    accountType: AccountType
  ): Promise<BankAccount> {
    const existingAccount =
      await this.bankAccountRepository.findByAccountNumber(accountNumber);

    if (existingAccount) {
      throw new Error('Account number already exists.');
    }

    const bankAccount = new BankAccount(accountNumber, accountType, 0);
    await this.bankAccountRepository.create(bankAccount);

    return bankAccount;
  }

  async findById(id: string): Promise<BankAccount | null> {
    return await this.bankAccountRepository.findById(id);
  }

  async delete(accountNumber: string): Promise<void> {
    await this.bankAccountRepository.delete(accountNumber);
  }

  async findByAccountNumber(
    accountNumber: string
  ): Promise<BankAccount | null> {
    return await this.bankAccountRepository.findByAccountNumber(accountNumber);
  }

  async update(
    accountNumber: string,
    accountType: AccountType,
    balance: number
  ): Promise<BankAccount> {
    const bankAccount = await this.bankAccountRepository.findByAccountNumber(
      accountNumber
    );

    if (!bankAccount) throw new Error('Account not found.');

    bankAccount.accountType = accountType;
    bankAccount.balance = balance;

    await this.bankAccountRepository.update(bankAccount);

    return bankAccount;
  }

  async deposit(accountNumber: string, amount: number): Promise<BankAccount> {
    const bankAccount = await this.bankAccountRepository.findByAccountNumber(
      accountNumber
    );

    if (!bankAccount) throw new Error('Account not found.');

    bankAccount.deposit(amount);
    await this.bankAccountRepository.update(bankAccount);

    return bankAccount;
  }

  async withdraw(accountNumber: string, amount: number): Promise<BankAccount> {
    const bankAccount = await this.bankAccountRepository.findByAccountNumber(
      accountNumber
    );

    if (!bankAccount) throw new Error('Account not found.');

    bankAccount.withdraw(amount);
    await this.bankAccountRepository.update(bankAccount);

    return bankAccount;
  }

  async getTransactionsForAccount(
    accountNumber: string,
    limit: number = 10
  ): Promise<Transaction[]> {
    return await this.transactionRepository.findByAccountNumber(
      accountNumber,
      limit
    );
  }

  async transferBetweenAccounts(
    fromAccountNumber: string,
    toAccountNumber: string,
    amount: number
  ): Promise<void> {
    const fromAccount = await this.bankAccountRepository.findByAccountNumber(
      fromAccountNumber
    );
    const toAccount = await this.bankAccountRepository.findByAccountNumber(
      toAccountNumber
    );

    if (!fromAccount || !toAccount) {
      throw new Error('One or both accounts not found.');
    }

    if (fromAccount.balance < amount) {
      throw new Error('Insufficient funds.');
    }

    fromAccount.withdraw(amount);
    toAccount.deposit(amount);

    await this.bankAccountRepository.update(fromAccount);
    await this.bankAccountRepository.update(toAccount);
  }

  async getBalance(accountNumber: string): Promise<number> {
    const account = await this.bankAccountRepository.findByAccountNumber(
      accountNumber
    );

    if (!account) {
      throw new Error('Account not found.');
    }

    return account.balance;
  }

  async getRecentTransactions(
    accountNumber: string,
    limit: number = 10
  ): Promise<Transaction[]> {
    return await this.transactionRepository.findByAccountNumber(
      accountNumber,
      limit
    );
  }

  async searchAccounts(criteria: {
    accountType?: AccountType;
    minBalance?: number;
  }): Promise<BankAccount[]> {
    const accounts = await this.bankAccountRepository.search({
      accountType: criteria.accountType,
      minBalance: criteria.minBalance,
    });

    return accounts;
  }

  async createTransaction(
    fromAccountNumber: string,
    toAccountNumber: string,
    amount: number,
    type: TransactionType
  ): Promise<Transaction> {
    const fromAccount = await this.bankAccountRepository.findByAccountNumber(
      fromAccountNumber
    );
    const toAccount = await this.bankAccountRepository.findByAccountNumber(
      toAccountNumber
    );

    if (!fromAccount || !toAccount) {
      throw new Error('One or both accounts not found.');
    }

    if (type === TransactionType.WITHDRAW && fromAccount.balance < amount) {
      throw new Error('Insufficient funds.');
    }

    if (type === TransactionType.WITHDRAW) {
      fromAccount.withdraw(amount);
      await this.bankAccountRepository.update(fromAccount);
    }

    if (type === TransactionType.DEPOSIT) {
      toAccount.deposit(amount);
      await this.bankAccountRepository.update(toAccount);
    }

    if (type === TransactionType.PIX) {
      fromAccount.withdraw(amount);
      toAccount.deposit(amount);
      await this.bankAccountRepository.update(fromAccount);
      await this.bankAccountRepository.update(toAccount);
    }

    const bankAccountFrom = {
      id: fromAccount.id,
      bankAccountId: fromAccount.id,
    };

    const bankAccountTo = {
      id: toAccount.id,
      bankAccountId: toAccount.id,
    };

    return await this.transactionRepository.create({
      bankAccountFrom,
      bankAccountTo,
      amount,
      type,
    });
  }

  async list(): Promise<BankAccount[]> {
    return await this.bankAccountRepository.list();
  }
}
