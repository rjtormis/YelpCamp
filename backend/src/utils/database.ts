import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    const connection = await mongoose.connect("");
  } catch (e) {
    console.log("An error occurred while connecting to the database");
    console.log("Error: ", e);
  }
};
