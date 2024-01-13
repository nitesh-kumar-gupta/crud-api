import { Response } from 'express';
import APIerror from './api-error.util';
import { ERROR_CONSTANT } from '../constants';
import { HttpStatusInterface, YupValidationError } from '../interfaces';
import { errorResponse } from '../libs/responses';
import yupErrorHandler from './yup-error.util';

const getAPIerror = (error: unknown) => {
  let err = error;
  if (error instanceof Error) {
    if (error instanceof YupValidationError) err = yupErrorHandler(error);
    else
      err = {
        ...ERROR_CONSTANT.INTERNAL_SERVER_ERROR,
        message: error.message
      };
  }
  return new APIerror(err as HttpStatusInterface);
};

const handleError = (error: unknown, res: Response) => {
  errorResponse(res, getAPIerror(error));
};
export { getAPIerror, handleError };
