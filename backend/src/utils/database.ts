import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
  } catch (e) {
    console.log("An error occurred while connecting to the database");
    console.log("Error: ", e);
  }
};
