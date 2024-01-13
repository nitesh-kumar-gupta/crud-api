import { Response } from 'express';
import { APIerror } from '../../utils';
// import { env } from '../../configs';

const errorResponse = (
  res: Response,
  error: APIerror,
  customHeaders: { [key: string]: string } = {}
) => {
  res.locals.errorMessage = error.message;
  res.setHeader('Content-Type', 'application/problem+json');
  if (Object.keys(customHeaders).length > 0) res.set(customHeaders);
  const response: { [key: string]: unknown } = {
    message: error.message
  };
  // if (env.server.environment === 'development')
  //   response['stackTrace'] = error.stack;
  return res.status(error.statusCode).send(response);
};
export default errorResponse;
