import React from 'react';
import '@/styles/pages/_navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        Portfolio
      </div>
      <div className="navbar-content">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/about" className="navbar-link">About</Link>
            <Link to="/projects" className="navbar-link">Projects</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
