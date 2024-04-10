"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const dbConfigure = `${config_1.default.server.DB_USERNAME}${config_1.default.server.DB_PASSWORD}`;
const connectionString = `${config_1.default.server.DB_CONNECTION}://${dbConfigure}${config_1.default.server.DB_HOST}${config_1.default.server.DB_PORT}/${config_1.default.server.DB_DATABASE}`;
mongoose_1.default.connect(connectionString);
const db = mongoose_1.default.connection;
db.once("open", () => {
    console.info("Connection Succeed");
});
db.on("error", () => {
    console.error("Error in connect mongo");
});
module.exports = mongoose_1.default;
