import React from 'react';
import GitHubLogo from './GitHub-Mark-64px.png';
import LinkedInLogo from './linkedin_64px.png';

const Footer = (props) => (
  <footer>
    <div>
      <a href="https://github.com/yunasty/pxClone" target="_blank">
        <img src={GitHubLogo} />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/kevin-yunas-987325183/"
        target="_blank"
      >
        <img src={LinkedInLogo} />
      </a>
    </div>
  </footer>
);

export default Footer;