import { ROLE } from "../../config/constants/userConstant";
import User from "../../models/user";
import Role from "../../models/role";
import { createUser, roles } from "./interfaces/create-user";

export const createUserService = async (data: createUser): Promise<any> => {
  try {
    const roles: any[] = [];
    const finduser = await User.findOne({ email: data.email });
    if (finduser) {
      return finduser;
    }
    const roleData: any = await Role.findOne({ code: ROLE.CANDIDATE });
    roles.push({ roleId: roleData._id });
    data.roles = roles;
    data.mobNo = data?.mobNo?.replace(/^0/g, "");
    const createUser = await User.create(data);
    return createUser;
  } catch (error) {
    console.error("Error - createUserService", error);
  }
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
