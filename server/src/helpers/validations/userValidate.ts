import joi from "joi";

export const createUser: object = joi
  .object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    mobNo: joi
      .string()
      .regex(/^[0-9]*$/)
      .replace(/^0/g, "")
      .length(10)
      .required()
      .error(new Error("Mobile number should be 10 digits long.")),
    email: joi.string().required(),
    password: joi.string().required(),
  })
  .unknown(false);

export const loginUser: object = joi
  .object({
    email: joi.string().required(),
    password: joi.string().required(),
  })
  .unknown(false);
