import React from "react";
import { Link } from "react-router-dom";
import "../styles/GoodnewsAI.css"; // Import the CSS file for styling

const GoodnewsAI = () => {
  return (
    <div className="goodnews-container">
      <h1 className="goodnews-header">Welcome to GoodnewsAI</h1>
      <p className="goodnews-content">
        Experience Bible-based conversations with our AI-powered WhatsApp chatbot.  
        Get daily Bible verses, ask spiritual questions, and explore biblical insights.
      </p>
      <a
        href="https://wa.me/548897968315239"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Start Chatting on WhatsApp
      </a>
      <br />
      <Link to="/GoodnewsAI/privacy-policy" className="privacy-link">
        Read our Privacy Policy
      </Link>
    </div>
  );
};

export default GoodnewsAI;
