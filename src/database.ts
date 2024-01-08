import mongoose, { ConnectOptions } from "mongoose";

require("dotenv").config();

export const connectDB = async () => {
  try {
    console.log("before connect");
    if (process.env.MONGODB_CONNECTION) {
      const connection = await mongoose.connect(
        process.env.MONGODB_CONNECTION,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as ConnectOptions
      );
    }
    console.log(`Connected to MongoDB database`);
  } catch (error) {
    console.error("Error connecting to MongoDB database:", error);
  }
};

module.exports = { connectDB };
// module.exports = { connectDB: connectDB };
