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
exports.deleteJokeService = exports.updateJokeService = exports.getJokeService = exports.listJokesService = exports.addJokeService = void 0;
const jokes_1 = __importDefault(require("../../models/jokes"));
const user_1 = __importDefault(require("../../models/user"));
const addJokeService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const joke = yield jokes_1.default.create(req.body);
        return { flag: true, data: joke };
    }
    catch (error) {
        console.error("Error - addJokeService", error);
        return { flag: false, data: null };
    }
});
exports.addJokeService = addJokeService;
const listJokesService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let jokes = yield jokes_1.default.find().then((res) => __awaiter(void 0, void 0, void 0, function* () {
            yield Promise.all(res.map((joke) => __awaiter(void 0, void 0, void 0, function* () {
                const user = yield user_1.default.findOne({ _id: joke.author });
                joke.authorName = user.name;
                return joke;
            })));
            return res;
        }));
        return { flag: true, data: jokes };
    }
    catch (error) {
        console.error("Error - listJokesService", error);
        return { flag: false, data: null };
    }
});
exports.listJokesService = listJokesService;
const getJokeService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return { flag: true, data: {} };
    }
    catch (error) {
        console.error("Error - getJokeService", error);
        return { flag: false, data: null };
    }
});
exports.getJokeService = getJokeService;
const updateJokeService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return { flag: true, data: {} };
    }
    catch (error) {
        console.error("Error - updateJokeService", error);
        return { flag: false, data: null };
    }
});
exports.updateJokeService = updateJokeService;
const deleteJokeService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return { flag: true, data: {} };
    }
    catch (error) {
        console.error("Error - deleteJokeService", error);
        return { flag: false, data: null };
    }
});
exports.deleteJokeService = deleteJokeService;
