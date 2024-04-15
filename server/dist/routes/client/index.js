"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./user"));
const jokes_1 = __importDefault(require("./jokes"));
const routes = express_1.default.Router();
routes.use("/user", user_1.default);
routes.use("/jokes", jokes_1.default);
module.exports = routes;
