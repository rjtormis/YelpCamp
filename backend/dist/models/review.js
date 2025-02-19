"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    campground: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Campground",
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
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
const Reviews = (0, mongoose_1.model)("Review", reviewSchema);
exports.default = Reviews;
