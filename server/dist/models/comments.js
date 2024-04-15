"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const cutomPaginate_1 = require("../config/constants/cutomPaginate");
const db_1 = require("../config/db");
const replies_1 = __importDefault(require("./replies"));
const mongoosePaginate = require("mongoose-paginate-v2");
mongoosePaginate.paginate.options = {
    customLabels: cutomPaginate_1.myCustomLabels,
};
const schema = new db_1.Schema({
    content: {
        type: String,
        trim: true,
    },
    author: {
        type: String,
        trim: true,
    },
    joke: {
        type: db_1.Schema.Types.ObjectId,
        ref: "jokes",
    },
    isActive: { type: Boolean, default: true, index: true }, //isActive
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
    },
    replies: [replies_1.default.schema],
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
        },
    },
    timestamps: true,
});
schema.plugin(mongoosePaginate);
const Comments = (0, db_1.model)("comments", schema, "comments");
module.exports = Comments;
