// SocialLink.js
import React from 'react';

const SocialLink = ({ href, icon, itemClass }) => {
  return (
    <li className={itemClass}>
      <a href={href} target="_blank" rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
