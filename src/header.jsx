// Header.js
import { useState } from 'react';
import 'styles/Header.scss';

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
        <div className={`bar ${isMenuOpen ? 'bar-open' : ''}`}>Explore</div>
        <div className={`bar ${isMenuOpen ? 'bar-open' : ''}`}>Learn</div>
        <div className={`bar ${isMenuOpen ? 'bar-open' : ''}`}>Engage</div>
        <div className={`bar ${isMenuOpen ? 'bar-open' : ''}`}>My Profile</div>
        <div className={`bar ${isMenuOpen ? 'bar-open' : ''}`}>Documentation</div>
      </div>
      <div className={`overlay ${isMenuOpen ? 'overlay-open' : ''}`} onClick={toggleMenu} />
    </header>
      <script>
    // JavaScript function to toggle the dropdown menu and overlay
    function toggleDropdown() {
      var dropdownMenu = document.getElementById('dropdownMenu');
      var overlay = document.getElementById('overlay');
      dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
      overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
    }
  </script>
  );
};

export default Header
