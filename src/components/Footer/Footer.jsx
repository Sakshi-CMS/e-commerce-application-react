import React from 'react';
import './Footer.css';
import FooterLogo from '../Assets/Shopping_Logo.png';
import InstagramLogo from '../Assets/Insta_Icon.png';
import WhatsAppLogo from '../Assets/WhatsApp_Icon.png';
import PinterestLogo from '../Assets/Printest_Icon.png';
import TwitterLogo from '../Assets/Twitter_Icon.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={FooterLogo} width="70" height="70" alt='' />
          <p className='Shopper_text'>SHOPPER</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
          <div className="footer-icon-container">
            <img className='image_size' src={InstagramLogo} alt='' />
          </div>
          <div className="footer-icon-container">
            <img className='image_size'src={WhatsAppLogo} alt='' />
          </div>
          <div className="footer-icon-container">
            <img className='image_size'src={PinterestLogo} alt='' />
          </div>
          <div className="footer-icon-container">
            <img className='image_size' src={TwitterLogo} alt='' />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr className="divider" />
        <p>Copyright © 2024 - All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
