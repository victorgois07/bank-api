import { Router } from 'express';
import {
  createTransactionSchema,
  dateRangeSchema,
  transactionIdSchema,
  updateTransactionSchema,
} from '../core/validations/TransactionValidations';
import { TransactionController } from '../impl/controllers/TransactionController';
import { BankAccountRepository } from '../impl/repositories/BankAccountRepository';
import { TransactionRepository } from '../impl/repositories/TransactionRepository';
import { TransactionUseCases } from '../impl/useCases/TransactionUseCases';
import { validate } from '../middlewares/validate';

const routes = Router();
const bankAccountRepository = new BankAccountRepository();
const transactionRepository = new TransactionRepository();
const transactionUseCases = new TransactionUseCases(
  bankAccountRepository,
  transactionRepository
);
const transactionController = new TransactionController(transactionUseCases);

routes.post(
  '/transactions',
  validate(createTransactionSchema),
  transactionController.createTransaction.bind(transactionController)
);

routes.get(
  '/transactions/:accountNumber/recent',
  transactionController.getRecentTransactions.bind(transactionController)
);

routes.post(
  '/transactions/transfer',
  transactionController.transferBetweenAccounts.bind(transactionController)
);

routes.get(
  '/transactions/:accountNumber/all',
  transactionController.listAllTransactions.bind(transactionController)
);

routes.get(
  '/transactions/:accountNumber/balance',
  transactionController.getAccountBalanceAfterTransactions.bind(
    transactionController
  )
);

routes.get(
  '/transactions/:accountNumber/date-range',
  validate(dateRangeSchema),
  transactionController.getTransactionsByDateRange.bind(transactionController)
);

routes.get(
  '/transactions/:transactionId/exists',
  validate(transactionIdSchema),
  transactionController.transactionExists.bind(transactionController)
);

routes.post(
  '/transactions/:transactionId/reverse',
  validate(transactionIdSchema),
  transactionController.reverseTransaction.bind(transactionController)
);

routes.put(
  '/transactions/:transactionId',
  validate(updateTransactionSchema),
  transactionController.updateTransaction.bind(transactionController)
);

routes.delete(
  '/transactions/:transactionId',
  transactionController.deleteTransaction.bind(transactionController)
);

export default routes;
