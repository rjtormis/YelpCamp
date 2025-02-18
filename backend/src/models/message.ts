import { IMessage } from "interfaces/interface";
import { Schema, model } from "mongoose";

const messageSchema = new Schema<IMessage>({
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  message: { type: String, required: true },
  type: { type: String, required: true, enum: ["read", "unread"], default: "unread" },
  to: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

const Message = model<IMessage>("Message", messageSchema);
export default Message;
