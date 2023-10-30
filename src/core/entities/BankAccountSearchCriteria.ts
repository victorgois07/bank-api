import { AccountType } from '../../impl/infra/db/prisma/generated/client';

export interface BankAccountSearchCriteria {
  accountNumber?: string;
  accountType?: AccountType;
  minBalance?: number;
  maxBalance?: number;
  fromDate?: Date;
  toDate?: Date;
}
