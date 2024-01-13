import { Handler } from 'express';

interface RouteInterface {
  type: string;
  path: string;
  handlers: Array<Handler>;
}
export default RouteInterface;
