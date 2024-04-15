import { Response } from "express";
import {
  addJokeService,
  deleteJokeService,
  getJokeService,
  listJokesService,
  updateJokeService,
} from "../../services/client/jokeService";
import { CommonReturnValue } from "./interface/common";

export const addJokeController = async (req: any, res: Response) => {
  try {
    const result: CommonReturnValue = await addJokeService(req);
    if (result.flag) {
      res.status(201).json({
        message: "Jokes create Successfully!",
        data: result.data,
      });
    } else {
      res.status(401).json({
        message: result.data,
        data: null,
      });
    }
  } catch (error) {
    console.error(`Error-addJokeController ${error}`);
  }
};

export const listJokesController = async (req: any, res: Response) => {
  try {
    const result: CommonReturnValue = await listJokesService(req);
    if (result.flag) {
      res.status(201).json({
        message: "Jokes list fetch Successfully!",
        data: result.data,
      });
    } else {
      res.status(401).json({
        message: result.data,
        data: null,
      });
    }
  } catch (error) {
    console.error(`Error-listJokesController ${error}`);
  }
};

export const getJokeController = async (req: any, res: Response) => {
  try {
    const result: CommonReturnValue = await getJokeService(req);
  } catch (error) {
    console.error(`Error-getJokeController ${error}`);
  }
};

export const updateJokeController = async (req: any, res: Response) => {
  try {
    const result: CommonReturnValue = await updateJokeService(req);
  } catch (error) {
    console.error(`Error-updateJokeController ${error}`);
  }
};

export const deleteJokeController = async (req: any, res: Response) => {
  try {
    const result: CommonReturnValue = await deleteJokeService(req);
  } catch (error) {
    console.error(`Error-deleteJokeController ${error}`);
  }
};
