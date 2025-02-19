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
exports.deleteMessage = exports.updateMessage = exports.createMessage = exports.getAllMessages = void 0;
const message_1 = __importDefault(require("../models/message"));
const user_1 = __importDefault(require("../models/user"));
/**
 * Get all user messages
 */
const getAllMessages = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = "";
    const messages = yield message_1.default.find({ user: userId });
    return res.status(200).json({ messages });
});
exports.getAllMessages = getAllMessages;
/**
 * Create Message
 */
const createMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = "";
    const queryUser = yield user_1.default.findById(userId);
    if (!queryUser) {
        return res.status(404).json({ message: "User not found" });
    }
    yield message_1.default.create(req.body);
    return res.status(200).json({ message: "Message sent successfully." });
});
exports.createMessage = createMessage;
/**
 * Update Message
 */
const updateMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const message = yield message_1.default.findById(id);
    if (!message) {
        return res.status(404).json({ message: "Message not found" });
    }
    yield message_1.default.findByIdAndUpdate(id, { type: "read" });
});
exports.updateMessage = updateMessage;
/**
 * Delete Message
 */
const deleteMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const queryMessage = yield message_1.default.findByIdAndDelete(id);
    if (!queryMessage) {
        return res.status(404).json({ message: "Message not found" });
    }
    yield message_1.default.findByIdAndDelete(id);
    return res.status(200).json({ message: "Message deleted successfully" });
});
exports.deleteMessage = deleteMessage;
