"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const campgroundSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    reviews: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Review" }],
    amenities: { type: [String], required: true },
});
const Campground = (0, mongoose_1.model)("Campground", campgroundSchema);
exports.default = Campground;
