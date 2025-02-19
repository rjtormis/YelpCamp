"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.createReview = exports.getSpecificCampgroundReviews = void 0;
const campground_1 = __importDefault(require("../models/campground"));
const review_1 = __importDefault(require("../models/review"));
/**
 * Get Specific Review
 */
const getSpecificCampgroundReviews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { campgroundId } = req.params;
    const queryCampground = yield campground_1.default.findById(campgroundId);
    if (!queryCampground) {
        return res.status(404).json({ message: "Campground not found" });
    }
    const reviews = yield review_1.default.find({ campground: campgroundId });
    return res.status(200).json({ reviews });
});
exports.getSpecificCampgroundReviews = getSpecificCampgroundReviews;
/**
 * Create Review
 */
const createReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { campgroundId } = req.params;
    const queryCampground = yield campground_1.default.findById(campgroundId);
    if (!queryCampground) {
        return res.status(404).json({ message: "Campground not found" });
    }
    const { user, comment, rating } = req.body;
    const review = yield review_1.default.create({ campground: campgroundId, user, comment, rating });
    return res.status(200).json({ review });
});
exports.createReview = createReview;
/**
 * Delete Review
 */
const deleteReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { reviewId } = req.params;
    const queryReview = yield review_1.default.findByIdAndDelete(reviewId);
    if (!queryReview) {
        return res.status(404).json({ message: "Review not found" });
    }
    return res.status(200).json({ message: "Review deleted successfully" });
});
exports.deleteReview = deleteReview;
