# PostgreSQL Express CRUD API**

> ## ℹ️ ELI5
>
> **What is this?**
>
> Backend-only practice project of a REST API built by implementing CRUD operations for a `users` resource using PostgreSQL.
>
> **Things learnt and implemented**
>
> - Centralized error handling
> - Joi validation
> - Bruno API testing
> - PostgreSQL integration

> **Deployments**
>
> - **PostgreSQL DB** — Neon
> - **Backend** — Render
>
> ---

## REST API Notes

### 1. Static Route

The route stays the same, even when query parameters are added.

- `GET /api/users` — Get all users.
- `GET /api/users?limitValue=5` — Get up to 5 users.

### 2. Dynamic Route

A path parameter (e.g., `:id`) identifies a specific resource.

- `GET /api/users/42` — Get user with ID `42`.
- `GET /api/users/42/friends?limitValue=3` — Example combining a path parameter, a static path, and a query parameter.

**In this project, all three are used:**

- **Static path:** `/api/users`
- **Query parameter:** `?limitValue=5` — Controls the number of users returned.
- **Path parameter:** `/api/users/:id` — Identifies a specific user.

## Core Logic Notes

- **Error Flow:** Calling `next(err)` inside a route or middleware sends the error to the global error handler, skipping regular middleware.
- **The 4-Argument Rule:** Express recognizes an error-handling middleware by its four parameters: `(err, req, res, next)`.
> ---

## API Endpoints

#### Existing resource: `Users`

| Method | Endpoint | Operation |
| --- | --- | --- |
| `GET` | `/api/users` | Get all users |
| `GET` | `/api/users/:id` | Get a user by ID |
| `POST` | `/api/users` | Create a user |
| `PUT` | `/api/users/:id` | Update a user |
| `DELETE` | `/api/users/:id` | Delete a user |

## Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js 5** — REST API framework
- **PostgreSQL** — Relational database
- **pg** — Node.js PostgreSQL client with connection pooling
- **Docker** — Runs PostgreSQL in a container
- **Joi** — Request validation
- **Bruno** — API testing

## Features

- PostgreSQL database integration
- Connection pooling using `pg.Pool`
- CRUD operations for the `users` resource
- Joi-based input validation
- Centralized error-handling middleware
- Database initialization during application startup

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

## Application Startup Flow

```text
Verify PostgreSQL connection
           ↓
Initialize database
           ↓
Start Express server
```

The Express server starts listening only after the PostgreSQL connection has been verified and database initialization has completed.

## Running Locally

### Install dependencies

```bash
npm install
```

### Start PostgreSQL

Start the PostgreSQL Docker container used for local development.

### Configure environment variables

Create a `.env` file based on `.env.example` and provide your local PostgreSQL credentials.

### Start the development server

```bash
npm run dev
```

Or:

```bash
npm start
```

The API runs at:

```text
http://localhost:4001
```