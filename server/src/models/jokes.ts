import { myCustomLabels } from "../config/constants/cutomPaginate";
import { JOKES_CATEGORY } from "../config/constants/jokesConstant";
import { Schema, model } from "../config/db";
const mongoosePaginate = require("mongoose-paginate-v2");

mongoosePaginate.paginate.options = {
  customLabels: myCustomLabels,
};

const schema = new Schema(
  {
    title: { type: String },
    content: { type: String },
    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    authorName: { type: String },
    isActive: { type: Boolean, default: true, index: true }, //isActive
    category: {
      type: String,
      enum: JOKES_CATEGORY,
      default: JOKES_CATEGORY.OTHER,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    comments: [{ commentId: { type: Schema.Types.ObjectId, ref: "comments", index: true } }],
    isArchived: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: [String],
      default: [],
    },
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

const Jokes = model("jokes", schema, "jokes");
export = Jokes;
