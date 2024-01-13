import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { SwaggerTheme } from 'swagger-themes';
import { successResponse } from '../libs/responses';
import { APIsuccess, handleError } from '../utils';
import { SUCCESS_CONSTANT, ERROR_CONSTANT } from '../constants';
import Paths from './paths';
import swagger from '../docs/swagger';

const Routes = (app: Express) => {
  app.get('/', (_: Request, res: Response) => {
    try {
      successResponse(
        res,
        new APIsuccess(SUCCESS_CONSTANT.OK, { message: 'Server is running' })
      );
    } catch (error: unknown) {
      handleError(error, res);
    }
  });
  const specs = swaggerJsdoc({
    swaggerDefinition: swagger,
    apis: ['src/docs/components/*.yml', 'src/routes/**/*.route.ts']
  });
  const swaggerTheme = new SwaggerTheme('v3');
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      explorer: true,
      customCss: swaggerTheme.getBuffer('dark')
    })
  );
  app.use('/api', Paths());
  app.use((_: Request, res: Response) => {
    handleError(ERROR_CONSTANT.NOT_FOUND, res);
  });
};
export default Routes;
