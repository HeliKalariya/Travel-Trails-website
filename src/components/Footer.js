import React from 'react';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Footer = () => {
  // Define social links data directly in Footer component
  const socialLinks = [
    { id: 1, href: 'https://www.instagram.com', icon: 'fab fa-instagram' },
    { id: 2, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
    { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-twitter' }
  ];

  return (
    <footer className="section footer">
      {/* PageLinks component for other page links */}
      <PageLinks parentClass="footer-links" itemClass="footer-link" />

      {/* Social Links */}
      <ul className="footer-icons">
        {socialLinks.map((link) => (
          <SocialLink 
            key={link.id} 
            href={link.href} 
            icon={link.icon} 
            itemClass="footer-icon" 
          />
        ))}
      </ul>

      {/* Copyright */}
      <p className="copyright">
        copyright &copy; Travel Trails company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
