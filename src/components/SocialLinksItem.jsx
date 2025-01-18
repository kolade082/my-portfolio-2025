import React from 'react';
import './socialLinksItem.css';

function SocialLinksItem({ name, url }) {
  return (
    <a 
      href={name === 'envelope' ? `mailto:${url}` : url} 
      target={name === 'envelope' ? '_self' : '_blank'} 
      rel={name === 'envelope' ? undefined : 'noopener noreferrer'} 
      className={name}
    >
      <i className={`bi bi-${name}`}></i>
    </a>
  );
}

export default SocialLinksItem;
