import { createUser, deleteUser, updateUser, userHealthService } from "@controllers/user";
import { userIdValidator, userRegistrationValidator, userUpdateValidator } from "@middlewares/user";
import { Router } from "express";

const userRouter = Router();

userRouter.route("/").post(userRegistrationValidator, createUser);
userRouter.route("/health").get(userHealthService);
userRouter
  .route("/:id")
  .patch(userIdValidator, userUpdateValidator, updateUser)
  .delete(userIdValidator, deleteUser);
export default userRouter;
