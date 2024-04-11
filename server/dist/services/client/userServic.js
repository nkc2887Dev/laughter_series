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
exports.profileService = exports.forgotPasswordService = exports.loginUserService = exports.createUserService = void 0;
const userConstant_1 = require("../../config/constants/userConstant");
const user_1 = __importDefault(require("../../models/user"));
const role_1 = __importDefault(require("../../models/role"));
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const roles = [];
        const finduser = yield user_1.default.findOne({ email: data.email });
        if (finduser) {
            return finduser;
        }
        const roleData = yield role_1.default.findOne({ code: userConstant_1.ROLE.CANDIDATE });
        roles.push({ roleId: roleData._id });
        data.roles = roles;
        data.mobNo = (_a = data === null || data === void 0 ? void 0 : data.mobNo) === null || _a === void 0 ? void 0 : _a.replace(/^0/g, "");
        const createUser = yield user_1.default.create(data);
        return createUser;
    }
    catch (error) {
        console.error("Error - createUserService", error);
    }
});
exports.createUserService = createUserService;
const loginUserService = () => {
    try {
    }
    catch (error) { }
};
exports.loginUserService = loginUserService;
const forgotPasswordService = () => {
    try {
    }
    catch (error) { }
};
exports.forgotPasswordService = forgotPasswordService;
const profileService = () => {
    try {
    }
    catch (error) { }
};
exports.profileService = profileService;
