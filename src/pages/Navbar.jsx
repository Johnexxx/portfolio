import React from 'react';
import '../styles/pages/_navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        Portfolio
      </div>
      <div className="navbar-content">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a> 
      </div>
    </nav>
  );
};

export default Navbar;
