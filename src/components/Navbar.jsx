import React from 'react';
import '@/styles/components/_navbar.scss';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; // <-- Import here

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        Portfolio
      </div>
      <div className="navbar-content">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/skills" className="navbar-link">Skills</Link>
        <Link to="/projects" className="navbar-link">Projects</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
        <ThemeToggle /> 
      </div>
    </nav>
  );
};

export default Navbar;
