import { AccountTransaction } from '../entities/AccountTransaction';

export interface IAccountTransactionRepository {
  create(transaction: AccountTransaction): Promise<AccountTransaction>;
  findByTransactionId(
    transactionId: string
  ): Promise<AccountTransaction | null>;
  update(transaction: AccountTransaction): Promise<void>;
  delete(transactionId: string): Promise<void>;
  list(): Promise<AccountTransaction[]>;
}
