"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTokenManually = exports.updateLastLogin = void 0;
const userConstant_1 = require("../../config/constants/userConstant");
const user_1 = __importDefault(require("../../models/user"));
const time_zone_1 = require("./time-zone");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const updateLastLogin = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.findOneAndUpdate({ _id: user._id }, { $set: { lastLogin: yield (0, time_zone_1.convertToTz)({ date: new Date() }) } }, { new: true });
});
exports.updateLastLogin = updateLastLogin;
const generateTokenManually = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = params.user;
        const email = params.email;
        const authToken = yield generateToken({ id: user._id }, email, userConstant_1.JWT.SECRET, userConstant_1.JWT.EXPIRES_IN);
        const date = new Date();
        date.setDate(date.getDate() + 30);
        const pushData = {
            token: authToken,
            validateTill: date,
        };
        yield user_1.default.findOneAndUpdate({ _id: user._id }, { $addToSet: { tokens: pushData } });
        return authToken;
    }
    catch (error) {
        console.error("Error - generateTokenManually", error);
        throw new Error(error.message);
    }
});
exports.generateTokenManually = generateTokenManually;
const generateToken = (user_2, email_1, secret_1, ...args_1) => __awaiter(void 0, [user_2, email_1, secret_1, ...args_1], void 0, function* (user, email, secret, expires = "1s") {
    let token = jsonwebtoken_1.default.sign({
        id: user.id,
        email: email,
    }, secret, {
        expiresIn: expires,
    });
    return token;
});
