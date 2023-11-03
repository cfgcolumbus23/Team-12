import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navBarMain">

      <img id="navBarLogo" src="logo.webp" />


      <img id="navBarMenuIcon" src="three.svg"/>
      <Link to="/messages">MESSAGES</Link>
      <Link to="/feedback">FEEDBACK</Link>
    </div>
  );
};

export default Navbar;
