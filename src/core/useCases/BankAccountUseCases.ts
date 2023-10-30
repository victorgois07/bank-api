import { AccountType } from '../../impl/infra/db/prisma/generated/client';
import { BankAccount } from '../entities/BankAccount';
import { BankAccountSearchCriteria } from '../entities/BankAccountSearchCriteria';

interface IBankAccountUseCases {
  create(accountNumber: string, accountType: AccountType): Promise<BankAccount>;
  findById(id: string): Promise<BankAccount | null>;
  list(): Promise<BankAccount[]>;
  update(
    accountNumber: string,
    accountType: AccountType,
    balance: number
  ): Promise<BankAccount>;
  delete(id: string): Promise<void>;
  deposit(accountNumber: string, amount: number): Promise<BankAccount>;
  withdraw(accountNumber: string, amount: number): Promise<BankAccount>;
  search(criteria: BankAccountSearchCriteria): Promise<BankAccount[]>;
  pixTransfer(
    fromAccountNumber: string,
    toAccountNumber: string,
    amount: number
  ): Promise<boolean>;
}

export { IBankAccountUseCases };
