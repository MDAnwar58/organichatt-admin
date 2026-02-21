import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
   cors: {
      origin: "*", // Allow requests from any origin
   },
});

const orders = [];
io.on("connection", (socket) => {
   console.log("A user connected:", socket.id);

   // Listen for order events from the user frontend
   socket.on("orderPlaced", (order) => {
      console.log("New order received:", order);

      // Broadcast the order to all connected clients
      io.emit("newOrder", order);
   });

   socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
   });
});

server.listen(4000, () => {
   console.log("Socket.IO server running on port 4000");
});
