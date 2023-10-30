import { Transaction } from '../../core/entities/Transaction';
import { TransactionType } from '../../impl/infra/db/prisma/generated/client';

export interface ITransactionRepository {
  create(transaction: Transaction): Promise<Transaction>;
  findByTransactionId(transactionId: string): Promise<Transaction | null>;
  delete(transactionId: string): Promise<void>;
  update(transaction: Transaction): Promise<Transaction>;
  list(): Promise<Transaction[]>;
  findByAccountNumber(
    accountNumber: string,
    limit: number
  ): Promise<Transaction[]>;
  findByTransactionType(type: TransactionType): Promise<Transaction[]>;
  findByDateRange(startDate: Date, endDate: Date): Promise<Transaction[]>;
  findByPixKey(pixKey: string): Promise<Transaction[]>;
  getTransactionsByDateRange(
    accountNumber: string,
    startDate: Date,
    endDate: Date
  ): Promise<Transaction[]>;
  getRecentTransactions(
    accountNumber: string,
    limit?: number
  ): Promise<Transaction[]>;
  getTransactionsByAccount(accountNumber: string): Promise<Transaction[]>;
  markAsReverted(transactionId: string): Promise<void>;
}
