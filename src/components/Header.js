// src/components/Header.js
import React from "react";
import "../styles/Header.css";
import Logo from "../images/logo.svg";
import HamburgerMenu from "../scripts/Hamburger";

const Header = () => {
  return (
    <div className="header">
      <div className="header-holder">
        {/* Logo */}
        <img src={Logo} alt="Logo" />

        {/* Hamburger Menu */}
        <HamburgerMenu />
      </div>
    </div>
  );
};
export default Header;
