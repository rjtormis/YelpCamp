import { IReview } from "interfaces/interface";
import { Schema, model } from "mongoose";

const reviewSchema = new Schema<IReview>({
  campground: {
    type: Schema.Types.ObjectId,
    ref: "Campground",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Review = model<IReview>("Review", reviewSchema);
export default Review;
