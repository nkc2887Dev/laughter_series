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
exports.deleteJokeController = exports.likeDisLikeJokeController = exports.updateJokeController = exports.getJokeController = exports.listJokesController = exports.addJokeController = void 0;
const jokeService_1 = require("../../services/client/jokeService");
const addJokeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, jokeService_1.addJokeService)(req);
        if (result.flag) {
            res.status(201).json({
                message: "Jokes create Successfully!",
                data: result.data,
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
        console.error(`Error-addJokeController ${error}`);
    }
});
exports.addJokeController = addJokeController;
const listJokesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, jokeService_1.listJokesService)(req);
        if (result.flag) {
            res.status(201).json({
                message: "Jokes list fetch Successfully!",
                data: result.data,
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
        console.error(`Error-listJokesController ${error}`);
    }
});
exports.listJokesController = listJokesController;
const getJokeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, jokeService_1.getJokeService)(req);
    }
    catch (error) {
        console.error(`Error-getJokeController ${error}`);
    }
});
exports.getJokeController = getJokeController;
const updateJokeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, jokeService_1.updateJokeService)(req);
    }
    catch (error) {
        console.error(`Error-updateJokeController ${error}`);
    }
});
exports.updateJokeController = updateJokeController;
const likeDisLikeJokeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.jokeId;
        const data = req.body;
        const result = yield (0, jokeService_1.likeDisLikeJokeService)(id, data);
        if (result.flag) {
            res.status(200).json({
                message: "Jokes fetch Successfully!",
                data: result.data,
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
        console.error(`Error-likeDisLikeJokeController ${error}`);
    }
});
exports.likeDisLikeJokeController = likeDisLikeJokeController;
const deleteJokeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, jokeService_1.deleteJokeService)(req);
    }
    catch (error) {
        console.error(`Error-deleteJokeController ${error}`);
    }
});
exports.deleteJokeController = deleteJokeController;
