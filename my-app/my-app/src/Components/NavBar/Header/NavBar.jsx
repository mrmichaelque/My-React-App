// Header.js
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import' . / NavBar.css';

const NavBar= () => {
    return (
        <div>
       NavBar
        </div>
    )
}
 
export default CTA
const NavBar = () => {
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // ... (previous code)

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="logo-container">
        <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {/* Menu items */}
        <div className={`bar ${isMenuOpen ? 'bar-open' : ''}`}>Explore</div>
        <div className={`bar ${isMenuOpen ? 'bar-open' : ''}`}>Learn</div>
        <div className={`bar ${isMenuOpen ? 'bar-open' : ''}`}>Engage</div>
        <div className={`bar ${isMenuOpen ? 'bar-open' : ''}`}>My Profile</div>
        <div className={`bar ${isMenuOpen ? 'bar-open' : ''}`}>Documentation</div>
      </div>
      <div className={`overlay ${isMenuOpen ? 'overlay-open' : ''}`} onClick={toggleMenu} />
    </header>
  );
}
default export NavBar