import { Schema } from 'joi';
import { ValidateError } from 'tsoa';

export function validateWithJoi<T>(data: T, schema: Schema) {
  const { error } = schema.validate(data);
  if (error) {
    throw new ValidateError(
      {
        requestBody: {
          message: error.message,
          value: data,
        },
      },
      error.message
    );
  }
}
