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
import { AccountType, BankAccount } from '../../core/entities/BankAccount';
import { Transaction } from '../../core/entities/Transaction';
import {
  accountNumberSchema,
  createBankAccountSchema,
  createTransactionSchema,
  depositWithdrawSchema,
  searchBankAccountSchema,
  transferBetweenAccountsSchema,
  updateBankAccountSchema,
} from '../../core/validations/BankAccountValidations';
import { validateWithJoi } from '../../utils/validateWithJoi';
import { BankAccountRepository } from '../repositories/BankAccountRepository';
import { TransactionRepository } from '../repositories/TransactionRepository';
import { BankAccountUseCases } from '../useCases/BankAccountUseCases';

@Tags('Bank Accounts')
@Route('bank-accounts')
export class BankAccountController extends Controller {
  private bankAccountUseCases: BankAccountUseCases;

  constructor() {
    super();
    const bankAccountRepository = new BankAccountRepository();
    const transactionRepository = new TransactionRepository();
    this.bankAccountUseCases = new BankAccountUseCases(
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

  @Post()
  public async create(
    @Body() requestBody: { accountNumber: string; accountType: AccountType }
  ): Promise<BankAccount> {
    validateWithJoi<{ accountNumber: string; accountType: AccountType }>(
      requestBody,
      createBankAccountSchema
    );
    return this.bankAccountUseCases.create(
      requestBody.accountNumber,
      requestBody.accountType
    );
  }

  @Get('{accountNumber}')
  public async read(
    @Path() accountNumber: string
  ): Promise<BankAccount | null> {
    this.validateAccountNumber(accountNumber);
    return this.bankAccountUseCases.findById(accountNumber);
  }

  @Put('{accountNumber}')
  public async update(
    @Path() accountNumber: string,
    @Body() requestBody: { accountType: AccountType; balance: number }
  ): Promise<BankAccount> {
    this.validateAccountNumber(accountNumber);
    validateWithJoi<{ accountType: AccountType; balance: number }>(
      requestBody,
      updateBankAccountSchema
    );
    return this.bankAccountUseCases.update(
      accountNumber,
      requestBody.accountType,
      requestBody.balance
    );
  }

  @Delete('{accountNumber}')
  public async delete(@Path() accountNumber: string): Promise<void> {
    this.validateAccountNumber(accountNumber);
    await this.bankAccountUseCases.delete(accountNumber);
  }

  @Get('by-id/{id}')
  public async findById(@Path() id: string): Promise<BankAccount | null> {
    validateWithJoi<string>(id, accountNumberSchema);
    return this.bankAccountUseCases.findById(id);
  }

  @Get()
  public async list(): Promise<BankAccount[]> {
    return this.bankAccountUseCases.list();
  }

  @Post('{accountNumber}/deposit')
  public async deposit(
    @Path() accountNumber: string,
    @Body() requestBody: { amount: number }
  ): Promise<BankAccount> {
    this.validateAccountNumber(accountNumber);
    validateWithJoi<{ amount: number }>(requestBody, depositWithdrawSchema);
    return this.bankAccountUseCases.deposit(accountNumber, requestBody.amount);
  }

  @Post('{accountNumber}/withdraw')
  public async withdraw(
    @Path() accountNumber: string,
    @Body() requestBody: { amount: number }
  ): Promise<BankAccount> {
    this.validateAccountNumber(accountNumber);
    validateWithJoi<{ amount: number }>(requestBody, depositWithdrawSchema);
    return this.bankAccountUseCases.withdraw(accountNumber, requestBody.amount);
  }

  @Post('search')
  public async search(
    @Body()
    requestBody: {
      accountType?: AccountType;
      minBalance?: number;
    }
  ): Promise<BankAccount[]> {
    validateWithJoi<{
      accountType?: AccountType;
      minBalance?: number;
    }>(requestBody, searchBankAccountSchema);
    return this.bankAccountUseCases.searchAccounts(requestBody);
  }

  @Post('transaction')
  public async createNewTransaction(
    @Body()
    requestBody: {
      fromAccountNumber: string;
      toAccountNumber: string;
      amount: number;
      type: Transaction['type'];
    }
  ): Promise<Transaction> {
    validateWithJoi<{
      fromAccountNumber: string;
      toAccountNumber: string;
      amount: number;
      type: Transaction['type'];
    }>(requestBody, createTransactionSchema);
    return this.bankAccountUseCases.createTransaction(
      requestBody.fromAccountNumber,
      requestBody.toAccountNumber,
      requestBody.amount,
      requestBody.type
    );
  }

  @Get('{accountNumber}/recent-transactions')
  public async getRecentTransactions(
    @Path() accountNumber: string
  ): Promise<Transaction[]> {
    this.validateAccountNumber(accountNumber);
    return this.bankAccountUseCases.getRecentTransactions(accountNumber);
  }

  @Post('transfer')
  public async transfer(
    @Body()
    requestBody: {
      fromAccountNumber: string;
      toAccountNumber: string;
      amount: number;
    }
  ): Promise<void> {
    validateWithJoi<{
      fromAccountNumber: string;
      toAccountNumber: string;
      amount: number;
    }>(requestBody, transferBetweenAccountsSchema);
    return this.bankAccountUseCases.transferBetweenAccounts(
      requestBody.fromAccountNumber,
      requestBody.toAccountNumber,
      requestBody.amount
    );
  }

  @Get('{accountNumber}/transactions')
  public async getTransactionsForAccount(
    @Path() accountNumber: string
  ): Promise<Transaction[]> {
    this.validateAccountNumber(accountNumber);
    return this.bankAccountUseCases.getTransactionsForAccount(accountNumber);
  }
}
