const Message = require("../models/messageModel");

exports.directMessage = async (req, res) => {
  try {
    const { senderId: user1Id, receiverId: user2Id } = req.body;
    console.log("USERID", req.body);
    if (!user1Id || !user2Id) {
      return res.status(400).send("Both user IDs are required.");
    }

    const messages = await Message.find({
      $or: [
        { senderId: user1Id, receiverId: user2Id },
        { senderId: user2Id, receiverId: user1Id },
      ],
    }).sort("timestamp"); // Sorting by timestamp to get messages in chronological order

    res.status(200).json(messages);
  } catch (error) {
    if (
      error.name === "CastError" &&
      (error.path === "senderId" || error.path === "receiverId")
    ) {
      return res.status(400).send("Invalid user ID format.");
    }
    console.error(error);
    res.status(500).send(`Error fetching messages: ${error.message}`);
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
    if (
      error.name === "CastError" &&
      (error.path === "senderId" || error.path === "receiverId")
    ) {
      return res.status(400).send("Invalid senderId or receiverId format.");
    }
    console.error(error);
    res.status(500).send(`Error sending message: ${error.message}`);
  }
};
