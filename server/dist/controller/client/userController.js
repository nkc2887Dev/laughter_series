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
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUserController = exports.profileController = exports.forgotPasswordController = exports.loginUserController = exports.registerUserController = void 0;
const userServic_1 = require("../../services/client/userServic");
const userConstant_1 = require("../../config/constants/userConstant");
const registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userServic_1.createUserService)(req.body);
        if (result) {
            res.status(201).json({
                message: "User create Successfully!",
                data: result,
            });
        }
        else {
            res.status(401).json({
                message: result.data,
                data: null,
            });
        }
    }
    catch (error) {
        console.error(`Error-registerUser ${error}`);
    }
});
exports.registerUserController = registerUserController;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userServic_1.loginUserService)(req.body, userConstant_1.ROLE.CANDIDATE);
        if (result) {
            res.status(201).json({
                message: "User login Successfully!",
                data: result,
            });
        }
        else {
            res.status(401).json({
                message: result.data,
                data: null,
            });
        }
    }
    catch (error) {
        console.error(`Error-registerUser ${error}`);
    }
});
exports.loginUserController = loginUserController;
const forgotPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userServic_1.forgotPasswordService)();
    }
    catch (error) {
        console.error(`Error-registerUser ${error}`);
    }
});
exports.forgotPasswordController = forgotPasswordController;
const profileController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userServic_1.profileService)(req.user);
        if (result) {
            res.status(201).json({
                message: "User data has been successfully obtained.",
                data: result,
            });
        }
        else {
            res.status(401).json({
                message: result.data,
                data: null,
            });
        }
    }
    catch (error) {
        console.error(`Error-registerUser ${error}`);
    }
});
exports.profileController = profileController;
const logoutUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userServic_1.logoutUserService)(req);
    }
    catch (error) {
        console.error(`Error-registerUser ${error}`);
    }
});
exports.logoutUserController = logoutUserController;
