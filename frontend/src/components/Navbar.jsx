import React, { useState } from 'react';
import  './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="home">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="events">Events</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;