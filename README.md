# CRUD API using Node.js and TypeScript

This is a simple CRUD (Create, Read, Update, Delete) API built with Node.js and
TypeScript. The API uses an in-memory database for simplicity. It comes with
various features and middleware to enhance security and logging.

## Features

- Express.js for building the API
- TypeScript for enhanced code readability and maintainability
- In-memory database for quick setup and testing
- CRUD operations for managing resources
- Middleware for compression, security headers, and logging
- Swagger documentation for API endpoints
- Jest for unit testing

## Prerequisites

Make sure you have Node.js and npm installed on your machine.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nitesh-kumar-gupta/crud-api.git
   ```
2. Install dependencies:
   ```bash
   cd crud-api
   npm install
   ```

## Usage

### Development Mode

Start the API in development mode with automatic restart on code changes:

```bash
 npm run start:dev
```

The API will be accessible at `http://localhost:4000`.

### Production Mode

Build and run the API in production mode:

```bash
npm run start:prod
```

The API will be accessible at `http://localhost:4000`.

### Multi-Instance Mode

Start multiple instances of the API with load balancing:

```bash
npm run start:multi
```

The API will be accessible at `http://localhost:4000`. The load balancer will
distribute requests across multiple instances.

## API Documentation

Swagger documentation is available for easy reference. After starting the API,
visit `http://localhost:4000/api-docs` in your browser to explore the API
endpoints.

## Testing

Run unit tests with Jest:

```bash
npm test
```

## Linting

Check code style and fix issues with ESLint

```bash
npm run lint
npm run lint:fix
```

## Prettier

Check code indent and fix with Prettier

```bash
npm run prettier:check
npm run prettier:format
```

## Contributing

Feel free to contribute to the project by submitting issues or pull requests.
Your feedback and suggestions are highly appreciated.
