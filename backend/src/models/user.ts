import { IUser } from "interfaces/interface";
import { Schema, model } from "mongoose";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  profileImage: { type: String, required: false },
  role: {
    type: String,
    required: true,
    enum: ["user", "owner"],
  },
  campgrounds: [{ type: Schema.Types.ObjectId, ref: "Campground" }],
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  reservations: [{ type: Schema.Types.ObjectId, ref: "Reservation" }],
});

const User = model<IUser>("User", userSchema);
export default User;
