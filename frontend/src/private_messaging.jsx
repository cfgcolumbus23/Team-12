import React, { useState } from "react";
import "./private_messaging.css";
import Navbar from "./components/Navbar";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showContacts, setShowContacts] = useState(false);
  const [selectedContact, setSelectedContact] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const contacts = [
    "Tyler",
    "Sophie",
    "Abdul",
    "Arnnov",
    "Alexa",
    "Mithra",
    "Reegan",
  ];
  const [errorMessage, setErrorMessage] = useState("");

  const handleSendMessage = () => {
    if (selectedContact) {
      if (message) {
        setMessages([...messages, { text: message, direction: "sent" }]);
        setMessage("");
      }
      setErrorMessage("");
    } else {
      setErrorMessage("Please select a contact before sending.");
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
    setSearchValue("");
    setMessages([]);
    setErrorMessage("");
  };

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
              <input type="submit" value="Send Message" onClick={handleSendMessage} />
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
