import { ICampground } from "interfaces/interface";
import { Schema, model } from "mongoose";

const campgroundSchema = new Schema<ICampground>({
  name: { type: String, required: true },
  location: {
    name: { type: String, required: true },
    lat: { type: String, required: true },
    long: { type: String, required: true },
  },
  minGuest: { type: Number, required: true, default: 1 },
  maxGuest: { type: Number, required: true, default: 1 },
  type: { type: String, required: true, enum: ["private", "public"], default: "public" },
  status: {
    type: String,
    required: true,
    enum: ["active", "inactive", "maintenance"],
    default: "active",
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  amenities: { type: [String], required: true },
});

const Campground = model<ICampground>("Campground", campgroundSchema);
export default Campground;
