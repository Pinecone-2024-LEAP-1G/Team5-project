import mongoose from "mongoose";
import "dotenv/config";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Database Connected!");
  } catch (error) {
    console.log(error);
  }
};
