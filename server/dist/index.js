"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("../src/routes/index"));
const db_1 = __importDefault(require("./config/db"));
const config_1 = __importDefault(require("./config/config"));
const seeders_1 = __importDefault(require("./seeders"));
dotenv_1.default.config();
db_1.default;
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
if (config_1.default.SEED == 'true') {
    (0, seeders_1.default)();
}
// Routing
app.use("/api/v1", index_1.default);
app.listen(config_1.default.server.port, () => {
    console.info(`Server is running on http://localhost:${config_1.default.server.port}`);
});
