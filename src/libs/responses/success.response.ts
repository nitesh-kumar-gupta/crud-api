import { Response } from 'express';
import { APIsuccess } from '../../utils';

const successResponse = (
  res: Response,
  success: APIsuccess,
  customHeaders: { [key: string]: string } = {}
) => {
  res.locals.successMessage = success.message;
  res.setHeader('Content-Type', 'application/json');
  if (Object.keys(customHeaders).length > 0) res.set(customHeaders);
  return res.status(success.statusCode).send(success.data);
};
export default successResponse;
