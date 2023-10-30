import { ObjectId } from 'bson';
import { BankAccount } from './BankAccount';
import { Transaction } from './Transaction';

export class AccountTransaction {
  id?: string;
  bankAccountId: string;
  transactionId: string;
  fromAccount?: BankAccount;
  toAccount?: BankAccount;
  sentTransaction?: Transaction;
  receivedTransaction?: Transaction;

  constructor(bankAccountId: string, transactionId: string) {
    this.id = new ObjectId().toString();
    this.bankAccountId = bankAccountId;
    this.transactionId = transactionId;
  }

  setFromAccount(account: BankAccount): void {
    this.fromAccount = account;
  }

  setToAccount(account: BankAccount): void {
    this.toAccount = account;
  }

  setSentTransaction(transaction: Transaction): void {
    this.sentTransaction = transaction;
  }

  setReceivedTransaction(transaction: Transaction): void {
    this.receivedTransaction = transaction;
  }
}
