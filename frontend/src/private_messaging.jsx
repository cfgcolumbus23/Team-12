import React, { useState, useEffect } from "react";
import "./private_messaging.css";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  // State variables to manage messages, user input, and contacts
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showContacts, setShowContacts] = useState(false);
  const [selectedContact, setSelectedContact] = useState("");
  const [searchValue, setSearchValue] = useState("");
  // Dummy contact data for example
  const contacts = [
    "Tyler",
    "Sophie",
    "Abdel",
    "Arnav",
    "Alexa",
    "Mithra",
    "Reegan",
  ];

  // State for error messages
  const [errorMessage, setErrorMessage] = useState("");

  const currentUser = "Tyler";

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

  // Function to handle receiving a message
  const handleReceiveMessage = () => {
    const receivedMessage = "Received message example";
    setMessages([
      ...messages,
      { text: receivedMessage, direction: "received" },
    ]);
  };

  //Function to toggle the contacts lists visibility
  const toggleContacts = () => {
    setShowContacts(!showContacts);
  };

  // Function to handle contact search
  const handleContactSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // Function to handle contact selection
  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setSearchValue("");
    setMessages([]); // Clear any previous error messages
    setErrorMessage(""); // Clear any previous error message
  };

  // Filter contacts based on search input
  const filteredContacts = contacts.filter((contact) =>
    contact.toLowerCase().includes(searchValue.toLowerCase())
  );

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
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}
            </div>
            <div className="send-div">
              <input
                type="text"
                id="sendMessage"
                placeholder="Your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <input
                type="submit"
                value="Send Message"
                onClick={handleSendMessage}
              />
            </div>
            <button className="showContacts" onClick={toggleContacts}>
              Show Contacts
            </button>
          </div>
          <div></div>
          {showContacts && (
            <div className="contacts">
              <button onClick={toggleContacts}>Hide Contacts</button>
              <datalist id="contactsList">
                {filteredContacts.map((contact, index) => (
                  <option key={index} value={contact} />
                ))}
              </datalist>
              <input
                list="contactsList"
                value={selectedContact}
                onChange={(e) => handleContactSelect(e.target.value)}
                placeholder="Search for a contact"
              />
            </div>
          )}
        </div>
      </body>
    </html>
  );
}

export default App;
