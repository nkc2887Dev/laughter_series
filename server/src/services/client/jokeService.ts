import Jokes from "../../models/jokes";
import User from "../../models/user";
import JokeTrack from "../../models/jokeTrack";
import { CommonReturnValue } from "../../controller/client/interface/common";
import { STATUS } from "../../config/constants/jokesConstant";
import { Joke } from "../../controller/client/interface/jokeInterface";

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
    const jokes: Joke[] = await Jokes.find()
      .populate([{ path: "author", select: "name" }])
      .select("-updatedAt -createdAt -__v")
      .sort({ createdAt: -1 })
      .lean();

    for (const joke of jokes) {
      const track = await JokeTrack.find({ jokeId: joke._id });
      const likes = track.filter((trc) => trc.status === STATUS.LIKE).length;
      const dislikes = track.filter((trc) => trc.status === STATUS.DISLIKE).length;
      joke.likes = likes;
      joke.dislikes = dislikes;
      joke.authorName = joke.author?.name;
      delete joke.author;
    }

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

export const likeDisLikeJokeService = async (jokeId: string, data: any): Promise<CommonReturnValue> => {
  try {
    const joke = await Jokes.findById(jokeId).lean();
    if (!joke) {
      return { flag: false, data: "Joke not found." };
    }

    const user = await User.findById(data.userId).lean();
    if (!user) {
      return { flag: false, data: "User not found." };
    }

    const body = {
      jokeId: jokeId,
      userId: data.userId,
    };

    const track = await JokeTrack.findOneAndUpdate(body, { status: data.status }, { new: true, upsert: true });

    return { flag: true, data: track };
  } catch (error) {
    console.error("Error - likeDisLikeJokeService", error);
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
