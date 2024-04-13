import { Request, Response } from "express";
import {
  createUserService,
  forgotPasswordService,
  loginUserService,
  logoutUserService,
  profileService,
} from "../../services/client/userServic";
import { ROLE } from "../../config/constants/userConstant";

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
    const result = await loginUserService(req.body, ROLE.CANDIDATE);
    if (result) {
      res.status(201).json({
        message: "User login Successfully!",
        data: result,
      });
    } else {
      res.status(401).json({
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
    const result = await forgotPasswordService();
  } catch (error) {
    console.error(`Error-registerUser ${error}`);
  }
};

export const profileController = async (req: Request, res: Response) => {
  try {
    const result = await profileService(req.user);
    if (result) {
      res.status(201).json({
        message: "User data has been successfully obtained.",
        data: result,
      });
    } else {
      res.status(401).json({
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
    const result = await logoutUserService(req);
  } catch (error) {
    console.error(`Error-registerUser ${error}`);
  }
};
