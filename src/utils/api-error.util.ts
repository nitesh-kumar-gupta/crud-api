import { HttpStatusInterface } from '../interfaces';

class APIerror extends Error {
  statusCode: number;
  constructor(httpStatus: HttpStatusInterface) {
    super(httpStatus?.message || 'Something went wrong!');
    this.statusCode = httpStatus.code || 500;
    Error.captureStackTrace(this);
  }
}
export default APIerror;
