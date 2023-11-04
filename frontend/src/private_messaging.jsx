import React, { useState } from 'react';
import './private_messaging.css';
import Navbar from './components/Navbar';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showContacts, setShowContacts] = useState(false);
  const [selectedContact, setSelectedContact] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const contacts = ['Contact 1', 'Contact 2', 'Contact 3', 'Contact 4'];

  const handleSendMessage = () => {
    if (message) {
      setMessages([...messages, { text: message, direction: 'sent' }]);
      setMessage('');
    }
  };

  const handleReceiveMessage = () => {
    const receivedMessage = 'Received message example';
    setMessages([...messages, { text: receivedMessage, direction: 'received' }]);
  };

  const toggleContacts = () => {
    setShowContacts(!showContacts);
  };

  const handleContactSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setSearchValue(''); // Clear the search bar after selection
    setMessages([]); // Clear messages when a new contact is selected
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
                  className={`message ${msg.direction === 'sent' ? 'sentMessage' : 'receivedMessage'}`}
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
              <button onClick={handleReceiveMessage}>receive</button>
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
