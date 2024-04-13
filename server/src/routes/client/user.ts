import express from "express";
import {
  forgotPasswordController,
  loginUserController,
  logoutUserController,
  profileController,
  registerUserController,
} from "../../controller/client/userController";
import { createUser, loginUser } from "../../helpers/validations/userValidate";
import { validate } from "../../helpers/policies/validate";
import { authentication } from "../../helpers/policies/passport";

const routes = express.Router();

routes.post("/create", validate(createUser), registerUserController);
routes.post("/login", validate(loginUser), loginUserController);
routes.get("/profile", authentication, profileController);
routes.put("/forgot-password", authentication, forgotPasswordController);
routes.post("/logout", authentication, logoutUserController);

export = routes;
