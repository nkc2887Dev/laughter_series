import { Types } from "mongoose";

export interface createUser {
  firstName: string;
  lastName: string;
  mobNo: string;
  email: string;
  password: string;
  roles: {
    roleId: Types.ObjectId;
  }[];
}
export interface roles {
  roleId: Types.ObjectId;
};
export interface login {
  email: string;
  password: string;
};
