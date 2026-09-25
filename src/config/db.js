import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const dbEnv = process.env.DB_ENV;

if (!["local", "neon"].includes(dbEnv)) {
  throw new Error('DB_ENV must be either "local" or "neon"');
}

const pool =
  dbEnv === "neon"
    ? new Pool({
        connectionString: process.env.NEON_DATABASE_URL,
      })
    : new Pool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });

console.log(`🧩 Database environment: ${dbEnv}`);

export default pool;