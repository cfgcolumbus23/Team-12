import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuClicked() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <div id="navBarMain">
        <img id="navBarLogo" src="logo.webp" alt="Logo" />
        <img
          id="navBarMenuIcon"
          src="three.svg"
          alt="Menu Icon"
          onClick={() => menuClicked()}
        />
        <Link to="/messages">MESSAGES</Link>
        <Link to="/feedback">FEEDBACK</Link>
      </div>

      {menuOpen && (
        <div id="sideBarOpen">
        <img
          id="navBarMenuIcon"
          src="three.svg"
          alt="Menu Icon"
          onClick={() => menuClicked()}
        />
        </div>
      )}
    </div>
  );
};

export default Navbar;
