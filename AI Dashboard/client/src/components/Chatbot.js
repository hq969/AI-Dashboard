import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    const response = await axios.post("http://localhost:5000/chat", { message });

    setChat([...chat, { sender: "user", text: message }, { sender: "bot", text: response.data }]);
    setMessage("");
  };

  return (
    <div className="chatbot">
      <h3>AI Chatbot</h3>
      <div className="Ai Agent">
        {chat.map((msg, i) => (
          <p key={i} className={msg.sender}>{msg.text}</p>
        ))}
      </div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask about transactions..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
