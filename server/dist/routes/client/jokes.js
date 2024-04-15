"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const passport_1 = require("../../helpers/policies/passport");
const jokeController_1 = require("../../controller/client/jokeController");
const validate_1 = require("../../helpers/policies/validate");
const jokeValidate_1 = require("../../helpers/validations/jokeValidate");
const routes = express_1.default.Router();
routes.post("/add", passport_1.authentication, (0, validate_1.validate)(jokeValidate_1.addJoke), jokeController_1.addJokeController);
routes.get("/", passport_1.authentication, jokeController_1.getJokeController);
routes.get("/list", passport_1.authentication, jokeController_1.listJokesController);
routes.put("/update", passport_1.authentication, jokeController_1.updateJokeController);
routes.delete("/delete", passport_1.authentication, jokeController_1.deleteJokeController);
module.exports = routes;
