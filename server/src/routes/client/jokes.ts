import express from "express";
import { authentication } from "../../helpers/policies/passport";
import {
  addJokeController,
  deleteJokeController,
  getJokeController,
  listJokesController,
  updateJokeController,
} from "../../controller/client/jokeController";
import { validate } from "../../helpers/policies/validate";
import { addJoke } from "../../helpers/validations/jokeValidate";

const routes = express.Router();

routes.post("/add", authentication, validate(addJoke), addJokeController);
routes.get("/", authentication, getJokeController);
routes.get("/list", authentication, listJokesController);
routes.put("/update", authentication, updateJokeController);
routes.delete("/delete", authentication, deleteJokeController);

export = routes;
