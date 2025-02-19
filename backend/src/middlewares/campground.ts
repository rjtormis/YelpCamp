import Campground from "@models/campground";
import User from "@models/user";
import { body, param } from "express-validator";
import mongoose from "mongoose";

export const campgroundId = param("id")
  .notEmpty()
  .withMessage("User ID should not be empty.")
  .isString()
  .withMessage("User ID should be a string.")
  .custom(async (val: string) => {
    if (!mongoose.isValidObjectId(val)) {
      throw new Error("Please provide a valid User ID.");
    }
    const campground = await Campground.findById(val);
    if (!campground) {
      throw new Error("User does not exists.");
    }
    return true;
  });

export const campgroundUpdateValidator = [
  param("id")
    .notEmpty()
    .withMessage("Campground ID should not be empty.")
    .custom(async (val: string) => {
      if (!mongoose.isValidObjectId(val)) {
        throw new Error("Please provide a valid Campground ID.");
      }
      return true;
    }),
  body("name").notEmpty().withMessage("Name should not be empty."),
  body("location").notEmpty().withMessage("Location should not be empty."),
  body("minGuest").notEmpty().withMessage("Minimum Guest should not be empty."),
  body("maxGuest").notEmpty().withMessage("Maximum Guest should not be empty."),
  body("type").notEmpty().withMessage("Type should not be empty."),
  body("status").notEmpty().withMessage("Status should not be empty."),
  body("description").notEmpty().withMessage("Description should not be empty."),
  body("images").notEmpty().withMessage("Images should not be empty."),
  body("amenities").notEmpty().withMessage("Amenities should not be empty."),
  body("user")
    .notEmpty()
    .withMessage("User should not be empty.")
    .custom(async (val: string) => {
      const queryUser = await User.findById(val);

      if (!queryUser) {
        throw new Error("User does not exists.");
      }
    }),
  body("reviews").notEmpty().withMessage("Reviews should not be empty."),
];

export const campgroundCreationValidator = [
  body("name").notEmpty().withMessage("Name should not be empty."),
  body("location").notEmpty().withMessage("Location should not be empty."),
  body("minGuest").notEmpty().withMessage("Minimum Guest should not be empty."),
  body("maxGuest").notEmpty().withMessage("Maximum Guest should not be empty."),
  body("type").notEmpty().withMessage("Type should not be empty."),
  body("status").notEmpty().withMessage("Status should not be empty."),
  body("description").notEmpty().withMessage("Description should not be empty."),
  body("images").notEmpty().withMessage("Images should not be empty."),
  body("amenities").notEmpty().withMessage("Amenities should not be empty."),
  body("user")
    .notEmpty()
    .withMessage("User should not be empty.")
    .custom(async (val: string) => {
      const queryUser = await User.findById(val);

      if (!queryUser) {
        throw new Error("User does not exists.");
      }
    }),
  body("reviews").notEmpty().withMessage("Reviews should not be empty."),
];
