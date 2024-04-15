import { model } from "mongoose";
import { Schema } from "../config/db";
import { myCustomLabels } from "../config/constants/cutomPaginate";
const mongoosePaginate = require("mongoose-paginate-v2");

mongoosePaginate.paginate.options = {
  customLabels: myCustomLabels,
};

const RoleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    // Key use for can Delete validation. It will be default false.
    canDel: {
      type: String,
      default: true,
      required: true,
      alias: "canDelete",
    },
    isUnq: {
      type: Boolean,
      default: false,
      alias: "isUnique",
    },
    deletedAt: {
      type: Date,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);
RoleSchema.plugin(mongoosePaginate);

const Role = model("role", RoleSchema, "role");

export = Role;
