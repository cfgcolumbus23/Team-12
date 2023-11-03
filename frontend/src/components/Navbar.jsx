import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navBarMain">
      <div id="navBarIcon">ICON THING</div>

      <img id="navBarLogo" src="logo.webp" />
      <Link to="/messages">MESSAGES</Link>
      <Link to="/feedback">FEEDBACK</Link>
      <Link to="/signUp">SIGN UP</Link>
      <Link to="/signIn">SIGN IN</Link>
    </div>
  );
};

export default Navbar;
