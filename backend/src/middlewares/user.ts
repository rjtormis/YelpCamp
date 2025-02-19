import User from "@models/user";
import { param, body } from "express-validator";
import mongoose from "mongoose";

export const userIdValidator = param("id")
  .notEmpty()
  .withMessage("User ID should not be empty.")
  .isString()
  .withMessage("User ID should be a string.")
  .custom(async (val: string) => {
    if (!mongoose.isValidObjectId(val)) {
      throw new Error("Please provide a valid User ID.");
    }
    const user = await User.findById(val);
    if (!user) {
      throw new Error("User does not exists.");
    }
    return true;
  });

export const userRegistrationValidator = [
  body("name").notEmpty().withMessage("Name should not be empty."),
  body("password").custom((val: string, { req }) => {
    console.log(req.body.provider);
    if (req.body.provider === "FACEBOOK" || req.body.provider === "GOOGLE") return true;

    if (!val) throw new Error("Password field should not be empty.");
    if (val.length < 8) throw new Error("Password field should not be less than 8 characters.");
    if (val.length > 16) throw new Error("Password field should not be more than 16 characters.");
    return true;
  }),
  body("provider").notEmpty().withMessage("Provider should not be empty."),
  body("emailAddress")
    .notEmpty()
    .withMessage("Email address field should not be empty")
    .isEmail()
    .withMessage("Please provide a valid email address."),
];
