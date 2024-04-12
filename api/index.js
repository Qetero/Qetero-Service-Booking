import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bussinessTypesRoute from "./routes/bussinessTypes.js";
import authRoute from "./routes/auth.js";

const app = express();
dotenv.config();
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connected to mongodb.");
  } catch (error) {
    console.log(error.message);
  }
};

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/bussinessTypes", bussinessTypesRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

app.listen(process.env.PORT_NO, () => {
  connectDB();
  console.log("connected to backend.");
});
