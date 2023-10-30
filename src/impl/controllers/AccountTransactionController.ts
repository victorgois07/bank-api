import { Request, Response } from 'express';
import { AccountTransaction } from '../../core/entities/AccountTransaction';
import { AccountTransactionUseCases } from '../useCases/AccountTransactionUseCases';

export class AccountTransactionController {
  private accountTransactionUseCases: AccountTransactionUseCases;

  constructor(accountTransactionUseCases: AccountTransactionUseCases) {
    this.accountTransactionUseCases = accountTransactionUseCases;
  }

  async createTransaction(req: Request, res: Response) {
    try {
      const transactionData: AccountTransaction = req.body;
      const transaction =
        await this.accountTransactionUseCases.createTransaction(
          transactionData
        );
      res.status(201).json(transaction);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getTransactionById(req: Request, res: Response) {
    try {
      const transactionId = req.params.id;
      const transaction =
        await this.accountTransactionUseCases.getTransactionById(transactionId);
      if (transaction) {
        res.status(200).json(transaction);
      } else {
        res.status(404).json({ message: 'Transaction not found.' });
      }
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async updateTransaction(req: Request, res: Response) {
    try {
      const transactionId = req.params.id;
      const transactionData: AccountTransaction = req.body;
      if (transactionId !== transactionData.id) {
        res.status(400).json({ message: 'Transaction ID mismatch.' });
        return;
      }
      await this.accountTransactionUseCases.updateTransaction(transactionData);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async deleteTransaction(req: Request, res: Response) {
    try {
      const transactionId = req.params.id;
      await this.accountTransactionUseCases.deleteTransaction(transactionId);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async listTransactions(req: Request, res: Response) {
    try {
      const transactions =
        await this.accountTransactionUseCases.listTransactions();
      res.status(200).json(transactions);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
