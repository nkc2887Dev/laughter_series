import { ROLE } from "../../config/constants/userConstant";
import User from "../../models/user";
import Role from "../../models/role";
import { createUser, login, roles } from "./interfaces/create-user";
import { generateTokenManually, updateLastLogin } from "../commom/user";

export const createUserService = async (data: createUser): Promise<any> => {
  try {
    const roles: any[] = [];
    const finduser = await User.findOne({ $or: [{ email: data.email }, { mobNo: data.mobNo }] });
    if (finduser) {
      return {
        flag: false,
        data: "Provided email or phone number are already exists.",
      };
    }
    const roleData: any = await Role.findOne({ code: ROLE.CANDIDATE });
    roles.push({ roleId: roleData._id });
    data.roles = roles;
    const createUser = await User.create(data);
    return {
      flag: true,
      data: createUser,
    };
  } catch (error) {
    console.error("Error - createUserService", error);
  }
};

export const loginUserService = async (data: login, role: string) => {
  try {
    const user: any = await User.findOne({ email: data.email, isActive: true });

    if (!user) {
      return {
        flag: false,
        data: "User not found!",
      };
    }
    const isPasswordMatch = await user.isPasswordMatch(data.password);
    if (!isPasswordMatch) {
      return {
        flag: false,
        data: "Password is wrong!",
      };
    }
    await updateLastLogin(user);
    await generateTokenManually({ user, email: user.email });
    return {
      flag: true,
      data: user,
    };
  } catch (error) {
    console.error("Error - loginUserService", error);
  }
};

export const forgotPasswordService = async () => {
  try {
  } catch (error) {}
};

export const profileService = async (user: any) => {
  try {
    if (!user) {
      return {
        flag: false,
        data: "User not found!",
      };
    }
    return {
      flag: true,
      data: user,
    };
  } catch (error) {
    console.error("Error - profileService", error);
  }
};

export const logoutUserService = async (req: any) => {
  try {
  } catch (error) {
    console.error("Error - logoutUserService", error);
  }
};
