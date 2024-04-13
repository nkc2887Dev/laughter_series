"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    server: {
        port: process.env.PORT || 9876,
        DB_CONNECTION: process.env.DB_CONNECTION || "mongodb",
        DB_HOST: process.env.DB_HOST || "localhost",
        DB_PORT: process.env.DB_PORT === "" ? process.env.DB_PORT : process.env.DB_PORT ? `:${process.env.DB_PORT}` : ":27017",
        DB_DATABASE: process.env.DB_DATABASE || `laughter_series`,
        DB_USERNAME: process.env.DB_PASSWORD ? `${process.env.DB_USERNAME}:` : "",
        DB_PASSWORD: process.env.DB_PASSWORD ? `${process.env.DB_PASSWORD}@` : "",
    },
    SEED: (_a = process.env.SEED) !== null && _a !== void 0 ? _a : "true",
    TZ: (_b = process.env.TZ) !== null && _b !== void 0 ? _b : "asia/kolkata",
};
