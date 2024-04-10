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
const user_1 = __importDefault(require("../../models/user"));
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const finduser = yield user_1.default.findOne({ email: data.email });
        if (finduser) {
            return finduser;
        }
        const createUser = yield user_1.default.create(data);
        return createUser;
    }
    catch (error) { }
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
