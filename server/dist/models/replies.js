"use strict";
const cutomPaginate_1 = require("../config/constants/cutomPaginate");
const db_1 = require("../config/db");
const mongoosePaginate = require("mongoose-paginate-v2");
mongoosePaginate.paginate.options = {
    customLabels: cutomPaginate_1.myCustomLabels,
};
const schema = new db_1.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
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
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
        },
    },
    timestamps: true,
});
schema.plugin(mongoosePaginate);
const Replies = (0, db_1.model)("replies", schema, "replies");
module.exports = Replies;
