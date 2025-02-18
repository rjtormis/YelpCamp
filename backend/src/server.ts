import app from "utils/utils";
import morgan from "morgan";

import { Request, Response, NextFunction, json, urlencoded } from "express";
import { connect } from "mongoose";

import { databaseConnection } from "utils/database";
/**ROUTES */
import authRouter from "@routes/auth";
import bookingRouter from "@routes/bookings";
import campgroundRouter from "@routes/campground";
import dashboardRouter from "@routes/dashboard";
import listingRouter from "@routes/listings";

// Connect database
databaseConnection();

app.use(morgan("dev"));
app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/bookings", bookingRouter);
app.use("/campgrounds", campgroundRouter);
app.use("/dashboard", dashboardRouter);
app.use("/listings", listingRouter);

app.listen(3000, () => {
  console.log("Listening in PORT 3000");
});
