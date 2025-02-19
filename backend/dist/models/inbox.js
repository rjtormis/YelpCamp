"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const inboxSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "User" },
    messages: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Message" }],
});
const Inbox = (0, mongoose_1.model)("Inbox", inboxSchema);
exports.default = Inbox;
