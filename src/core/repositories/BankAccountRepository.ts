import { BankAccount } from '../entities/BankAccount';
import { BankAccountSearchCriteria } from '../entities/BankAccountSearchCriteria';

export interface IBankAccountRepository {
  findById(id: string): Promise<BankAccount | null>;
  findByAccountNumber(accountNumber: string): Promise<BankAccount | null>;
  create(bankAccount: BankAccount): Promise<void>;
  update(bankAccount: BankAccount): Promise<void>;
  delete(accountNumber: string): Promise<void>;
  list(): Promise<BankAccount[]>;
  search(criteria: BankAccountSearchCriteria): Promise<BankAccount[]>;
  deposit(accountNumber: string, amount: number): Promise<void>;
  withdraw(accountNumber: string, amount: number): Promise<void>;
  pixTransfer(
    fromAccountNumber: string,
    toAccountNumber: string,
    amount: number
  ): Promise<void>;
}
