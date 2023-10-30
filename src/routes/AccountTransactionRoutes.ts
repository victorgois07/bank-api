import { Router } from 'express';
import {
  createAccountTransactionSchema,
  updateAccountTransactionSchema,
} from '../core/validations/AccountTransactionValidations';
import { AccountTransactionController } from '../impl/controllers/AccountTransactionController';
import { AccountTransactionRepository } from '../impl/repositories/AccountTransactionRepository';
import { AccountTransactionUseCases } from '../impl/useCases/AccountTransactionUseCases';
import { validate } from '../middlewares/validate';

const routes = Router();
const accountTransactionRepository = new AccountTransactionRepository();
const accountTransactionUseCases = new AccountTransactionUseCases(
  accountTransactionRepository
);
const accountTransactionController = new AccountTransactionController(
  accountTransactionUseCases
);

routes.post(
  '/account-transactions',
  validate(createAccountTransactionSchema),
  accountTransactionController.createTransaction.bind(
    accountTransactionController
  )
);

routes.get(
  '/account-transactions/:id',
  accountTransactionController.getTransactionById.bind(
    accountTransactionController
  )
);

routes.put(
  '/account-transactions/:id',
  validate(updateAccountTransactionSchema),
  accountTransactionController.updateTransaction.bind(
    accountTransactionController
  )
);

routes.delete(
  '/account-transactions/:id',
  accountTransactionController.deleteTransaction.bind(
    accountTransactionController
  )
);

routes.get(
  '/account-transactions',
  accountTransactionController.listTransactions.bind(
    accountTransactionController
  )
);

export default routes;
