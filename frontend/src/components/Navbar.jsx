import React, { useState } from 'react';
import  './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src="data:image/png;base64,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"></img></div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="Home">Home</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Events">Events</a></li>
        <li><a href="Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;