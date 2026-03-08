import mongoose, { mongo } from "mongoose";

const CONNECT_URI: string = process.env.URI!;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(CONNECT_URI, {
      dbName: "nextjs-backend",
    });

    console.log("Connected with MongoDB");
  } catch (error) {
    console.log("MongoDb connection error: ", error);
  }
};

export default connectMongoDB;
