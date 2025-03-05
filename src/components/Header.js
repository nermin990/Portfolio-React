// src/components/Header.js
import React from "react";
import "../styles/Header.css";
import Logo from "../images/logo.webp";
import HamburgerMenu from "../scripts/Hamburger";

const Header = () => {
  return (
    <div className="header">
      <div className="header-holder">
          <a href="/">
              <img src={Logo} alt="Home - Logo" loading="lazy"/>
              <span className="sr-only">Home</span>
          </a>
          {/* Hamburger Menu */}
          <HamburgerMenu />
      </div>
    </div>
  );
};
export default Header;
