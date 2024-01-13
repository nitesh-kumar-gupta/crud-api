import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const NODE_ENV: string = process.env.NODE_ENV as string;
const PROTOCOL: string = process.env.PROTOCOL as string;
const HOSTNAME: string = process.env.HOSTNAME as string;
const PORT: number = Number(process.env.PORT) as number;

const SERVER = {
  environment: NODE_ENV,
  protocol: PROTOCOL,
  hostname: HOSTNAME,
  port: PORT
};
const env = {
  server: SERVER
};
export default env;
