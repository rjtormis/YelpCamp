import { Request, Response, NextFunction } from "express";
import User from "@models/user";
import { wrapper } from "utils/utils";

/**
 * User service health checker
 */

export const userHealthService = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
      message: "User service is up and running",
    });
  }
);

/**
 * Create User
 * @body name, password, emailAddress, profileImage, role, provider
 */
export const createUser = wrapper(async (req: Request, res: Response) => {
  const { name, password, emailAddress, profileImage, role, provider } = req.body;

  const queryUser = await User.findOne({ emailAddress: emailAddress });

  if (queryUser) {
    return res.status(409).json({ message: "User already exists" });
  }
  // TODO: Handle Social logins
  // TODO: Handle Password Hashing

  const user = await User.create(req.body);

  return res.status(200).json({ message: "User created successfully", user: user });
});

/**
 *  Update specific user
 * @params id
 * @body name, password, emailAddress, profileImage, role, provider
 */
export const updateUser = wrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, password, emailAddress, profileImage, role, provider } = req.body;

  const queryUser = await User.findById(id);
  if (!queryUser) {
    return res.status(404).json({ message: "User not found" });
  }

  const updateUser = await User.findByIdAndUpdate(id, req.body);

  return res.status(200).json({ message: "User updated successfully", user: updateUser });
});

/**
 * Delete Specific User
 * @params id
 */
export const deleteUser = wrapper(async (req: Request, res: Response) => {
  const { id } = req.params;

  const queryUser = await User.findByIdAndDelete(id);

  if (!queryUser) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ message: "User deleted successfully" });
});
