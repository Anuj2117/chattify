import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";

import { app, server } from "./SocketIO/server.js";

dotenv.config();

const allowedOrigin = [
  "http://localhost:5173",
  "https://chattify-front.onrender.com",
];

// middleware
app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 6970;
const URI = process.env.MONGODB_URI;

mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  });

//routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

server.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
