import { Transaction, TransactionType } from '../../core/entities/Transaction';
import { BankAccountRepository } from '../repositories/BankAccountRepository';
import { TransactionRepository } from '../repositories/TransactionRepository';

export class TransactionUseCases {
  private bankAccountRepository: BankAccountRepository;
  private transactionRepository: TransactionRepository;

  constructor(
    bankAccountRepository: BankAccountRepository,
    transactionRepository: TransactionRepository
  ) {
    this.bankAccountRepository = bankAccountRepository;
    this.transactionRepository = transactionRepository;
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

  async getRecentTransactions(
    accountNumber: string,
    limit: number = 10
  ): Promise<Transaction[]> {
    return this.transactionRepository.getRecentTransactions(
      accountNumber,
      limit
    );
  }

  async transferBetweenAccounts(
    fromAccountNumber: string,
    toAccountNumber: string,
    amount: number
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

    if (fromAccount.balance < amount) {
      throw new Error('Insufficient funds.');
    }

    fromAccount.withdraw(amount);
    toAccount.deposit(amount);
    await this.bankAccountRepository.update(fromAccount);
    await this.bankAccountRepository.update(toAccount);

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
      amount: amount,
      type: TransactionType.DEPOSIT,
    });
  }

  async listAllTransactions(accountNumber: string): Promise<Transaction[]> {
    return this.transactionRepository.getTransactionsByAccount(accountNumber);
  }

  async getAccountBalanceAfterTransactions(
    accountNumber: string
  ): Promise<number> {
    const account = await this.bankAccountRepository.findByAccountNumber(
      accountNumber
    );

    if (!account) {
      throw new Error('Account not found.');
    }

    const transactions = await this.listAllTransactions(accountNumber);

    return transactions.reduce((balance, transaction) => {
      if (
        transaction.bankAccountFrom?.fromAccount?.accountNumber ===
        accountNumber
      ) {
        return balance - transaction.amount;
      } else if (
        transaction.bankAccountTo?.toAccount?.accountNumber === accountNumber
      ) {
        return balance + transaction.amount;
      } else {
        return balance;
      }
    }, account.balance);
  }

  async getTransactionsByDateRange(
    accountNumber: string,
    startDate: Date,
    endDate: Date
  ): Promise<Transaction[]> {
    return this.transactionRepository.getTransactionsByDateRange(
      accountNumber,
      startDate,
      endDate
    );
  }

  async transactionExists(transactionId: string): Promise<boolean> {
    const transaction = await this.transactionRepository.findByTransactionId(
      transactionId
    );

    return !!transaction;
  }

  async reverseTransaction(transactionId: string): Promise<void> {
    const transaction = await this.transactionRepository.findById(
      transactionId
    );

    if (!transaction) {
      throw new Error('Transaction not found.');
    }

    if (
      !transaction?.bankAccountFrom?.fromAccount?.accountNumber ||
      !transaction?.bankAccountTo?.toAccount?.accountNumber ||
      transaction.isReverted
    ) {
      throw new Error(
        'Transaction has already been reversed or bank account not found.'
      );
    }

    const fromAccount = await this.bankAccountRepository.findByAccountNumber(
      transaction.bankAccountFrom.fromAccount.accountNumber
    );
    const toAccount = await this.bankAccountRepository.findByAccountNumber(
      transaction.bankAccountTo.toAccount.accountNumber
    );

    if (!fromAccount || !toAccount) {
      throw new Error('One or both accounts not found.');
    }

    switch (transaction.type) {
      case TransactionType.WITHDRAW:
        fromAccount.deposit(transaction.amount);
        await this.bankAccountRepository.update(fromAccount);
        break;

      case TransactionType.DEPOSIT:
        toAccount.withdraw(transaction.amount);
        await this.bankAccountRepository.update(toAccount);
        break;

      case TransactionType.PIX:
        fromAccount.deposit(transaction.amount);
        toAccount.withdraw(transaction.amount);
        await this.bankAccountRepository.update(fromAccount);
        await this.bankAccountRepository.update(toAccount);
        break;
    }

    await this.transactionRepository.markAsReverted(transactionId);
  }

  async updateTransaction(transaction: Transaction): Promise<Transaction> {
    const updatedTransaction = await this.transactionRepository.update(
      transaction
    );
    return updatedTransaction;
  }

  async deleteTransaction(transactionId: string): Promise<void> {
    await this.transactionRepository.delete(transactionId);
  }
}
