import React from 'react';
import './LogoHeader.css'; // Import the CSS file

import Logo from './Logo.png'

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingBag, faUser, faLanguage } from '@fortawesome/free-solid-svg-icons';

const LogoHeader = () => {
  return (
    <header className="logo-header">
      <div className="logo">
        {/* Replace with your logo image if needed */}
        <img src={Logo} alt="Logo" className="logo-image" />
      </div>
      <div className="logo-text">LOGO</div>
      <div className="icon-container">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <FontAwesomeIcon icon={faHeart} className="icon" />
        <FontAwesomeIcon icon={faShoppingBag} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
        <FontAwesomeIcon icon={faLanguage} className="icon" />
      </div>
    </header>
  );
};

export default LogoHeader;
