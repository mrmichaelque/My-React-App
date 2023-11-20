// Header.js

import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="logo-container">
        <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'bar-open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'bar-open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'bar-open' : ''}`}></div>
      </div>
      <div className={`overlay ${isMenuOpen ? 'overlay-open' : ''}`} onClick={toggleMenu}></div>
    </header>
  );
};

export default Header;

/* Header.css */

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #3498db; /* Header background color */
  color: #fff; /* Text color */
  height: 150px;
  position: relative;
}

.logo {
  height: 100%;
  width: auto;
}

.menu-icon {
  cursor: pointer;
}

.bar {
  height: 4px;
  width: 30px;
  background-color: #fff;
  margin: 6px 0;
  transition: transform 0.3s;
}

.bar-open {
  transform: rotate(-45deg) translate(-7px, 6px);
}

.menu-open .bar:nth-child(2) {
  opacity: 0;
}

.bar-open:nth-child(3) {
  trtransform: rotate(45deg) translate(-7px, -6px);
}

.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Overlay color and transparency */
  z-index: 1;
}

.overlay-open {
  display: block;
}

/* Media query for smaller screens (e.g., mobile) */
@media screen and (max-width: 768px) {
  .header {
    flex-direction: column; /* Stack items vertically on smaller screens */
  }

  .overlay {
    display: none; /* Hide the overlay on larger screens */
  }
}