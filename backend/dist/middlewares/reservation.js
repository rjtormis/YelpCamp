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
exports.reservationUpdateValidator = exports.reservationIdValidator = void 0;
const reservation_1 = __importDefault(require("../models/reservation"));
const user_1 = __importDefault(require("../models/user"));
const express_validator_1 = require("express-validator");
const mongoose_1 = __importDefault(require("mongoose"));
exports.reservationIdValidator = (0, express_validator_1.param)("id")
    .notEmpty()
    .withMessage("Reservation ID should not be empty.")
    .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
    const queryReservation = yield reservation_1.default.findById(val);
    if (!queryReservation) {
        throw new Error("Reservation does not exists.");
    }
    if (!mongoose_1.default.isValidObjectId(val)) {
        throw new Error("Please provide a valid Reservation ID.");
    }
    return true;
}));
exports.reservationUpdateValidator = [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .withMessage("Reservation ID should not be empty.")
        .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
        const queryReservation = yield reservation_1.default.findById(val);
        if (!queryReservation) {
            throw new Error("Reservation does not exists.");
        }
        if (!mongoose_1.default.isValidObjectId(val)) {
            throw new Error("Please provide a valid Reservation ID.");
        }
        return true;
    })),
    (0, express_validator_1.body)("user")
        .notEmpty()
        .withMessage("User should not be empty.")
        .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
        const queryUser = yield user_1.default.findById(val);
        if (!queryUser) {
            throw new Error("User does not exists.");
        }
        return true;
    })),
    (0, express_validator_1.body)("checkInDate")
        .notEmpty()
        .withMessage("Check In Date should not be empty.")
        .isDate()
        .withMessage("Check In Date should be a valid date."),
    (0, express_validator_1.body)("checkOutDate")
        .notEmpty()
        .withMessage("Check Out Date should not be empty.")
        .isDate()
        .withMessage("Check Out Date should be a valid date."),
    (0, express_validator_1.body)("guests")
        .notEmpty()
        .withMessage("Guests should not be empty")
        .isNumeric()
        .withMessage("Guests should be a number"),
    (0, express_validator_1.body)("status")
        .notEmpty()
        .withMessage("Status should not be empty")
        .isIn(["confirmed", "pending", "cancelled"]),
    (0, express_validator_1.body)("total").optional().isNumeric().withMessage("Total should be a number"),
];
