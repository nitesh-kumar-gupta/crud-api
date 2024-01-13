import { createServer, Server as HttpServer } from 'http';
import cluster, { Worker } from 'cluster';
import os from 'os';
import { logger } from './utils';
import app from './app';
import { env } from './configs';

const numCPUs = os.cpus().length;
const PORT = env.server.port || 4000;
const httpServer: HttpServer = createServer(app);
cluster.setupPrimary({
  exec: `${__dirname}/server.js`
});

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker: Worker) => {
    logger.warn(`Worker ${worker.process.pid} died`);
    logger.info('Starting another worker');
    cluster.fork();
  });
} else {
  const workerPort = cluster.worker ? PORT + cluster.worker.id : 0;
  httpServer.listen(workerPort, () => {
    logger.info(
      `Server is running on ${env.server.protocol}//${env.server.hostname}:${workerPort}`
    );
  });
}

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
