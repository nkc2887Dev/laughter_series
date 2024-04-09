import mongoose from "mongoose";
import config from "./config";

const dbConfigure = `${config.server.DB_USERNAME}${config.server.DB_PASSWORD}`;
const connectionString = `${config.server.DB_CONNECTION}://${dbConfigure}${config.server.DB_HOST}${config.server.DB_PORT}/${config.server.DB_DATABASE}`;
mongoose.connect(connectionString);

const db = mongoose.connection;

db.once("open", () => {
  console.info("Connection Succeed");
});

db.on("error", () => {
  console.error("Error in connect mongo");
});

export = mongoose;
