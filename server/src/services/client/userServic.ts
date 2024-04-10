import user from "../../models/user";
import { createUser } from "./interfaces/create-user";

export const createUserService = async (data: createUser): Promise<any> => {
  try {
    const finduser = await user.findOne({ email: data.email });
    if (finduser) {
      return finduser;
    }
    const createUser = await user.create(data);
    return createUser;
  } catch (error) {}
};

export const loginUserService = () => {
  try {
  } catch (error) {}
};

export const forgotPasswordService = () => {
  try {
  } catch (error) {}
};

export const profileService = () => {
  try {
  } catch (error) {}
};
