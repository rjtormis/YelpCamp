import Reservation from "@models/reservation";
import User from "@models/user";
import { body, param } from "express-validator";
import mongoose from "mongoose";

export const reservationIdValidator = param("id")
  .notEmpty()
  .withMessage("Reservation ID should not be empty.")
  .custom(async (val: string) => {
    const queryReservation = await Reservation.findById(val);
    if (!queryReservation) {
      throw new Error("Reservation does not exists.");
    }
    if (!mongoose.isValidObjectId(val)) {
      throw new Error("Please provide a valid Reservation ID.");
    }
    return true;
  });

export const reservationUpdateValidator = [
  param("id")
    .notEmpty()
    .withMessage("Reservation ID should not be empty.")
    .custom(async (val: string) => {
      const queryReservation = await Reservation.findById(val);
      if (!queryReservation) {
        throw new Error("Reservation does not exists.");
      }
      if (!mongoose.isValidObjectId(val)) {
        throw new Error("Please provide a valid Reservation ID.");
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

  body("checkInDate")
    .notEmpty()
    .withMessage("Check In Date should not be empty.")
    .isDate()
    .withMessage("Check In Date should be a valid date."),
  body("checkOutDate")
    .notEmpty()
    .withMessage("Check Out Date should not be empty.")
    .isDate()
    .withMessage("Check Out Date should be a valid date."),
  body("guests")
    .notEmpty()
    .withMessage("Guests should not be empty")
    .isNumeric()
    .withMessage("Guests should be a number"),
  body("status")
    .notEmpty()
    .withMessage("Status should not be empty")
    .isIn(["confirmed", "pending", "cancelled"]),
  body("total").optional().isNumeric().withMessage("Total should be a number"),
];
