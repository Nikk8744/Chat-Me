import express from "express";
import { config } from "dotenv";

// process.loadEnvFile;
config();

const app = express();

app.use(express.json());


export default app;
