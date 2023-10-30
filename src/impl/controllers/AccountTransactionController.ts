import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Route,
  Tags,
} from 'tsoa';
import { AccountTransaction } from '../../core/entities/AccountTransaction';
import {
  createAccountTransactionSchema,
  updateAccountTransactionSchema,
} from '../../core/validations/AccountTransactionValidations';
import { transactionIdSchema } from '../../core/validations/TransactionValidations';
import { validateWithJoi } from '../../utils/validateWithJoi';
import { AccountTransactionRepository } from '../repositories/AccountTransactionRepository';
import { AccountTransactionUseCases } from '../useCases/AccountTransactionUseCases';

@Tags('Account Transactions')
@Route('account-transactions')
export class AccountTransactionController extends Controller {
  private accountTransactionUseCases: AccountTransactionUseCases;

  constructor() {
    super();
    const accountTransactionRepository = new AccountTransactionRepository();
    this.accountTransactionUseCases = new AccountTransactionUseCases(
      accountTransactionRepository
    );
  }

  @Post()
  public async createTransaction(
    @Body() transactionData: AccountTransaction
  ): Promise<AccountTransaction> {
    validateWithJoi<AccountTransaction>(
      transactionData,
      createAccountTransactionSchema
    );
    return this.accountTransactionUseCases.createTransaction(transactionData);
  }

  @Get('{transactionId}')
  public async getTransactionById(
    @Path() transactionId: string
  ): Promise<AccountTransaction | null> {
    validateWithJoi<{ transactionId: string }>(
      { transactionId },
      transactionIdSchema
    );
    return this.accountTransactionUseCases.getTransactionById(transactionId);
  }

  @Put('{transactionId}')
  public async updateTransaction(
    @Path() transactionId: string,
    @Body() transactionData: AccountTransaction
  ): Promise<void> {
    validateWithJoi<{ transactionId: string }>(
      { transactionId },
      transactionIdSchema
    );
    validateWithJoi<AccountTransaction>(
      transactionData,
      updateAccountTransactionSchema
    );
    if (transactionId !== transactionData.id) {
      this.setStatus(400);
      return Promise.reject({ message: 'Transaction ID mismatch.' });
    }
    return this.accountTransactionUseCases.updateTransaction(transactionData);
  }

  @Delete('{transactionId}')
  public async deleteTransaction(@Path() transactionId: string): Promise<void> {
    validateWithJoi<{ transactionId: string }>(
      { transactionId },
      transactionIdSchema
    );
    return this.accountTransactionUseCases.deleteTransaction(transactionId);
  }

  @Get()
  public async listTransactions(): Promise<AccountTransaction[]> {
    return this.accountTransactionUseCases.listTransactions();
  }
}
