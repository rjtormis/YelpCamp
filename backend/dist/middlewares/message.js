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
exports.messageUpdateValidator = exports.messageIDValidator = void 0;
const message_1 = __importDefault(require("../models/message"));
const user_1 = __importDefault(require("../models/user"));
const express_validator_1 = require("express-validator");
const mongoose_1 = __importDefault(require("mongoose"));
exports.messageIDValidator = (0, express_validator_1.param)("id")
    .notEmpty()
    .withMessage("Message ID should not be empty.")
    .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
    const queryMessage = yield message_1.default.findById(val);
    if (!queryMessage) {
        throw new Error("Message does not exists.");
    }
    if (!mongoose_1.default.isValidObjectId(val)) {
        throw new Error("Please provide a valid Message ID.");
    }
    return true;
}));
exports.messageUpdateValidator = [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .withMessage("Message ID should not be empty.")
        .custom((val) => {
        if (!mongoose_1.default.isValidObjectId(val)) {
            throw new Error("Please provide a valid Message ID.");
        }
        return true;
    }),
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
    (0, express_validator_1.body)("to")
        .notEmpty()
        .withMessage("User should not be empty.")
        .custom((val) => __awaiter(void 0, void 0, void 0, function* () {
        const queryUser = yield user_1.default.findById(val);
        if (!queryUser) {
            throw new Error("User does not exists.");
        }
        return true;
    })),
];
