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
exports.deleteJokeService = exports.likeDisLikeJokeService = exports.updateJokeService = exports.getJokeService = exports.listJokesService = exports.addJokeService = void 0;
const jokes_1 = __importDefault(require("../../models/jokes"));
const user_1 = __importDefault(require("../../models/user"));
const jokeTrack_1 = __importDefault(require("../../models/jokeTrack"));
const jokesConstant_1 = require("../../config/constants/jokesConstant");
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
    var _a;
    try {
        const jokes = yield jokes_1.default.find()
            .populate([{ path: "author", select: "name" }])
            .select("-updatedAt -createdAt -__v")
            .sort({ createdAt: -1 })
            .lean();
        for (const joke of jokes) {
            const track = yield jokeTrack_1.default.find({ jokeId: joke._id });
            const likes = track.filter((trc) => trc.status === jokesConstant_1.STATUS.LIKE).length;
            const dislikes = track.filter((trc) => trc.status === jokesConstant_1.STATUS.DISLIKE).length;
            joke.likes = likes;
            joke.dislikes = dislikes;
            joke.authorName = (_a = joke.author) === null || _a === void 0 ? void 0 : _a.name;
            delete joke.author;
        }
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
const likeDisLikeJokeService = (jokeId, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const joke = yield jokes_1.default.findById(jokeId).lean();
        if (!joke) {
            return { flag: false, data: "Joke not found." };
        }
        const user = yield user_1.default.findById(data.userId).lean();
        if (!user) {
            return { flag: false, data: "User not found." };
        }
        const body = {
            jokeId: jokeId,
            userId: data.userId,
        };
        const track = yield jokeTrack_1.default.findOneAndUpdate(body, { status: data.status }, { new: true, upsert: true });
        return { flag: true, data: track };
    }
    catch (error) {
        console.error("Error - likeDisLikeJokeService", error);
        return { flag: false, data: null };
    }
});
exports.likeDisLikeJokeService = likeDisLikeJokeService;
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
