import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-left">
          <h2>Be the first to know</h2>
          <p>Sign up for updates from mettā muse.</p>
          {/* Updated input and button wrapped in a container */}
          <div className="email-subscribe-container">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button type="button" className="subscribe-button">Subscribe</button>
          </div>
        </div>
        <div className="footer-right">
          <p>CONTACT US</p>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>
      </footer>

      <footer className="footer-container">
        <div className="footer-left">
          <h2>mettā muse</h2>
          <p>About Us</p>
          <p>Artisans</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div className="footer-right">
          <h2>Quick Links</h2>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </footer>

      <div className="copyright-container">
        <p className="footer-copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
