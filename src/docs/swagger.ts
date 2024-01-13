import { env } from '../configs';
import { version } from './../../package.json';

const swagger = {
  openapi: '3.1.0',
  info: {
    title: 'Nodejs Express REST API ',
    version: version,
    description:
      'Nodejs REST API with typescript. Simple CRUD API using in-memory database underneath',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html'
    },
    contact: {
      name: 'Nitesh Kumar Gupta',
      email: 'nit90esh@gmail.com'
    }
  },
  servers: [
    {
      url: `http://localhost:${env.server.port}`,
      description: 'Development server'
    }
  ]
};

export default swagger;
