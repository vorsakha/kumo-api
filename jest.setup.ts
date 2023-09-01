import dotenv from "dotenv";

dotenv.config();

process.env.DB_HOST = "localhost";
process.env.DB_PORT = process.env.DB_PORT_TEST || "5433";
