import { myCustomLabels } from "../config/constants/cutomPaginate";
import { Schema, model } from "../config/db";
import Replies from "./replies";
const mongoosePaginate = require("mongoose-paginate-v2");

mongoosePaginate.paginate.options = {
  customLabels: myCustomLabels,
};

const schema = new Schema(
  {
    content: {
      type: String,
      trim: true,
    },
    author: {
      type: String,
      trim: true,
    },
    joke: {
      type: Schema.Types.ObjectId,
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
    replies: [Replies.schema],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  },
);

schema.plugin(mongoosePaginate);

const Comments = model("comments", schema, "comments");
export = Comments;
