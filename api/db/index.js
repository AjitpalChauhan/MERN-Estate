import mongoose from "mongoose";
import {app} from "../index.js"

const connectDB = async () => {
  try {
    const connectionDB = await mongoose
    .connect(process.env.MONGO)
    console.log(`Connect to MONGODB ${connectionDB.connection.host}`)
    app.on("error", (error) => {
      console.log("Error:", error)
      throw error
    })
  } catch (error) {
    console.log("MONGODB connection FAILED", error);
    process.exit(1)
  }
}

export default connectDB;