import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; 
import ParagraphLayout from '../components/ParagraphLayout';

import LogoHeader from './LogoHeader';
import Intro from '../components/Intro';

const Layout = () => {
  return (
    <>
      <ParagraphLayout />

      <LogoHeader />
      
      <div className="nav-container">
        <Link to="/" className="nav-link">SHOP</Link>
        <Link to="/skills" className="nav-link">SKILLS</Link>
        <Link to="/stories" className="nav-link">STORIES</Link>
        <Link to="/about" className="nav-link">ABOUT</Link>
        <Link to="/contact" className="nav-link">CONTACT US</Link>
      </div>
      

      <Intro />
      

      
      
    </>
  );
};

export default Layout;
