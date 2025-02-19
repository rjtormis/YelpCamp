"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
const user_2 = require("../middlewares/user");
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.route("/").post(user_2.userRegistrationValidator, user_1.createUser);
userRouter.route("/health").get(user_1.userHealthService);
userRouter
    .route("/:id")
    .patch(user_2.userIdValidator, user_2.userUpdateValidator, user_1.updateUser)
    .delete(user_2.userIdValidator, user_1.deleteUser);
exports.default = userRouter;
