"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createUser = joi_1.default
    .object({
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    mobNo: joi_1.default
        .string()
        .regex(/^[0-9]*$/)
        .replace(/^0/g, "")
        .length(10)
        .required()
        .error(new Error("Mobile number should be 10 digits long.")),
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
})
    .unknown(false);
exports.loginUser = joi_1.default
    .object({
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
})
    .unknown(false);
