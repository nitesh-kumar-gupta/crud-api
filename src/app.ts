import express, { Express } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { morganSuccessHandler, morganErrorHandler } from './configs';
import { xssFilter } from './libs/middlewares';
import Routes from './routes';

const app: Express = express();
app.disable('x-powered-by');
app.use(morganSuccessHandler);
app.use(morganErrorHandler);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xssFilter);
app.use(compression());
Routes(app);

export default app;
