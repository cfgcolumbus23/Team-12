// import React, { useState } from "react";
// const sendSMS = ({ phoneNumber }) => {
//   const [message, setMessage] = useState("");

//   const sendSms = () => {
//     if (phoneNumber.trim() === "" || message.trim() === "") {
//       alert("Please fill in both phone number and message.");
//       return;
//     }
//     alert(`Sending SMS to ${phoneNumber}: ${message}`);
//   };

//   return (
//     <div>
//       <h1>Send SMS</h1>
//       <div>
//         <label htmlFor="message">Message</label>
//         <input
//           type="text"
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//       </div>
//       <button onClick={sendSms}>Send SMS</button>
//     </div>
//   );
// };
// export default sendSMS;


import React, { useState } from "react";

const SendSMS = () => {
  // State for managing the message content
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Function to handle sending the SMS (this is a mock example)
  const sendSMS = () => {
    if (phoneNumber.trim() === "" || message.trim() === "") {
      alert("Please fill in both phone number and message.");
      return;
    }
    // In a real application, this is where you'd interact with an SMS service
    alert(`Sending SMS to ${phoneNumber}: ${message}`);
  };

  return (
    <div>
      <h1>Send SMS</h1>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button onClick={sendSMS}>Send SMS</button>
    </div>
  );
};

export default SendSMS;
