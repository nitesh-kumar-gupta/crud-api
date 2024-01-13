import { Request, Response, NextFunction } from 'express';
import XSSfilter from 'xss-filters';

const clean = (data: unknown) => {
  if (typeof data === 'undefined') return null;
  else if (typeof data === 'object')
    return JSON.parse(XSSfilter.inHTMLData(JSON.stringify(data)));
  else if (typeof data === 'string') return XSSfilter.inHTMLData(data);
  return data;
};

const xssFilter = (req: Request, res: Response, next: NextFunction) => {
  req.body = clean(req.body);
  req.params = clean(req.params);
  req.query = clean(req.query);
  res.locals.req_url = req.url;
  return next();
};
export default xssFilter;
