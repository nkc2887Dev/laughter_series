import { model } from "mongoose";
import { Schema } from "../config/db";
import { COUNTRYCONST } from "../config/constants/userConstant";
import { myCustomLabels } from "../config/constants/cutomPaginate";
const bcrypt = require("bcrypt");
const mongoosePaginate = require("mongoose-paginate-v2");
// var idValidator = require("mongoose-id-validator");

mongoosePaginate.paginate.options = {
  customLabels: myCustomLabels,
};

const schema = new Schema(
  {
    name: { type: String }, // Name of User
    firstName: { type: String }, // First name of the user.
    lastName: { type: String }, // Last name of the user.
    countryCode: { type: String, default: COUNTRYCONST.INDIA },
    mobNo: { type: String }, // Mobile No of User
    email: { type: String, index: true }, // Name of User
    isActive: { type: Boolean, default: true, index: true }, //isActive
    roles: [
      { roleId: { type: Schema.Types.ObjectId, ref: "role", index: true } }, // role ref  schema = role
    ],
    password: { type: String },
    tokens: [
      {
        token: { type: String },
        validateTill: { type: Date },
        refreshToken: { type: String },
        deviceDetail: { type: String },
      },
    ],
    fcmTokens: { type: Array },
    lastLogin: { type: Date },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.fcmTokens;
        delete ret.__v;
      },
    },
    timestamps: true,
  },
);

schema.pre("save", async function (next) {
  if (this.email) {
    this.email = this.email.toLowerCase().trim();
  }
  if (this.firstName || this.lastName) {
    this.name = `${this?.firstName ? `${this?.firstName} ` : ""}${this?.lastName || ""}`;
  }
  if (this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

schema.pre("findOneAndUpdate", async function (this: any, next) {
  if (this._update?.firstName || this._update?.lastName) {
    this._update.name = `${this?._update?.firstName ? `${this?._update?.firstName} ` : ""}${
      this?._update?.lastName || ""
    }`;
  }
  if (this._update.password) {
    this._update.password = await bcrypt.hash(this._update.password, 10);
  }
  next();
});

schema.plugin(mongoosePaginate);
// schema.plugin(idValidator);

schema.methods.isPasswordMatch = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User = model("users", schema, "users");
export = User;
