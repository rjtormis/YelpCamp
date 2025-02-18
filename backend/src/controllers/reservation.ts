import Campground from "@models/campground";
import Reservation from "@models/reservation";
import { Request, Response, NextFunction } from "express";

/**
 * Get Reservations
 */

export const getAllReservations = async (req: Request, res: Response, next: NextFunction) => {
  const userId = "";
  const reservations = await Reservation.find({ user: userId }).populate("campground");

  return res.status(200).json({ reservations });
};

/**
 * Create Reservation
 */

export const createCampgroundReservations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { campgroundId } = req.params;
  const { checkInDate, checkOutDate, guests } = req.body;

  const queryCampground = await Campground.findById(campgroundId);

  if (!queryCampground) {
    return res.status(404).json({ message: "Campground not found" });
  }

  const reservation = await Reservation.create({
    campground: campgroundId,
    user: "",
    checkInDate,
    checkOutDate,
    guests,
  });

  return res
    .status(200)
    .json({ reservation: reservation, message: "Reservation created successfully" });
};

/**
 * Update Campground Reservation
 */
export const updateCampgroundReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { reservationId } = req.params;

  const queryReservation = await Reservation.findById(reservationId);
  if (!queryReservation) {
    return res.status(404).json({ message: "Reservation not found" });
  }

  const updateReservation = await Reservation.findByIdAndUpdate(reservationId, req.body);

  return res
    .status(200)
    .json({ message: "Reservation updated successfully", reservation: updateReservation });
};
