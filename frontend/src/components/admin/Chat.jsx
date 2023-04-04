import React, { useState } from "react";
import io from "socket.io-client";


function Chat() {
  // const socket = io("http://localhost:5000"); 
  // socket.on("connect", () => {
  //   console.log("Connected to server");
  // });
  socket.emit("message", "Hello, server!");
      const [message, setMessage] = useState("");

const sendMessage = () => {
  socket.emit("message", message);
  setMessage("");
};

return (
  <div>
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
    <button onClick={sendMessage}>Send</button>
  </div>
);
 
}

export default Chat;
