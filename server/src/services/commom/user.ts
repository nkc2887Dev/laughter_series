import { JWT } from "../../config/constants/userConstant";
import User from "../../models/user";
import { convertToTz } from "./time-zone";
import jwt from "jsonwebtoken";

export const updateLastLogin = async (user: typeof User | any) => {
  return await User.findOneAndUpdate(
    { _id: user._id },
    { $set: { lastLogin: await convertToTz({ date: new Date() }) } },
    { new: true },
  );
};

export const generateTokenManually = async (params: any) => {
  try {
    const user = params.user;
    const email = params.email;
    const authToken = await generateToken({ id: user._id }, email, JWT.SECRET, JWT.EXPIRES_IN);
    const date = new Date();
    date.setDate(date.getDate() + 30);
    const pushData = {
      token: authToken,
      validateTill: date,
    };
    await User.findOneAndUpdate({ _id: user._id }, { $addToSet: { tokens: pushData } });
    return authToken;
  } catch (error: any) {
    console.error("Error - generateTokenManually", error);
    throw new Error(error.message);
  }
};

const generateToken = async (user: any, email: string, secret: string, expires: string = "1s") => {
  let token = jwt.sign(
    {
      id: user.id,
      email: email,
    },
    secret,
    {
      expiresIn: expires,
    },
  );
  return token;
};
