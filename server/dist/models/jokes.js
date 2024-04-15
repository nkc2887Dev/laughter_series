"use strict";
const cutomPaginate_1 = require("../config/constants/cutomPaginate");
const jokesConstant_1 = require("../config/constants/jokesConstant");
const db_1 = require("../config/db");
const mongoosePaginate = require("mongoose-paginate-v2");
mongoosePaginate.paginate.options = {
    customLabels: cutomPaginate_1.myCustomLabels,
};
const schema = new db_1.Schema({
    title: { type: String },
    content: { type: String },
    author: {
        type: db_1.Schema.Types.ObjectId,
        ref: "users",
    },
    authorName: { type: String },
    isActive: { type: Boolean, default: true, index: true }, //isActive
    category: {
        type: String,
        enum: jokesConstant_1.JOKES_CATEGORY,
        default: jokesConstant_1.JOKES_CATEGORY.OTHER,
    },
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
    },
    comments: [{ commentId: { type: db_1.Schema.Types.ObjectId, ref: "comments", index: true } }],
    isArchived: {
        type: Boolean,
        default: false,
    },
    tags: {
        type: [String],
        default: [],
    },
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
        },
    },
    timestamps: true,
});
schema.plugin(mongoosePaginate);
const Jokes = (0, db_1.model)("jokes", schema, "jokes");
module.exports = Jokes;
