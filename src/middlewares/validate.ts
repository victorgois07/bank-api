import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'joi';

export const validate = (schema: AnySchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      const errorDetails = error.details.map((detail) => ({
        message: detail.message,
        path: detail.path.join('.'),
      }));

      return res.status(400).json({
        status: 'error',
        message: 'Validation error',
        errors: errorDetails,
      });
    }

    next();
  };
};
