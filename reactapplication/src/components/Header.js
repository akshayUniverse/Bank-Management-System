import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="utility-nav">
      <div className="container">
        <ul>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <nav className="main-nav">
        <div className="container">
          <Link to="/" className="logo">Bank Management System</Link>
          <ul>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/resources">Resources</Link></li>
          </ul>
          <div className="cta-buttons">
            <Link to="/login" className="btn primary">Login</Link>
            <Link to="/register" className="btn secondary">Register</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
