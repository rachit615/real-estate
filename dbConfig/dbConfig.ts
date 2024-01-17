import { error } from "console";
import mongoose from "mongoose";

// connect to mongodb

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongodb connected");
    });
    connection.on("error", (err) => {
      console.log(
        "mongoDb connection error. Please make sure mongodb is running!" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}
