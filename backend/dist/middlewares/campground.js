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
exports.campgroundCreationValidator = exports.campgroundUpdateValidator = exports.campgroundId = void 0;
const campground_1 = __importDefault(require("../models/campground"));
const user_1 = __importDefault(require("../models/user"));
const express_validator_1 = require("express-validator");
const mongoose_1 = __importDefault(require("mongoose"));
exports.campgroundId = (0, express_validator_1.param)("id")
    .notEmpty()
    .withMessage("User ID should not be empty.")
    .isString()
    .withMessage("User ID should be a string.")
    .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.default.isValidObjectId(val)) {
        throw new Error("Please provide a valid User ID.");
    }
    const campground = yield campground_1.default.findById(val);
    if (!campground) {
        throw new Error("User does not exists.");
    }
    return true;
}));
exports.campgroundUpdateValidator = [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .withMessage("Campground ID should not be empty.")
        .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
        if (!mongoose_1.default.isValidObjectId(val)) {
            throw new Error("Please provide a valid Campground ID.");
        }
        return true;
    })),
    (0, express_validator_1.body)("name").notEmpty().withMessage("Name should not be empty."),
    (0, express_validator_1.body)("location").notEmpty().withMessage("Location should not be empty."),
    (0, express_validator_1.body)("minGuest").notEmpty().withMessage("Minimum Guest should not be empty."),
    (0, express_validator_1.body)("maxGuest").notEmpty().withMessage("Maximum Guest should not be empty."),
    (0, express_validator_1.body)("type").notEmpty().withMessage("Type should not be empty."),
    (0, express_validator_1.body)("status").notEmpty().withMessage("Status should not be empty."),
    (0, express_validator_1.body)("description").notEmpty().withMessage("Description should not be empty."),
    (0, express_validator_1.body)("images").notEmpty().withMessage("Images should not be empty."),
    (0, express_validator_1.body)("amenities").notEmpty().withMessage("Amenities should not be empty."),
    (0, express_validator_1.body)("user")
        .notEmpty()
        .withMessage("User should not be empty.")
        .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
        const queryUser = yield user_1.default.findById(val);
        if (!queryUser) {
            throw new Error("User does not exists.");
        }
    })),
    (0, express_validator_1.body)("reviews").notEmpty().withMessage("Reviews should not be empty."),
];
exports.campgroundCreationValidator = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Name should not be empty."),
    (0, express_validator_1.body)("location").notEmpty().withMessage("Location should not be empty."),
    (0, express_validator_1.body)("minGuest").notEmpty().withMessage("Minimum Guest should not be empty."),
    (0, express_validator_1.body)("maxGuest").notEmpty().withMessage("Maximum Guest should not be empty."),
    (0, express_validator_1.body)("type").notEmpty().withMessage("Type should not be empty."),
    (0, express_validator_1.body)("status").notEmpty().withMessage("Status should not be empty."),
    (0, express_validator_1.body)("description").notEmpty().withMessage("Description should not be empty."),
    (0, express_validator_1.body)("images").notEmpty().withMessage("Images should not be empty."),
    (0, express_validator_1.body)("amenities").notEmpty().withMessage("Amenities should not be empty."),
    (0, express_validator_1.body)("user")
        .notEmpty()
        .withMessage("User should not be empty.")
        .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
        const queryUser = yield user_1.default.findById(val);
        if (!queryUser) {
            throw new Error("User does not exists.");
        }
    })),
    (0, express_validator_1.body)("reviews").notEmpty().withMessage("Reviews should not be empty."),
];
