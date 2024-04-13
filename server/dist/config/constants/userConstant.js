"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = exports.ROLE = exports.COUNTRYCONST = void 0;
exports.COUNTRYCONST = {
    INDIA: "+91",
};
exports.ROLE = {
    SUPER_ADMIN: "SUPER_ADMIN",
    ADMIN: "ADMIN",
    SUB_ADMIN: "SUB_ADMIN",
    CANDIDATE: "CANDIDATE",
    EMPLOYER: "EMPLOYER",
};
exports.JWT = {
    ADMIN_SECRET: "myjwtadminsecret",
    USER_SECRET: "myjwtadminsecret",
    EXPIRES_IN: "24h",
    REFRESH_EXPIRES_IN: "30d",
    SECRET: "myjwtsecret",
    CHANGE_PASSWORD_SUCCESS: 1,
    PASSWORD_USE_ERROR: 2,
    PASSWORD_NOT_MATCH: 0,
};
