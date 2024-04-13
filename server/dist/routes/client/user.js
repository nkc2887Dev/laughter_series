"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const userController_1 = require("../../controller/client/userController");
const userValidate_1 = require("../../helpers/validations/userValidate");
const validate_1 = require("../../helpers/policies/validate");
const passport_1 = require("../../helpers/policies/passport");
const routes = express_1.default.Router();
routes.post("/create", (0, validate_1.validate)(userValidate_1.createUser), userController_1.registerUserController);
routes.post("/login", (0, validate_1.validate)(userValidate_1.loginUser), userController_1.loginUserController);
routes.get("/profile", passport_1.authentication, userController_1.profileController);
routes.put("/forgot-password", passport_1.authentication, userController_1.forgotPasswordController);
routes.post("/logout", passport_1.authentication, userController_1.logoutUserController);
module.exports = routes;
