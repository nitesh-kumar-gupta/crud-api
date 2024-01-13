import { Router } from 'express';
import { extend } from 'lodash';
import { RouteInterface } from '../interfaces';
import { ERROR_CONSTANT } from '../constants';

const attachRoutes = (routes: Array<RouteInterface>, router: Router) => {
  const defaults: RouteInterface = { type: '', path: '', handlers: [] };
  routes.forEach((route: RouteInterface) => {
    route = extend(defaults, route);
    if (Object.keys(route).length !== 3)
      throw {
        ...ERROR_CONSTANT.INTERNAL_SERVER_ERROR,
        message: 'Invalid arguments in routes configuration'
      };
    else if (typeof route.path !== 'string')
      throw {
        ...ERROR_CONSTANT.INTERNAL_SERVER_ERROR,
        message: 'Route path must be a string'
      };
    else if (
      !route.handlers.every((handler) => typeof handler === 'function')
    ) {
      throw {
        ...ERROR_CONSTANT.INTERNAL_SERVER_ERROR,
        message: `${JSON.stringify(
          route
        )} Route handlers contain invalid handler, handlers must be functions`
      };
    } else {
      switch (route.type) {
        case 'POST':
          router.post(route.path, route.handlers);
          break;
        case 'PUT':
          router.put(route.path, route.handlers);
          break;
        case 'PATCH':
          router.patch(route.path, route.handlers);
          break;
        case 'DELETE':
          router.delete(route.path, route.handlers);
          break;
        case 'GET':
          router.get(route.path, route.handlers);
          break;
      }
    }
  });
  return router;
};
const routesConfig = (
  router: Router,
  routeObjects: Array<Array<RouteInterface>>
) => {
  routeObjects.forEach((routeOb: Array<RouteInterface>) => {
    router = attachRoutes(routeOb, router);
  });
  return router;
};
export default routesConfig;
