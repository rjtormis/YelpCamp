import Campground from "@models/campground";
import Reviews from "@models/review";
import { Request, Response, NextFunction } from "express";

/**
 * Get Specific Review
 */

export const getSpecificCampgroundReviews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { campgroundId } = req.params;

  const queryCampground = await Campground.findById(campgroundId);

  if (!queryCampground) {
    return res.status(404).json({ message: "Campground not found" });
  }

  const reviews = await Reviews.find({ campground: campgroundId });

  return res.status(200).json({ reviews });
};

/**
 * Create Review
 */

export const createReview = async (req: Request, res: Response, next: NextFunction) => {
  const { campgroundId } = req.params;

  const queryCampground = await Campground.findById(campgroundId);

  if (!queryCampground) {
    return res.status(404).json({ message: "Campground not found" });
  }

  const { user, comment, rating } = req.body;

  const review = await Reviews.create({ campground: campgroundId, user, comment, rating });

  return res.status(200).json({ review });
};

/**
 * Delete Review
 */
export const deleteReview = async (req: Request, res: Response, next: NextFunction) => {
  const { reviewId } = req.params;

  const queryReview = await Reviews.findByIdAndDelete(reviewId);

  if (!queryReview) {
    return res.status(404).json({ message: "Review not found" });
  }

  return res.status(200).json({ message: "Review deleted successfully" });
};
