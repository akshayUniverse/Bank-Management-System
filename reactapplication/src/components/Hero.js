// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <h1>Welcome to the Bank Management System</h1>
      <p>Your one-stop solution for managing accounts, tracking transactions, and securing your financial future.</p>
      <button className="hero-button" onClick={() => alert('Welcome! Get started with our services!')}>Get Started</button>
    </div>
  );
}

export default Hero;
