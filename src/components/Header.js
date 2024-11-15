// src/components/Header.js
import React from "react";
import "../styles/Header.css";
import Logo from "../images/logo.webp";
import HamburgerMenu from "../scripts/Hamburger";

const Header = () => {
  return (
    <div className="header">
      <div className="header-holder">
        {/* Logo */}
          <a href="/">
              <img src={Logo} alt="Logo" loading="lazy"/>
          </a>


          {/* Hamburger Menu */}
          <HamburgerMenu />
      </div>
    </div>
  );
};
export default Header;
