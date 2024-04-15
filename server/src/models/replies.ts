import { myCustomLabels } from "../config/constants/cutomPaginate";
import { Schema, model } from "../config/db";
const mongoosePaginate = require("mongoose-paginate-v2");

mongoosePaginate.paginate.options = {
  customLabels: myCustomLabels,
};

const schema = new Schema(
  {
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

const Replies = model("replies", schema, "replies");
export = Replies;
