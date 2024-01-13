import { HttpStatusInterface } from '../interfaces';

class APIsuccess {
  statusCode: number;
  message: string;
  data: object;
  constructor(httpStatus: HttpStatusInterface, data: object = {}) {
    this.statusCode = httpStatus.code || 200;
    this.message = httpStatus.message;
    this.data = data;
  }
}
export default APIsuccess;
