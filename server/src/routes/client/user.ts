import express from "express";
import {
  forgotPasswordController,
  loginUserController,
  profileController,
  registerUserController,
} from "../../controller/client/userController";

const routes = express.Router();

routes.post("/create", registerUserController);
routes.get("/login", loginUserController);
routes.put("/forgot-password", forgotPasswordController);
routes.get("/profile", profileController);

export = routes;
