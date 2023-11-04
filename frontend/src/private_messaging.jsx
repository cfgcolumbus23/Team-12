import React, { useState, useEffect } from "react";
import "./private_messaging.css";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showContacts, setShowContacts] = useState(false);
  const [selectedContact, setSelectedContact] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const contacts = ["person1", "person2", "person3", "person4"];
  const currentUser = "person1";

  const handleSendMessage = () => {
    if (message) {
      axios
        .post("http://localhost:8000/message/send", {
          senderId: currentUser,
          receiverId: selectedContact,
          content: message,
        })
        .then((response) => {
          console.log("Response:", response.data);
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
      setMessages([...messages, { text: message, direction: "sent" }]);
      setMessage("");
    }
  };

  const handleReceiveMessage = () => {
    const receivedMessage = "Received message example";
    setMessages([
      ...messages,
      { text: receivedMessage, direction: "received" },
    ]);
  };

  const toggleContacts = () => {
    setShowContacts(!showContacts);
  };

  const handleContactSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    console.log("new contact", contact);
    setSearchValue(""); // Clear the search bar after selection
    setMessages([]); // Clear messages when a new contact is selected
  };

  useEffect(() => {
    // Construct the URL with query parameters

    const url = `http://localhost:8000/message/message_receive?senderId=${currentUser}&receiverId=${selectedContact}`;

    // Fetch messages between two specific users using GET request with axios
    axios
      .get(url)
      .then((response) => {
        const transformedMessages = response.data.map((msg) => {
          let direction;
          if (msg.senderId === currentUser) {
            direction = "sent";
          } else if (msg.receiverId === currentUser) {
            direction = "received";
          }
          return {
            text: msg.content,
            direction: direction,
          };
        });
        setMessages(transformedMessages);
        console.log("DATA RECEIVE", transformedMessages);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error("Server responded with:", error.response.data);
          console.error("Status code:", error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error", error.message);
        }
      });

    // If you have socket.io code, it can continue here
  }, [selectedContact]); // Adding selectedContact as a dependency so the effect runs when its value changes

  const filteredContacts = contacts.filter((contact) =>
    contact.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Browser</title>
      </head>
      <body className="message-body">
        <div className="app-container">
          <Navbar />
          <div className="centered message-div">
            <div id="allMessages" className="scrollable-container message-div">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.direction === "sent" ? "sentMessage" : "receivedMessage"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="send-div message-div">
              <input
                type="text"
                id="sendMessage"
                placeholder="Your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <input type="submit" value="send" onClick={handleSendMessage} />
              {/* <button onClick={handleReceiveMessage}>receive</button> */}
            </div>
          </div>
          <div>
            <button onClick={toggleContacts}>Toggle Contacts</button>
          </div>
          {showContacts && (
            <div className="contacts">
              <button onClick={toggleContacts}>Toggle Contacts</button>
              <input
                type="text"
                placeholder="Search for contacts"
                value={searchValue}
                onChange={handleContactSearch}
              />
              <datalist id="contactsList">
                {filteredContacts.map((contact, index) => (
                  <option key={index} value={contact} />
                ))}
              </datalist>
              <input
                list="contactsList"
                value={selectedContact}
                onChange={(e) => handleContactSelect(e.target.value)}
                placeholder="Select a contact"
              />
            </div>
          )}
        </div>
      </body>
    </html>
  );
}

export default App;
