import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    function menuClicked(){
        setMenuOpen(!menuOpen)
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
        <Link to="/signUp">SIGN UP</Link>
        <Link to="/signIn">SIGN IN</Link>
      </div>

      {menuOpen && (
        <div id="sideBarOpen">
        <img
          id="navBarMenuIcon"
          src="three.svg"
          alt="Menu Icon"
          onClick={() => menuClicked()}
        />
        <div id = "sideMenuItemContainers">
            <div className = "sideMenuItem" id = "sideMenuItem1">
                test1
            </div>
            <div className = "sideMenuItem" id = "sideMenuItem2">
                test2
            </div>
            <div className = "sideMenuItem" id = "sideMenuItem3">
                test3
            </div>
            <div className = "sideMenuItem" id = "sideMenuItem4">
                test4
            </div>
            <div className = "sideMenuItem" id = "sideMenuItem5">
                test5
            </div>
        </div>

        </div>
      )}
    </div>
  );
};

export default Navbar;
