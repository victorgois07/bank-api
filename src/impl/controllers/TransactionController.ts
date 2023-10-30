import { Request, Response } from 'express';
import { Transaction } from '../../core/entities/Transaction';
import { TransactionUseCases } from '../useCases/TransactionUseCases';

export class TransactionController {
  private transactionUseCases: TransactionUseCases;

  constructor(transactionUseCases: TransactionUseCases) {
    this.transactionUseCases = transactionUseCases;
  }

  async createTransaction(req: Request, res: Response) {
    try {
      const { fromAccountNumber, toAccountNumber, amount, type } = req.body;
      const transaction = await this.transactionUseCases.createTransaction(
        fromAccountNumber,
        toAccountNumber,
        amount,
        type
      );
      res.status(201).json(transaction);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getRecentTransactions(req: Request, res: Response) {
    try {
      const { accountNumber } = req.params;
      const { limit } = req.query;
      const transactions = await this.transactionUseCases.getRecentTransactions(
        accountNumber,
        limit ? parseInt(limit as string, 10) : undefined
      );
      res.status(200).json(transactions);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async transferBetweenAccounts(req: Request, res: Response) {
    try {
      const { fromAccountNumber, toAccountNumber, amount } = req.body;
      const transaction =
        await this.transactionUseCases.transferBetweenAccounts(
          fromAccountNumber,
          toAccountNumber,
          amount
        );
      res.status(200).json(transaction);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async listAllTransactions(req: Request, res: Response) {
    try {
      const { accountNumber } = req.params;
      const transactions = await this.transactionUseCases.listAllTransactions(
        accountNumber
      );
      res.status(200).json(transactions);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getAccountBalanceAfterTransactions(req: Request, res: Response) {
    try {
      const { accountNumber } = req.params;
      const balance =
        await this.transactionUseCases.getAccountBalanceAfterTransactions(
          accountNumber
        );
      res.status(200).json({ balance });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getTransactionsByDateRange(req: Request, res: Response) {
    try {
      const { accountNumber, startDate, endDate } = req.query;
      const transactions =
        await this.transactionUseCases.getTransactionsByDateRange(
          accountNumber as string,
          new Date(startDate as string),
          new Date(endDate as string)
        );
      res.status(200).json(transactions);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async transactionExists(req: Request, res: Response) {
    try {
      const { transactionId } = req.params;
      const exists = await this.transactionUseCases.transactionExists(
        transactionId
      );
      res.status(200).json({ exists });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async reverseTransaction(req: Request, res: Response) {
    try {
      const { transactionId } = req.params;
      await this.transactionUseCases.reverseTransaction(transactionId);
      res.status(200).json({ message: 'Transaction reversed successfully.' });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async updateTransaction(req: Request, res: Response) {
    try {
      const transaction: Transaction = req.body;
      const updatedTransaction =
        await this.transactionUseCases.updateTransaction(transaction);
      res.status(201).json(updatedTransaction);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async deleteTransaction(req: Request, res: Response) {
    try {
      const { transactionId } = req.params;
      await this.transactionUseCases.deleteTransaction(transactionId);
      res.status(200).json({ message: 'Transaction deleted successfully.' });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
