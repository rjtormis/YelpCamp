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
exports.userRegistrationValidator = exports.userUpdateValidator = exports.userIdValidator = void 0;
const user_1 = __importDefault(require("../models/user"));
const express_validator_1 = require("express-validator");
const mongoose_1 = __importDefault(require("mongoose"));
exports.userIdValidator = (0, express_validator_1.param)("id")
    .notEmpty()
    .withMessage("User ID should not be empty.")
    .isString()
    .withMessage("User ID should be a string.")
    .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.default.isValidObjectId(val)) {
        throw new Error("Please provide a valid User ID.");
    }
    const user = yield user_1.default.findById(val);
    if (!user) {
        throw new Error("User does not exists.");
    }
    return true;
}));
exports.userUpdateValidator = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Name should not be empty."),
    (0, express_validator_1.body)("password").custom((val, { req }) => {
        console.log(req.body.provider);
        if (req.body.provider === "FACEBOOK" || req.body.provider === "GOOGLE")
            return true;
        if (!val)
            throw new Error("Password field should not be empty.");
        if (val.length < 8)
            throw new Error("Password field should not be less than 8 characters.");
        if (val.length > 16)
            throw new Error("Password field should not be more than 16 characters.");
        return true;
    }),
    (0, express_validator_1.body)("provider").notEmpty().withMessage("Provider should not be empty."),
    (0, express_validator_1.body)("emailAddress")
        .notEmpty()
        .withMessage("Email address field should not be empty")
        .isEmail()
        .withMessage("Please provide a valid email address.")
        .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
        if (!mongoose_1.default.isValidObjectId(val)) {
            throw new Error("Please provide a valid email address.");
        }
        const queryEmail = yield user_1.default.findOne({ emailAddress: val });
        if (!queryEmail) {
            throw new Error("Email address doest exists.");
        }
        return true;
    })),
];
exports.userRegistrationValidator = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Name should not be empty."),
    (0, express_validator_1.body)("password").custom((val, { req }) => {
        console.log(req.body.provider);
        if (req.body.provider === "FACEBOOK" || req.body.provider === "GOOGLE")
            return true;
        if (!val)
            throw new Error("Password field should not be empty.");
        if (val.length < 8)
            throw new Error("Password field should not be less than 8 characters.");
        if (val.length > 16)
            throw new Error("Password field should not be more than 16 characters.");
        return true;
    }),
    (0, express_validator_1.body)("provider").notEmpty().withMessage("Provider should not be empty."),
    (0, express_validator_1.body)("emailAddress")
        .notEmpty()
        .withMessage("Email address field should not be empty")
        .isEmail()
        .withMessage("Please provide a valid email address.")
        .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
        if (!mongoose_1.default.isValidObjectId(val)) {
            throw new Error("Please provide a valid email address.");
        }
        const queryEmail = yield user_1.default.findOne({ emailAddress: val });
        if (queryEmail) {
            throw new Error("Email address already exists.");
        }
        return true;
    })),
];
