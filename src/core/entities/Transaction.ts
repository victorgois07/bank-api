import { ObjectId } from 'bson';
import { TransactionType } from '../../impl/infra/db/prisma/generated/client';
import { AccountTransaction } from './AccountTransaction';

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
