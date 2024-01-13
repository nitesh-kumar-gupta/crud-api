import { Request, Response } from 'express';
import morgan from 'morgan';
import { logger } from './../utils';

morgan.token('message', (_: Request, res: Response) => res.statusMessage);
const successResponseFormat =
  ':remote-addr - :method :url :status - :response-time ms - message: :message';
const errorResponseFormat =
  ':remote-addr - :method :url :status - :response-time ms - message: :message';
const morganSuccessHandler = morgan(successResponseFormat, {
  skip: (_: Request, res: Response) => res.statusCode >= 400,
  stream: {
    write: (message) => logger.info(message.trim())
  }
});
const morganErrorHandler = morgan(errorResponseFormat, {
  skip: (_: Request, res: Response) => res.statusCode < 400,
  stream: {
    write: (message) => logger.error(message.trim())
  }
});
export { morganSuccessHandler, morganErrorHandler };
