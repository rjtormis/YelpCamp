import Message from "@models/message";
import User from "@models/user";
import { Request, Response, NextFunction } from "express";

/**
 * Get all user messages
 */
export const getAllMessages = async (req: Request, res: Response, next: NextFunction) => {
  const userId = "";
  const messages = await Message.find({ user: userId });

  return res.status(200).json({ messages });
};

/**
 * Create Message
 */

export const createMessage = async (req: Request, res: Response, next: NextFunction) => {
  const userId = "";

  const queryUser = await User.findById(userId);

  if (!queryUser) {
    return res.status(404).json({ message: "User not found" });
  }

  await Message.create(req.body);

  return res.status(200).json({ message: "Message sent successfully." });
};

/**
 * Update Message
 */
export const updateMessage = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;

  const message = await Message.findById(id);

  if (!message) {
    return res.status(404).json({ message: "Message not found" });
  }

  await Message.findByIdAndUpdate(id, { type: "read" });
};

/**
 * Delete Message
 */

export const deleteMessage = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const queryMessage = await Message.findByIdAndDelete(id);
  if (!queryMessage) {
    return res.status(404).json({ message: "Message not found" });
  }

  await Message.findByIdAndDelete(id);
  return res.status(200).json({ message: "Message deleted successfully" });
};
