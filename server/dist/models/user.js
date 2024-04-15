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
const mongoose_1 = require("mongoose");
const db_1 = require("../config/db");
const userConstant_1 = require("../config/constants/userConstant");
const cutomPaginate_1 = require("../config/constants/cutomPaginate");
const bcrypt = require("bcrypt");
const mongoosePaginate = require("mongoose-paginate-v2");
// var idValidator = require("mongoose-id-validator");
mongoosePaginate.paginate.options = {
    customLabels: cutomPaginate_1.myCustomLabels,
};
const schema = new db_1.Schema({
    name: { type: String }, // Name of User
    firstName: { type: String }, // First name of the user.
    lastName: { type: String }, // Last name of the user.
    countryCode: { type: String, default: userConstant_1.COUNTRYCONST.INDIA },
    mobNo: { type: String }, // Mobile No of User
    email: { type: String, index: true }, // Name of User
    isActive: { type: Boolean, default: true, index: true }, //isActive
    roles: [
        { roleId: { type: db_1.Schema.Types.ObjectId, ref: "role", index: true } }, // role ref  schema = role
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
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.password;
            delete ret.fcmTokens;
            delete ret.__v;
        },
    },
    timestamps: true,
});
schema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.email) {
            this.email = this.email.toLowerCase().trim();
        }
        if (this.firstName || this.lastName) {
            this.name = `${(this === null || this === void 0 ? void 0 : this.firstName) ? `${this === null || this === void 0 ? void 0 : this.firstName} ` : ""}${(this === null || this === void 0 ? void 0 : this.lastName) || ""}`;
        }
        if (this.password) {
            this.password = yield bcrypt.hash(this.password, 10);
        }
        next();
    });
});
schema.pre("findOneAndUpdate", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        if (((_a = this._update) === null || _a === void 0 ? void 0 : _a.firstName) || ((_b = this._update) === null || _b === void 0 ? void 0 : _b.lastName)) {
            this._update.name = `${((_c = this === null || this === void 0 ? void 0 : this._update) === null || _c === void 0 ? void 0 : _c.firstName) ? `${(_d = this === null || this === void 0 ? void 0 : this._update) === null || _d === void 0 ? void 0 : _d.firstName} ` : ""}${((_e = this === null || this === void 0 ? void 0 : this._update) === null || _e === void 0 ? void 0 : _e.lastName) || ""}`;
        }
        if (this._update.password) {
            this._update.password = yield bcrypt.hash(this._update.password, 10);
        }
        next();
    });
});
schema.plugin(mongoosePaginate);
// schema.plugin(idValidator);
schema.methods.isPasswordMatch = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        return bcrypt.compare(password, this.password);
    });
};
const User = (0, mongoose_1.model)("users", schema, "users");
module.exports = User;
