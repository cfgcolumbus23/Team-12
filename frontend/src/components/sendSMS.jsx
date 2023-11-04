import React, { useState } from "react";
const sendSMS = ({ phoneNumber }) => {
  const [message, setMessage] = useState("");

  const sendSms = () => {
    if (phoneNumber.trim() === "" || message.trim() === "") {
      alert("Please fill in both phone number and message.");
      return;
    }
    alert(`Sending SMS to ${phoneNumber}: ${message}`);
  };

  return (
    <div>
      <h1>Send SMS</h1>
      <div>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button onClick={sendSms}>Send SMS</button>
    </div>
  );
};
export default sendSMS;
