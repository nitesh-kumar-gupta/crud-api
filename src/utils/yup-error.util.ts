import { ERROR_CONSTANT } from '../constants';
import { ValidationError } from 'yup';

const yupErrorHandler = (error: ValidationError) => {
  return {
    ...ERROR_CONSTANT.BAD_REQUEST,
    message: `${error.message}`
  };
};

export default yupErrorHandler;
