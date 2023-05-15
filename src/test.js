import React, { useState } from 'react';
import './test.css';

const Test = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="logo">Mamuni</div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#hiw">About</a></li>
        <li className="navbar-item">Listen</li>
        <li className="navbar-item">Talk</li>
        <li className="navbar-item"><a href="#FAQ's">FAQ's</a></li>
        <li className="navbar-item signup">Sign Up</li>
      </ul>
    </nav>
  );
};

export default Test;
