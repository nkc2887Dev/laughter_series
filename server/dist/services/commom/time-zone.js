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
exports.convertToTz = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const config_1 = __importDefault(require("../../config/config"));
const convertToTz = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let tz = (params === null || params === void 0 ? void 0 : params.tz) ? params.tz : config_1.default.TZ;
        let format = (params === null || params === void 0 ? void 0 : params.format) ? params.format : "";
        let [hour, minute, second] = (params === null || params === void 0 ? void 0 : params.time)
            ? params === null || params === void 0 ? void 0 : params.time.split(":")
            : [(0, moment_timezone_1.default)(params.date).tz(tz).hour(), (0, moment_timezone_1.default)(params.date).tz(tz).minute(), (0, moment_timezone_1.default)(params.date).tz(tz).second()];
        let convertedDate = (0, moment_timezone_1.default)(params.date).tz(tz).hour(hour).minute(minute).second(second).format(format);
        return convertedDate;
    }
    catch (error) {
        console.error("Error - convertToTz", error);
        throw new Error(error);
    }
});
exports.convertToTz = convertToTz;
