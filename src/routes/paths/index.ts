import { Router } from 'express';
import { routesConfig } from '../../configs';
import userRoute from './user.route';

const router = Router();
const v1Routes = () => {
  routesConfig(router, [userRoute]);
  return router;
};
export default v1Routes;
