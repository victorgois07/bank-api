import { Transaction } from '../entities/Transaction';

interface ITransactionUseCases {
  create(
    fromAccount: string,
    toAccount: string,
    amount: number
  ): Promise<Transaction>;
  update(
    transactionId: string,
    data: Partial<Transaction>
  ): Promise<Transaction>;
  delete(transactionId: string): Promise<void>;
  findByTransactionId(transactionId: string): Promise<Transaction | null>;
  findByAccountId(accountId: string): Promise<Transaction[]>;
  list(): Promise<Transaction[]>;
}

export { ITransactionUseCases };
