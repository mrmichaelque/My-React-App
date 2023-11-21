// Header.js
import { useState } from 'react';
import "./header.scss";
const Header = () => {
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