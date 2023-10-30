import { ObjectId } from 'bson';
import { AccountTransaction } from './AccountTransaction';

export enum AccountType {
  CORRENTE = 'CORRENTE',
  POUPANCA = 'POUPANCA',
}

export class BankAccount {
  id: string;
  accountNumber: string;
  accountType: AccountType;
  balance: number;
  createdAt: Date;
  sentTransactions: AccountTransaction[] = [];
  receivedTransactions: AccountTransaction[] = [];

  constructor(
    accountNumber: string,
    accountType: AccountType,
    balance: number,
    createdAt?: Date,
    sentTransactions?: AccountTransaction[],
    receivedTransactions?: AccountTransaction[]
  ) {
    this.id = new ObjectId().toString();
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.balance = balance;
    this.createdAt = createdAt || new Date();
    this.sentTransactions = sentTransactions || [];
    this.receivedTransactions = receivedTransactions || [];
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (this.balance < amount) {
      throw new Error('Insufficient funds.');
    }
    this.balance -= amount;
  }
}
