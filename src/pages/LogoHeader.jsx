import React from 'react';
import './LogoHeader.css'; // Import the CSS file

import { useNavigate } from 'react-router-dom';

import Logo from './Logo.png'

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingBag, faUser, faLanguage } from '@fortawesome/free-solid-svg-icons';

const LogoHeader = () => {
  const navigate = useNavigate()
  const handleSignOut = () => {
    localStorage.removeItem('isSignedIn');
    navigate('/signin');
  };

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
        <div className='signout-container'>
              <div>
              <button onClick={handleSignOut} className='signout-button'>Sign Out</button>
              </div>
            
            </div>
      </div>
    </header>
  );
};

export default LogoHeader;
