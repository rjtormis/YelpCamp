"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reservationModel = new mongoose_1.Schema({
    campground: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "Campground" },
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "User" },
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
}, { timestamps: true });
const Reservation = (0, mongoose_1.model)("Reservation", reservationModel);
exports.default = Reservation;
