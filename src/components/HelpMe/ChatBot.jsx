import React, { useState } from 'react';
import axios from 'axios'; 

const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (message) => {
    try {
      const response = await axios.post(
        'https://dialogflow.googleapis.com/v2/projects/{YOUR_PROJECT_ID}/agent/sessions/{YOUR_SESSION_ID}:detectIntent',
        {
          queryInput: {
            text: {
              text: message,
              languageCode: 'en',
            },
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_DIALOGFLOW_API_KEY}`,
          },
        }
      );

      const botResponse = response.data.queryResult.fulfillmentText;
      addMessage(botResponse, 'bot');
    } catch (error) {
      console.error('Error communicating with Dialogflow:', error);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const userInput = e.target.elements.message.value;
    addMessage(userInput, 'user');
    sendMessage(userInput);
    e.target.elements.message.value = ''; // Clear input field
  };

  const addMessage = (text, sender) => {
    setMessages([...messages, { text, sender }]);
  };

  return (
    <div className="chatbot">
      {/* Display chat messages */}
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'bot' ? 'bot-message' : 'user-message'}>
            {msg.text}
          </div>
        ))}
      </div>
      {/* Input field for user to type messages */}
      <form onSubmit={handleSendMessage}>
        <input type="text" name="message" placeholder="Type your message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
