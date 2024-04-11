"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const userController_1 = require("../../controller/client/userController");
const routes = express_1.default.Router();
routes.post("/create", userController_1.registerUserController);
routes.get("/login", userController_1.loginUserController);
routes.put("/forgot-password", userController_1.forgotPasswordController);
routes.get("/profile", userController_1.profileController);
routes.get("/logout", userController_1.loginUserController);
module.exports = routes;
