import express from "express";
import { config } from "dotenv";

// process.loadEnvFile;
config();

const app = express();
const PORT = process.env.PORT || 3000

app.get("/hello", (req, res, next) => {
  return res.send("Hello")
})

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`)
})