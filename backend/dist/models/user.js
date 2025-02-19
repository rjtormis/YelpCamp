"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
    campgrounds: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Campground" }],
    reviews: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Review" }],
    reservations: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Reservation" }],
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
