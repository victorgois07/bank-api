import Joi from 'joi';

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

export const transactionIdSchema = Joi.object({
  transactionId: Joi.string().uuid().required().label('Transaction ID'),
});

export const dateRangeSchema = Joi.object({
  startDate: Joi.date().required().label('Start Date'),
  endDate: Joi.date().required().label('End Date'),
});

export const updateTransactionSchema = Joi.object({
  id: Joi.string().uuid().required().label('Transaction ID'),
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
