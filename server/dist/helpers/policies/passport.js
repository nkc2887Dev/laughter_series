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
exports.authentication = void 0;
const passport_1 = __importDefault(require("passport"));
const role_1 = __importDefault(require("../../models/role"));
const authentication = (req, res, next) => {
    try {
        return passport_1.default.authenticate("jwt", { session: false }, (err, user, info) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            if (err) {
                return next(err);
            }
            if (!user) {
                console.error("Error: User not found in our DB.");
                return res.status(401).json({
                    code: "UNAUTHENTICATED",
                    message: "UNAUTHENTICATED",
                    data: {},
                });
            }
            if (!user.isActive) {
                console.error("Error: User not active.");
                return res.status(401).json({
                    code: "UNAUTHENTICATED",
                    message: "UNAUTHENTICATED",
                    data: {},
                });
            }
            const role = yield role_1.default.findOne({ _id: (_a = user === null || user === void 0 ? void 0 : user.roles[0]) === null || _a === void 0 ? void 0 : _a.roleId });
            req.userId = user.id;
            req.user = user;
            req.roleId = user === null || user === void 0 ? void 0 : user.roles[0].roleId;
            req.role = role.code;
            next();
        }))(req, res, next);
    }
    catch (error) {
        console.error("Error - authentication", error);
        throw error;
    }
};
exports.authentication = authentication;
