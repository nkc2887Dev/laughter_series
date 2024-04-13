import express from "express";
import configEnv from "dotenv";
import routes from "../src/routes/index";
import mongoose from "./config/db";
import config from "./config/config";
import initSeed from "./seeders";
import passport from "passport";
import session from "express-session";
import { JWT } from "./config/constants/userConstant";
import cors from "cors";

configEnv.config();
mongoose;
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(session({ secret: JWT.SECRET, resave: false, saveUninitialized: false }));
app.use(express.urlencoded({ extended: true }));

if (config.SEED == "true") {
  initSeed();
}
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

// Routing
app.use("/api/v1", routes);

app.listen(config.server.port, () => {
  console.info(`Server is running on http://localhost:${config.server.port}`);
});
