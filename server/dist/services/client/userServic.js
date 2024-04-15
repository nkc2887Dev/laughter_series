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
exports.logoutUserService = exports.profileService = exports.forgotPasswordService = exports.loginUserService = exports.createUserService = void 0;
const userConstant_1 = require("../../config/constants/userConstant");
const user_1 = __importDefault(require("../../models/user"));
const role_1 = __importDefault(require("../../models/role"));
const user_2 = require("../commom/user");
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = [];
        const finduser = yield user_1.default.findOne({ $or: [{ email: data.email }, { mobNo: data.mobNo }] });
        if (finduser) {
            return {
                flag: false,
                data: "Provided email or phone number are already exists.",
            };
        }
        const roleData = yield role_1.default.findOne({ code: userConstant_1.ROLE.CANDIDATE });
        roles.push({ roleId: roleData._id });
        data.roles = roles;
        const createUser = yield user_1.default.create(data);
        return {
            flag: true,
            data: createUser,
        };
    }
    catch (error) {
        console.error("Error - createUserService", error);
        return { flag: false, data: null };
    }
});
exports.createUserService = createUserService;
const loginUserService = (data, role) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findOne({ email: data.email, isActive: true });
        if (!user) {
            return {
                flag: false,
                data: "User not found!",
            };
        }
        const isPasswordMatch = yield user.isPasswordMatch(data.password);
        if (!isPasswordMatch) {
            return {
                flag: false,
                data: "Password is wrong!",
            };
        }
        yield (0, user_2.updateLastLogin)(user);
        yield (0, user_2.generateTokenManually)({ user, email: user.email });
        return {
            flag: true,
            data: user,
        };
    }
    catch (error) {
        console.error("Error - loginUserService", error);
        return { flag: false, data: null };
    }
});
exports.loginUserService = loginUserService;
const forgotPasswordService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return { flag: true, data: {} };
    }
    catch (error) {
        console.error("Error - forgotPasswordService", error);
        return { flag: false, data: null };
    }
});
exports.forgotPasswordService = forgotPasswordService;
const profileService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!user) {
            return {
                flag: false,
                data: "User not found!",
            };
        }
        return {
            flag: true,
            data: user,
        };
    }
    catch (error) {
        console.error("Error - profileService", error);
        return { flag: false, data: null };
    }
});
exports.profileService = profileService;
const logoutUserService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return { flag: true, data: {} };
    }
    catch (error) {
        console.error("Error - logoutUserService", error);
        return { flag: false, data: null };
    }
});
exports.logoutUserService = logoutUserService;
