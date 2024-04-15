"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJoke = exports.updateJoke = exports.addJoke = void 0;
const joi_1 = __importDefault(require("joi"));
exports.addJoke = joi_1.default.object({
    title: joi_1.default.string().required(),
    content: joi_1.default.string().required(),
    author: joi_1.default.string().required(),
    category: joi_1.default.string().optional().allow(null, ""),
});
exports.updateJoke = joi_1.default.object({
    author: joi_1.default.string().optional().allow(null, ""),
    title: joi_1.default.string().optional().allow(null, ""),
    content: joi_1.default.string().optional().allow(null, ""),
    category: joi_1.default.string().optional().allow(null, ""),
    likes: joi_1.default.number().optional().allow(null, ""),
    dislikes: joi_1.default.number().optional().allow(null, ""),
    comments: joi_1.default.array().items({
        user: joi_1.default.string().optional(),
    }),
});
exports.deleteJoke = joi_1.default.object({});
