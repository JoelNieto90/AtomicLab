import React from "react";
// import { Link, useHistory } from "react-router-dom";
import "../styles/NavBar.scss";
import Logo from "../assets/logo_atomiclabs.webp";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <img className="NavBar_img" src={Logo} alt="Logo" />
    </nav>
  );
};

export default NavBar;
