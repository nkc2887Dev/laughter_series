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
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const userConstant_1 = require("./config/constants/userConstant");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
db_1.default;
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, express_session_1.default)({ secret: userConstant_1.JWT.SECRET, resave: false, saveUninitialized: false }));
app.use(express_1.default.urlencoded({ extended: true }));
if (config_1.default.SEED == "true") {
    (0, seeders_1.default)();
}
app.use((0, cors_1.default)());
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
require("./config/passport")(passport_1.default);
// Routing
app.use("/api/v1", index_1.default);
app.listen(config_1.default.server.port, () => {
    console.info(`Server is running on http://localhost:${config_1.default.server.port}`);
});
