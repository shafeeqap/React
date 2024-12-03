import express from "express";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Server is running... http://localhost:${8080}`);
});

// Initialize Socket.io
const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:5173",
  },
});

// Socket.io connection logic
io.on("connection", (socket) => {
  console.log("New client connected");

  // Listening for a "message" event
  socket.on("message", (message) => {
    console.log(message);

    // Broadcast the message to all connected clients
    io.emit("message", message);
  });

  // Listening for a "disconnect" event
  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
});
