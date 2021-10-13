import React from "react";
import GitHubLogo from "assets/images/GitHub-Mark-64px.png";
import LinkedInLogo from "assets/images/linkedin_64px.png";

const openURLinNewTab = (e, url) => {
  e.preventDefault();
  e.stopPropagation();
  window.open(url, "_blank");
};

const Footer = (props) => (
  <footer>
    <div
      className="footer-link"
      onClick={(e) => openURLinNewTab(e, "https://github.com/kyunas96/pxClone")}
    >
      <img src={GitHubLogo} />
    </div>
    <div
      className="footer-link"
      onClick={(e) =>
        openURLinNewTab(e, "https://www.linkedin.com/in/kevin-yunas-987325183/")
      }
    >
      <img src={LinkedInLogo} />
    </div>
  </footer>
);

export default Footer;
