const Message = require("../models/messageModel");

exports.directMessage = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).send("Error fetching messages");
  }
};

exports.sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, content } = req.body;

    if (!senderId || !receiverId || !content) {
      return res.status(400).send("Required fields are missing.");
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      content,
    });

    await newMessage.save();
    res.status(201).send("Message sent successfully");
  } catch (error) {
    res.status(500).send("Error sending message");
  }
};
