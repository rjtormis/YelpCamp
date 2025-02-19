import { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  password: string;
  emailAddress: string;
  profileImage: string;
  role: "user" | "owner";
  provider: "local" | "google" | "facebook";
  campgrounds: Schema.Types.ObjectId[];
  reviews: Schema.Types.ObjectId[];
  reservations: Schema.Types.ObjectId[];
  listings: Schema.Types.ObjectId[];
}

export interface IInbox extends Document {
  user: Schema.Types.ObjectId;
  messages: Schema.Types.ObjectId[];
}

export interface IMessage extends Document {
  user: Schema.Types.ObjectId;
  message: string;
  type: "read" | "unread";
  to: Schema.Types.ObjectId;
}

export interface ICampground extends Document {
  name: string;
  location: { name: string; lat: string; long: string };
  minGuest: number;
  maxGuest: number;
  type: "private" | "public";
  status: "active" | "inactive" | "maintenance";
  description: string;
  images: string[];
  amenities: string[];
  user: Schema.Types.ObjectId;
  reviews: Schema.Types.ObjectId[];
}

// TODO: Create Booking Interface and UI
export interface IBooking extends Document {
  user: Schema.Types.ObjectId;
}

export interface IReservation extends Document {
  campground: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  checkInDate: Date;
  checkOutDate: Date;
  guests: Number;
  status: "confirmed" | "pending" | "cancelled";
  total: Number | null;
}

export interface IReview extends Document {
  user: Schema.Types.ObjectId;
  campground: Schema.Types.ObjectId;
  rating: number;
  comment: string;
}
