import { AnyAaaaRecord } from "dns";
import { CommonReturnValue } from "../../controller/client/interface/common";
import Jokes from "../../models/jokes";
import User from "../../models/user";

export const addJokeService = async (req: any): Promise<CommonReturnValue> => {
  try {
    const joke = await Jokes.create(req.body);
    return { flag: true, data: joke };
  } catch (error) {
    console.error("Error - addJokeService", error);
    return { flag: false, data: null };
  }
};

export const listJokesService = async (req: any): Promise<CommonReturnValue> => {
  try {
    let jokes = await Jokes.find().then(async (res) => {
      await Promise.all(
        res.map(async (joke) => {
          const user: any = await User.findOne({ _id: joke.author });
          joke.authorName = user.name;
          return joke;
        }),
      );
      return res;
    });
    return { flag: true, data: jokes };
  } catch (error) {
    console.error("Error - listJokesService", error);
    return { flag: false, data: null };
  }
};

export const getJokeService = async (req: any): Promise<CommonReturnValue> => {
  try {
    return { flag: true, data: {} };
  } catch (error) {
    console.error("Error - getJokeService", error);
    return { flag: false, data: null };
  }
};

export const updateJokeService = async (req: any): Promise<CommonReturnValue> => {
  try {
    return { flag: true, data: {} };
  } catch (error) {
    console.error("Error - updateJokeService", error);
    return { flag: false, data: null };
  }
};

export const deleteJokeService = async (req: any): Promise<CommonReturnValue> => {
  try {
    return { flag: true, data: {} };
  } catch (error) {
    console.error("Error - deleteJokeService", error);
    return { flag: false, data: null };
  }
};
