import moment from 'moment-timezone';
import pino from 'pino';
import pretty from 'pino-pretty';

const stream = pretty({
  colorize: true,
  timestampKey: 'time',
  ignore: 'pid,hostname',
  customPrettifiers: {
    time: () =>
      `${moment()
        .utcOffset(new Date().getTimezoneOffset())
        .format('DD MMM YYYY hh:mm:ss A')}: `
  }
});
const logger = pino(stream);
export default logger;
