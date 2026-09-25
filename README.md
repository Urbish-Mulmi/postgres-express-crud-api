# PostgreSQL Express CRUD API

REST API built with **Node.js, Express.js, and PostgreSQL** implementing CRUD operations for a `users` resource.

The project focuses on PostgreSQL integration with an Express backend and common backend practices including connection pooling, request validation, centralized error handling, and REST-style routing.

## Tech Stack

* **Node.js** — JavaScript runtime
* **Express.js 5** — REST API framework
* **PostgreSQL** — relational database
* **pg** — Node.js PostgreSQL client with connection pooling
* **Docker** — runs PostgreSQL in a container
* **Joi** — request validation
* **Nodemon** — development auto-restart
* **Bruno** — API testing

## Features

* PostgreSQL database integration
* Connection pooling using `pg.Pool`
* CRUD operations for the `users` resource
* Joi-based input validation
* Centralized error-handling middleware
* Database initialization during application startup

## API Endpoints

### Users

| Method   | Endpoint         | Operation        |
| -------- | ---------------- | ---------------- |
| `GET`    | `/api/users`     | Get all users    |
| `GET`    | `/api/users/:id` | Get a user by ID |
| `POST`   | `/api/users`     | Create a user    |
| `PUT`    | `/api/users/:id` | Update a user    |
| `DELETE` | `/api/users/:id` | Delete a user    |

## Database

PostgreSQL is provided through a Docker container and exposed on port `5432`.

The Node.js application connects to PostgreSQL using:

```env
PORT=4001
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=express-crud
```

The Node.js application runs on the host machine while PostgreSQL runs inside Docker. Docker maps the PostgreSQL container's port `5432` to the host's port `5432`.

## Application Startup Flow

The application starts in the following order:

```text
Verify PostgreSQL connection
          ↓
Initialize database
          ↓
Start Express server
```

The Express server starts listening only after PostgreSQL connectivity has been verified and database initialization has completed.

## Running Locally

Install dependencies:

```bash
npm install
```

Run in development mode:

```bash
npm run dev
```

Run normally:

```bash
npm start
```

The API runs at:

```text
http://localhost:4001
```

## Environment Variables

The repository includes a `.env.example` file with placeholder values.

Create a `.env` file based on it and provide your local PostgreSQL credentials.


