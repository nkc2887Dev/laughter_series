"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./admin/index"));
const index_2 = __importDefault(require("./client/index"));
const routes = express_1.default.Router();
routes.use("/admin", index_1.default);
routes.use("/client", index_2.default);
module.exports = routes;
