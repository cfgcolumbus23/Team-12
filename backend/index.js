const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const app = express();
const http = require("http").createServer(app);
// const io = require("socket.io")(http);
// const messageChangeStream = Message.watch();

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
app.use("/api", require("./routes/userRoutes"));
app.use("/message", require("./routes/messageRoutes"));
app.use("/feed", require("./routes/feedRoutes"));

// Port
const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`));


