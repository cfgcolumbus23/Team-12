const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const Message = require("./models/messageModel");
const messageChangeStream = Message.watch();

// Database Connection
mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected", err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Routes
// app.use("/api", require("./routes/userRoutes"));
app.use("/message", require("./routes/messageRoutes"));

// Port
const port = process.env.PORT;

// app.listen(port, () => console.log(`Server is running on port ${port}`));

//socket code for messages
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

messageChangeStream.on("change", (change) => {
  if (change.operationType === "insert") {
    const newMessage = change.fullDocument;
    io.emit("newMessage", newMessage);
  }
});
