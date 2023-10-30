import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Query,
  Route,
  Tags,
} from 'tsoa';
import { Transaction, TransactionType } from '../../core/entities/Transaction';
import {
  accountNumberSchema,
  transferBetweenAccountsSchema,
} from '../../core/validations/BankAccountValidations';
import {
  createTransactionSchema,
  dateRangeSchema,
  transactionIdSchema,
  updateTransactionSchema,
} from '../../core/validations/TransactionValidations';
import { validateWithJoi } from '../../utils/validateWithJoi';
import { BankAccountRepository } from '../repositories/BankAccountRepository';
import { TransactionRepository } from '../repositories/TransactionRepository';
import { TransactionUseCases } from '../useCases/TransactionUseCases';

@Tags('Transactions')
@Route('transactions')
export class TransactionController extends Controller {
  private transactionUseCases: TransactionUseCases;

  constructor() {
    super();
    const bankAccountRepository = new BankAccountRepository();
    const transactionRepository = new TransactionRepository();
    this.transactionUseCases = new TransactionUseCases(
      bankAccountRepository,
      transactionRepository
    );
  }

  validateAccountNumber(accountNumber: string) {
    validateWithJoi<{ accountNumber: string }>(
      { accountNumber },
      accountNumberSchema
    );
  }

  validateTransactionId(transactionId: string) {
    validateWithJoi<{ transactionId: string }>(
      { transactionId },
      transactionIdSchema
    );
  }

  @Post()
  public async createTransaction(
    @Body()
    requestBody: {
      fromAccountNumber: string;
      toAccountNumber: string;
      amount: number;
      type: TransactionType;
    }
  ): Promise<Transaction> {
    validateWithJoi<{
      fromAccountNumber: string;
      toAccountNumber: string;
      amount: number;
      type: TransactionType;
    }>(requestBody, createTransactionSchema);
    return this.transactionUseCases.createTransaction(
      requestBody.fromAccountNumber,
      requestBody.toAccountNumber,
      requestBody.amount,
      requestBody.type
    );
  }

  @Get('{accountNumber}/recent')
  public async getRecentTransactions(
    @Path() accountNumber: string,
    @Query() limit?: number
  ): Promise<Transaction[]> {
    this.validateAccountNumber(accountNumber);
    return this.transactionUseCases.getRecentTransactions(accountNumber, limit);
  }

  @Post('transfer')
  public async transferBetweenAccounts(
    @Body()
    requestBody: {
      fromAccountNumber: string;
      toAccountNumber: string;
      amount: number;
    }
  ): Promise<Transaction> {
    validateWithJoi<{
      fromAccountNumber: string;
      toAccountNumber: string;
      amount: number;
    }>(requestBody, transferBetweenAccountsSchema);
    return this.transactionUseCases.transferBetweenAccounts(
      requestBody.fromAccountNumber,
      requestBody.toAccountNumber,
      requestBody.amount
    );
  }

  @Get('{accountNumber}')
  public async listAllTransactions(
    @Path() accountNumber: string
  ): Promise<Transaction[]> {
    this.validateAccountNumber(accountNumber);
    return this.transactionUseCases.listAllTransactions(accountNumber);
  }

  @Get('{accountNumber}/balance')
  public async getAccountBalanceAfterTransactions(
    @Path() accountNumber: string
  ): Promise<{ balance: number }> {
    this.validateAccountNumber(accountNumber);
    return {
      balance:
        await this.transactionUseCases.getAccountBalanceAfterTransactions(
          accountNumber
        ),
    };
  }

  @Get('{accountNumber}/date-range')
  public async getTransactionsByDateRange(
    @Path() accountNumber: string,
    @Query() startDate: string,
    @Query() endDate: string
  ): Promise<Transaction[]> {
    this.validateAccountNumber(accountNumber);
    validateWithJoi<{ startDate: string; endDate: string }>(
      { startDate, endDate },
      dateRangeSchema
    );
    return this.transactionUseCases.getTransactionsByDateRange(
      accountNumber,
      new Date(startDate),
      new Date(endDate)
    );
  }

  @Get('{transactionId}/exists')
  public async transactionExists(
    @Path() transactionId: string
  ): Promise<{ exists: boolean }> {
    this.validateTransactionId(transactionId);
    return {
      exists: await this.transactionUseCases.transactionExists(transactionId),
    };
  }

  @Post('{transactionId}/reverse')
  public async reverseTransaction(
    @Path() transactionId: string
  ): Promise<{ message: string }> {
    this.validateTransactionId(transactionId);
    await this.transactionUseCases.reverseTransaction(transactionId);
    return { message: 'Transaction reversed successfully.' };
  }

  @Put()
  public async updateTransaction(
    @Body() transaction: Transaction
  ): Promise<Transaction> {
    validateWithJoi<Transaction>(transaction, updateTransactionSchema);
    return this.transactionUseCases.updateTransaction(transaction);
  }

  @Delete('{transactionId}')
  public async deleteTransaction(
    @Path() transactionId: string
  ): Promise<{ message: string }> {
    this.validateTransactionId(transactionId);
    await this.transactionUseCases.deleteTransaction(transactionId);
    return { message: 'Transaction deleted successfully.' };
  }
}
