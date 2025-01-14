import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import styles from "./ChatBox.module.css";

const socket = new WebSocket("ws://localhost:8080");

function ChatBox({ user }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Handle incoming messages
  useEffect(() => {
    socket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };
  }, []);

  // Send a message via WebSocket
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        user,
        text: newMessage,
        timestamp: new Date(),
      };
      socket.send(JSON.stringify(message));
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage(""); // Clear the input
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); 
      handleSendMessage();
    }
  };

  return (
    <Box className={styles.chatBox}>
      <div className={styles.chatHeader}>Chat with {user}</div>

      <Box className={styles.chatMessages}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.chatMessage}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </Box>

      <Box className={styles.chatInput}>
        <TextField
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress} // Listen for the Enter key press
          fullWidth
          placeholder="Type your message..."
          multiline
        />
        <Button
          onClick={handleSendMessage}
          variant="contained"
          color="primary"
          className={styles.sendButton}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default ChatBox;
