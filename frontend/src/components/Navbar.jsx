import React from "react";
import "./Navbar.css";
import { Link, useNavigate   } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
    const navigate = useNavigate(); // Initialize the useHistory hook
    const [menuOpen,setMenuOpen] = useState(false);
    function menuClicked(){
        setMenuOpen(!menuOpen)
    }
    function handleMenuItemClick(path) {
        navigate(path); // Use history.push to navigate to the specified path
        setMenuOpen(false); // Close the menu after navigating
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
            <div className = "sideMenuItem" id = "sideMenuItem1" onClick = {()=>handleMenuItemClick("/")}>
                Home
            </div>
            <div className = "sideMenuItem" id = "sideMenuItem2" onClick = {()=>handleMenuItemClick("/")}>
                Newsletter
            </div>
            <div className = "sideMenuItem" id = "sideMenuItem3" onClick = {()=>handleMenuItemClick("/")}>
                Courses
            </div>
            <div className = "sideMenuItem" id = "sideMenuItem5" onClick = {()=>handleMenuItemClick("/messages")}>
                Messages
            </div>
            <div className = "sideMenuItem" id = "sideMenuItem4"onClick = {()=>handleMenuItemClick("/feedback")}>
                Feedback
            </div>
        </div>

        </div>
      )}
    </div>
  );
};

export default Navbar;
