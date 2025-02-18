import { IInbox } from "interfaces/interface";
import { model, Schema } from "mongoose";

const inboxSchema = new Schema<IInbox>({
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

const Inbox = model<IInbox>("Inbox", inboxSchema);
export default Inbox;
