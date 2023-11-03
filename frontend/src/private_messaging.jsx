import React, { useState } from 'react';
import './private_messaging.css'; 

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]); 

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

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Browser</title>
      </head>
      <body className="message-body">
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
      </body>
    </html>
  );
}

export default App;
