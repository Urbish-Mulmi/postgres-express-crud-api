 import dotenv from "dotenv"; import express from "express";
// a pool is imported from db.js, that file is responsible to create postgres connection
import pool from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import errorHandling from "./middlewares/errorHandler.Middleware.js";
import createUserTable from "./data/createUserTable.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 4001;

// Middlewares
  app.use(express.json()); 

// Routes
  // Route to test Backend Connection
    app.get(["/","/route-test","/test-route"], (req, res) => {
        res.json({
          Message:"Hello from backend!",
          Homepage:"go to /api/",
          getEndpoint:"go to /api/users"
    });
      });

  app.use('/api', userRoutes)

  // To address route not found cases
  app.use((req, res) => {
    res.status(404).json({
      error: "Route not found",
      CurrentPath: req.originalUrl,
      UseCorrectPath: "/api/users",
    });
  });

// Error handling middleware
  app.use(errorHandling)

// Postgres connection and if connection success, backend server Startup 
  async function startServer() {
    try {
      // Verify PostgreSQL connection using pool.query
        await pool.query("SELECT 1");
        console.log("✅ PostgreSQL connected");

      // Initialize database
       await createUserTable();

      // Start Backend server
        app.listen(port, () => {
          console.log(`✅ Server is running | http://localhost:${port}/`);
        });
    } catch (error) {
        console.error("❌ startServer function failed, check file-> index.js");
        console.error("❌ Postgres and Backend server did not start, check file-> index.js");
        console.error(error.message);
        process.exit(1);}
  }

startServer();