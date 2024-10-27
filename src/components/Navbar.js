import React from 'react';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Navbar = () => {
  // Define social links data directly in the Navbar component
  const socialLinks = [
    { id: 1, href: 'https://www.instagram.com', icon: 'fab fa-instagram' },
    { id: 2, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
    { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-twitter' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <span className="nav-logo">Travel Trails</span>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* PageLinks component for navigation links */}
        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        {/* Social Links */}
        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <SocialLink {...link} key={link.id} itemClass="nav-icon" />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
