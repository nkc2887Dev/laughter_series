"use strict";
const mongoose_1 = require("mongoose");
const db_1 = require("../config/db");
const schema = new mongoose_1.Schema({
    jokeId: { type: mongoose_1.Schema.Types.ObjectId, ref: "jokes", index: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "users", index: true },
    status: { type: String }, //status 1 for like, 2 for dislike
}, { timestamps: true });
const JokeTrack = (0, db_1.model)("joketrack", schema, "joketrack");
module.exports = JokeTrack;
