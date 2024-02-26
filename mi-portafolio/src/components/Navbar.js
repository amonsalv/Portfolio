import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="#cv">See My CV</a>
    </div>
  );
}

export default Navbar;