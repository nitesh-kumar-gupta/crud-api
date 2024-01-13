import { AnySchema } from 'yup';
import { Request, Response, NextFunction } from 'express';
import { handleError } from '../../utils';

const reqDataValidate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params
      });
      return next();
    } catch (error: unknown) {
      return handleError(error, res);
    }
  };
export default reqDataValidate;
