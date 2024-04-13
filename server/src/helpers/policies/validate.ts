import { NextFunction, Request, Response } from "express";

export const validate = (validator: any) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      req.body = await validator.validateAsync(req.body);
      next();
    } catch (err: any) {
      console.error("Error - ValidationError", err);
      if (err.isJoi)
        return res.status(422).json({
          code: "ERROR",
          message: err.message,
          data: {},
        });
      next(
        res.status(422).json({
          code: "ERROR",
          message: err.message,
        }),
      );
    }
  };
};
