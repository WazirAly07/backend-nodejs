import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error connecting to database:", error.message);
    }
};

export { connectDb };
