import React from 'react';
import './Portfolio.css';
import { NavBar } from './Navbar';

function Portfolio() {
  return (
    <div className="App">
      <NavBar />
      <div className="headline">
        <h1>I Merge Art And Technology To Create Cutting-Edge Websites</h1>
      </div>
      <div className="subtext">
        <p>Crafting digital masterpieces that redefine online experiences</p>
      </div>
      <div className="button">
        <button>See My CV</button>
      </div>
    </div>
  );
}

export default Portfolio;