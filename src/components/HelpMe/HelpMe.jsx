// HelpMe.jsx

import React, { useState } from 'react';
import './HelpMe.css';
import ChatBot from './ChatBot'; 

const HelpMe = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="help-me">
      <button className="btn btn-primary ask-me-btn" onClick={toggleChat}>Ask Me</button>
      {showChat && <ChatBot />}
    </div>
  );
}

export default HelpMe;
