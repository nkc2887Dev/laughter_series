"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
routes.use("/user", () => { });
module.exports = routes;
