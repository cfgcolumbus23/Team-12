const Message = require("../models/messageModel");

//gets the messages between two users
exports.directMessage = async (req, res) => {
  try {
    const user1Id = req.query.senderId;
    const user2Id = req.query.receiverId;
    console.log("USERIDS Print", user1Id);
    if (!user1Id || !user2Id) {
      return res.status(400).send("Bth user IDs are reqouired.");
    }
    //filters out from specific sender and receiver
    const messages = await Message.find({
      $or: [
        { senderId: user1Id, receiverId: user2Id },
        { senderId: user2Id, receiverId: user1Id },
      ],
    }).sort("timestamp"); // Sorting by timestamp to get messages in chronological order

    res.status(200).json(messages);
  } catch (error) {
    //catch statements to better debug where the error is coming from
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

//sends the message to mongosedb
exports.sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, content } = req.body;

    if (!senderId || !receiverId || !content) {
      return res.status(400).send("Required fields are missing.");
    }

    //format for sending new messages
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
