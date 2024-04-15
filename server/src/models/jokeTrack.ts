import { Schema } from "mongoose";
import { model } from "../config/db";

const schema = new Schema(
  {
    jokeId: { type: Schema.Types.ObjectId, ref: "jokes", index: true },
    userId: { type: Schema.Types.ObjectId, ref: "users", index: true },
    status: { type: String }, //status 1 for like, 2 for dislike
  },
  { timestamps: true },
);

const JokeTrack = model("joketrack", schema, "joketrack");
export = JokeTrack;
