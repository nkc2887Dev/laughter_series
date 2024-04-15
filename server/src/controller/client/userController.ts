import { Request, Response } from "express";
import {
  createUserService,
  forgotPasswordService,
  loginUserService,
  logoutUserService,
  profileService,
} from "../../services/client/userServic";
import { ROLE } from "../../config/constants/userConstant";
import { CommonReturnValue } from "./interface/common";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const result: CommonReturnValue = await createUserService(req.body);
    if (result.flag) {
      res.status(201).json({
        message: "User create Successfully!",
        data: result.data,
      });
    } else {
      res.status(200).json({
        message: result.data,
        data: null,
      });
    }
  } catch (error) {
    console.error(`Error-registerUser ${error}`);
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const result: CommonReturnValue = await loginUserService(req.body, ROLE.CANDIDATE);
    if (result.flag) {
      res.status(200).json({
        message: "User login Successfully!",
        data: result.data,
      });
    } else {
      res.status(404).json({
        message: result.data,
        data: null,
      });
    }
  } catch (error) {
    console.error(`Error-registerUser ${error}`);
  }
};

export const forgotPasswordController = async (req: Request, res: Response) => {
  try {
    const result: CommonReturnValue = await forgotPasswordService();
  } catch (error) {
    console.error(`Error-registerUser ${error}`);
  }
};

export const profileController = async (req: Request, res: Response) => {
  try {
    const result: CommonReturnValue = await profileService(req.user);
    if (result.flag) {
      res.status(200).json({
        message: "User data has been successfully obtained.",
        data: result.data,
      });
    } else {
      res.status(200).json({
        message: result.data,
        data: null,
      });
    }
  } catch (error) {
    console.error(`Error-registerUser ${error}`);
  }
};

export const logoutUserController = async (req: any, res: Response) => {
  try {
    const result: CommonReturnValue = await logoutUserService(req);
  } catch (error) {
    console.error(`Error-registerUser ${error}`);
  }
};
