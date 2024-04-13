import { NextFunction, Request, Response } from "express";
import passport from "passport";
import Role from "../../models/role";
import User from "../../models/user";

export const authentication = (req: Request | any, res: Response, next: NextFunction) => {
  try {
    return passport.authenticate("jwt", { session: false }, async (err: any, user: any, info: any) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        console.error("Error: User not found in our DB.");
        return res.status(401).json({
          code: "UNAUTHENTICATED",
          message: "UNAUTHENTICATED",
          data: {},
        });
      }
      if (!user.isActive) {
        console.error("Error: User not active.");
        return res.status(401).json({
          code: "UNAUTHENTICATED",
          message: "UNAUTHENTICATED",
          data: {},
        });
      }
      const role: any = await Role.findOne({ _id: user?.roles[0]?.roleId });
      req.userId = user.id;
      req.user = user;
      req.roleId = user?.roles[0].roleId;
      req.role = role.code;
      next();
    })(req, res, next);
  } catch (error) {
    console.error("Error - authentication", error);
    throw error;
  }
};
