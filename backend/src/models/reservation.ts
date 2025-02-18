import { IReservation } from "interfaces/interface";
import { Schema, model } from "mongoose";

const reservationModel = new Schema<IReservation>(
  {
    campground: { type: Schema.Types.ObjectId, required: true, ref: "Campground" },
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    guests: { type: Number, required: true },
    status: {
      type: String,
      required: true,
      enum: ["confirmed", "pending", "cancelled"],
      default: "pending",
    },
    total: { type: Number, required: false },
  },
  { timestamps: true }
);

const Reservation = model<IReservation>("Reservation", reservationModel);
export default Reservation;
