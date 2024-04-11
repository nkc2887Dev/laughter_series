import { Request, Response } from "express";
import {
  createUserService,
  forgotPasswordService,
  loginUserService,
  profileService,
} from "../../services/client/userServic";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const result = await createUserService(req.body);
    if (result) {
      res.status(201).json({
        message: "User create Successfully!",
        data: result,
      });
    } else {
      res.status(401).json({
        message: "User create failed!",
        data: null,
      });
    }
  } catch (error) {
    console.error(`Error-registerUser ${error}`);
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const result = await loginUserService();
    console.log("result: ", result);
  } catch (error) {
    console.error(`Error-registerUser ${error}`);
  }
};

export const forgotPasswordController = async (req: Request, res: Response) => {
  try {
    const result = await forgotPasswordService();
  } catch (error) {
    console.error(`Error-registerUser ${error}`);
  }
};

export const profileController = async (req: Request, res: Response) => {
  try {
    const result = await profileService();
  } catch (error) {
    console.error(`Error-registerUser ${error}`);
  }
};
