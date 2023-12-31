import Joi from 'joi';

const ACCOUNT_TYPE_ARRAY = ['CORRENTE', 'POUPANCA'];

export const createBankAccountSchema = Joi.object({
  accountNumber: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .label('Account Number'),
  accountType: Joi.string()
    .valid(...ACCOUNT_TYPE_ARRAY)
    .required()
    .label('Account Type'),
});

export const accountNumberSchema = Joi.object({
  accountNumber: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .label('Account Number'),
});

export const depositWithdrawSchema = Joi.object({
  amount: Joi.number().positive().min(1).required().label('Amount'),
});

export const updateBankAccountSchema = Joi.object({
  accountType: Joi.string()
    .valid(...ACCOUNT_TYPE_ARRAY)
    .required()
    .label('Account Type'),
  balance: Joi.number().min(0).required().label('Balance'),
});

export const bankAccountIdSchema = Joi.object({
  id: Joi.string().uuid().required().label('Bank Account ID'),
});

export const searchBankAccountSchema = Joi.object({
  accountType: Joi.string()
    .valid(...ACCOUNT_TYPE_ARRAY)
    .optional()
    .label('Account Type'),
  minBalance: Joi.number().min(0).optional().label('Minimum Balance'),
});

export const createTransactionSchema = Joi.object({
  fromAccountNumber: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .label('From Account Number'),
  toAccountNumber: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .label('To Account Number'),
  amount: Joi.number().positive().min(1).required().label('Amount'),
  type: Joi.string()
    .valid('WITHDRAW', 'DEPOSIT', 'PIX')
    .required()
    .label('Transaction Type'),
});

export const transferBetweenAccountsSchema = Joi.object({
  fromAccountNumber: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .label('From Account Number'),
  toAccountNumber: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .label('To Account Number'),
  amount: Joi.number().positive().min(1).required().label('Amount'),
});
