import { createServer, Server as HttpServer } from 'http';
import { logger } from './utils';
import app from './app';
import { env } from './configs';

const PORT = env.server.port || 4000;
const httpServer: HttpServer = createServer(app);

httpServer.listen(PORT, () => {
  logger.info(
    `Server is running on ${env.server.protocol}//${env.server.hostname}:${PORT}`
  );
});
process.on('uncaughtException', (error: unknown) => {
  logger.error(`Uncaught exception: ${error}`);
  httpServer.close(() => {
    logger.warn('HTTP server closed');
    process.exit(1);
  });
});
process.on('unhandledRejection', (reason, promise) => {
  logger.error(`Unhandled Rejection at: ${promise} reason: ${reason}`);
  httpServer.close(() => {
    logger.warn('HTTP server closed');
    process.exit(1);
  });
});
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  httpServer.close(() => {
    logger.warn('HTTP server closed');
  });
});
