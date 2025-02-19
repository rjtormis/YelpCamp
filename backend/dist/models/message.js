"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "User" },
    message: { type: String, required: true },
    type: { type: String, required: true, enum: ["read", "unread"], default: "unread" },
    to: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "User" },
});
const Message = (0, mongoose_1.model)("Message", messageSchema);
exports.default = Message;
