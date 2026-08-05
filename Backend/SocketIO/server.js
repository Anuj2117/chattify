import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const allowedOrigin = [
  "http://localhost:5173",
  "https://chattify-front.onrender.com",
  "https://chattify-five.vercel.app"
];
const io = new Server(server, {
  cors: {
    origin: allowedOrigin,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const users = {};

export const getReceiverSocketId = (receiverId) => {
  return users[receiverId];
};

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) {
    users[userId] = socket.id;

    console.log("Hello ", users);
  }
  // used to send the events to all connected users
  io.emit("getOnlineUsers", Object.keys(users));

  socket.on("disconnect", () => {
    console.log("a user disconnected", socket.id);
    if (userId) {
      delete users[userId];
      io.emit("getOnlineUsers", Object.keys(users));
    }
  });
});

export { app, io, server };
