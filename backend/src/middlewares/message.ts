import Message from "@models/message";
import User from "@models/user";
import { body, param } from "express-validator";
import mongoose from "mongoose";

export const messageIDValidator = param("id")
  .notEmpty()
  .withMessage("Message ID should not be empty.")
  .custom(async (val: string) => {
    const queryMessage = await Message.findById(val);
    if (!queryMessage) {
      throw new Error("Message does not exists.");
    }
    if (!mongoose.isValidObjectId(val)) {
      throw new Error("Please provide a valid Message ID.");
    }
    return true;
  });

export const messageUpdateValidator = [
  param("id")
    .notEmpty()
    .withMessage("Message ID should not be empty.")
    .custom((val: string) => {
      if (!mongoose.isValidObjectId(val)) {
        throw new Error("Please provide a valid Message ID.");
      }
      return true;
    }),

  body("user")
    .notEmpty()
    .withMessage("User should not be empty.")
    .custom(async (val: string) => {
      const queryUser = await User.findById(val);

      if (!queryUser) {
        throw new Error("User does not exists.");
      }
      return true;
    }),
  body("to")
    .notEmpty()
    .withMessage("User should not be empty.")
    .custom(async (val: string) => {
      const queryUser = await User.findById(val);

      if (!queryUser) {
        throw new Error("User does not exists.");
      }
      return true;
    }),
];
