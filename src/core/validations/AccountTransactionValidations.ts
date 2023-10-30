import Joi from 'joi';

// Validation schema for creating a new transaction
export const createAccountTransactionSchema = Joi.object({
  fromAccount: Joi.object({
    id: Joi.string().uuid().required(),
    balance: Joi.number().min(0).required(),
    accountNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    accountType: Joi.string().valid('corrente', 'poupanca').required(),
    receivedTransactions: Joi.array().items(
      Joi.object({
        transactionId: Joi.string().uuid().required(),
      })
    ),
  }).required(),
  toAccount: Joi.object({
    id: Joi.string().uuid().required(),
    balance: Joi.number().min(0).required(),
    accountNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    accountType: Joi.string().valid('corrente', 'poupanca').required(),
    sentTransactions: Joi.array().items(
      Joi.object({
        transactionId: Joi.string().uuid().required(),
      })
    ),
  }).required(),
  sentTransaction: Joi.object({
    id: Joi.string().uuid().required(),
    amount: Joi.number().min(0).required(),
    type: Joi.string().valid('WITHDRAW', 'DEPOSIT', 'PIX').required(),
    pixKey: Joi.string().optional(),
  }).required(),
  receivedTransaction: Joi.object({
    id: Joi.string().uuid().required(),
    amount: Joi.number().min(0).required(),
    type: Joi.string().valid('WITHDRAW', 'DEPOSIT', 'PIX').required(),
    pixKey: Joi.string().optional(),
  }).required(),
});

// Validation schema for updating an existing transaction
export const updateAccountTransactionSchema = Joi.object({
  fromAccount: Joi.object({
    id: Joi.string().uuid().required(),
    balance: Joi.number().min(0).required(),
    accountNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    accountType: Joi.string().valid('corrente', 'poupanca').required(),
    receivedTransactions: Joi.array().items(
      Joi.object({
        transactionId: Joi.string().uuid().required(),
      })
    ),
  }).required(),
  toAccount: Joi.object({
    id: Joi.string().uuid().required(),
    balance: Joi.number().min(0).required(),
    accountNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    accountType: Joi.string().valid('corrente', 'poupanca').required(),
    sentTransactions: Joi.array().items(
      Joi.object({
        transactionId: Joi.string().uuid().required(),
      })
    ),
  }).required(),
  sentTransaction: Joi.object({
    id: Joi.string().uuid().required(),
    amount: Joi.number().min(0).required(),
    type: Joi.string().valid('WITHDRAW', 'DEPOSIT', 'PIX').required(),
    pixKey: Joi.string().optional(),
  }).required(),
  receivedTransaction: Joi.object({
    id: Joi.string().uuid().required(),
    amount: Joi.number().min(0).required(),
    type: Joi.string().valid('WITHDRAW', 'DEPOSIT', 'PIX').required(),
    pixKey: Joi.string().optional(),
  }).required(),
});
