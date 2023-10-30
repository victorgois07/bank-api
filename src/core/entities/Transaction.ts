import { ObjectId } from 'bson';
import { AccountTransaction } from './AccountTransaction';

export enum TransactionType {
  PIX = 'PIX',
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
}

export class Transaction {
  id?: string;
  amount: number;
  type: TransactionType;
  pixKey?: string;
  isReverted?: boolean;
  bankAccountFrom?: Partial<AccountTransaction>;
  bankAccountTo?: Partial<AccountTransaction>;

  constructor(
    amount: number,
    type: TransactionType,
    pixKey?: string,
    isReverted?: boolean,
    bankAccountFrom?: Partial<AccountTransaction>,
    bankAccountTo?: Partial<AccountTransaction>
  ) {
    this.id = new ObjectId().toString();
    this.amount = amount;
    this.type = type;
    this.isReverted = isReverted ?? false;
    if (pixKey) this.pixKey = pixKey;
    if (bankAccountFrom) this.bankAccountFrom = bankAccountFrom;
    if (bankAccountTo) this.bankAccountTo = bankAccountTo;
  }
}
