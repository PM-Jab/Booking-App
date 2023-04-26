import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { start } from "repl";

const app = express();
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
mongoose.connection.on("connected", () => {
  console.log("mongoBD connected!");
});

app.get("/", (req, res) => {
  res.send("hello");
});

const startServer = async () => {
  try {
    connectDB();
    app.listen(8800, () => {
      console.log("Connected to backend!");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
