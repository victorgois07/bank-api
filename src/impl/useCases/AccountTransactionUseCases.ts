import { AccountTransaction } from '../../core/entities/AccountTransaction';
import { IAccountTransactionRepository } from '../../core/repositories/AccountTransactionRepository';
import { AccountTransactionRepository } from '../repositories/AccountTransactionRepository';

export class AccountTransactionUseCases {
  private accountTransactionRepository: IAccountTransactionRepository;

  constructor(accountTransactionRepository: AccountTransactionRepository) {
    this.accountTransactionRepository = accountTransactionRepository;
  }

  async createTransaction(
    transaction: AccountTransaction
  ): Promise<AccountTransaction> {
    return await this.accountTransactionRepository.create(transaction);
  }

  async getTransactionById(
    transactionId: string
  ): Promise<AccountTransaction | null> {
    return await this.accountTransactionRepository.findByTransactionId(
      transactionId
    );
  }

  async updateTransaction(transaction: AccountTransaction): Promise<void> {
    await this.accountTransactionRepository.update(transaction);
  }

  async deleteTransaction(transactionId: string): Promise<void> {
    await this.accountTransactionRepository.delete(transactionId);
  }

  async listTransactions(): Promise<AccountTransaction[]> {
    return await this.accountTransactionRepository.list();
  }
}
