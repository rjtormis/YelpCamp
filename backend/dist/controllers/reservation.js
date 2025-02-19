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
exports.updateCampgroundReservation = exports.createCampgroundReservations = exports.getAllReservations = void 0;
const campground_1 = __importDefault(require("../models/campground"));
const reservation_1 = __importDefault(require("../models/reservation"));
/**
 * Get Reservations
 */
const getAllReservations = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = "";
    const reservations = yield reservation_1.default.find({ user: userId }).populate("campground");
    return res.status(200).json({ reservations });
});
exports.getAllReservations = getAllReservations;
/**
 * Create Reservation
 */
const createCampgroundReservations = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { campgroundId } = req.params;
    const { checkInDate, checkOutDate, guests } = req.body;
    const queryCampground = yield campground_1.default.findById(campgroundId);
    if (!queryCampground) {
        return res.status(404).json({ message: "Campground not found" });
    }
    const reservation = yield reservation_1.default.create({
        campground: campgroundId,
        user: "",
        checkInDate,
        checkOutDate,
        guests,
    });
    return res
        .status(200)
        .json({ reservation: reservation, message: "Reservation created successfully" });
});
exports.createCampgroundReservations = createCampgroundReservations;
/**
 * Update Campground Reservation
 */
const updateCampgroundReservation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { reservationId } = req.params;
    const queryReservation = yield reservation_1.default.findById(reservationId);
    if (!queryReservation) {
        return res.status(404).json({ message: "Reservation not found" });
    }
    const updateReservation = yield reservation_1.default.findByIdAndUpdate(reservationId, req.body);
    return res
        .status(200)
        .json({ message: "Reservation updated successfully", reservation: updateReservation });
});
exports.updateCampgroundReservation = updateCampgroundReservation;
