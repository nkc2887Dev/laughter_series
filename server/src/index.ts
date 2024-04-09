import express from "express";
import configEnv from "dotenv";
import routes from "../src/routes/index";
import mongoose from "./config/db";
import config from "./config/config";

configEnv.config();
mongoose;
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routing
app.use("/api/v1", routes);

app.listen(config.server.port, () => {
  console.info(`Server is running on http://localhost:${config.server.port}`);
});
