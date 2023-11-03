const mongoose = require("mongoose");

//TODO: Change mongost scheme based on where the user information is being saved
const messageSchema = new mongoose.Schema({
  senderId: {
    type: String,
    ref: "User",
    required: true,
  },
  receiverId: {
    type: String,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
