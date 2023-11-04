import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate(); // Initialize the useHistory hook
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function menuClicked() {
    setMenuOpen(!menuOpen);
  }
  function handleMenuItemClick(path) {
    navigate(path); // Use history.push to navigate to the specified path
    setMenuOpen(false); // Close the menu after navigating
  }
  function renderEitherLoginRegisterOrProfilePicture() {
    // render conditionally
    // if user is logged in, show profile picture, if not show login/register clickables
    if (!isLoggedIn) {
      console.log("NOT LOGGED IN");
      return (
        <div id="loginRegisterContainer">
          <Link to="/signin" className="loginRegisterItem">
            Login
          </Link>
          <Link to="/signup" className="loginRegisterItem">
            Register
          </Link>
          <Link to="/profile" className="loginRegisterItem">
            Profile
          </Link>
        </div>
      );
    } else {
      return <img id="navBarProfilePicture" src="user.svg" />;
    }
  }
  function handleProfileMenuOpen() {
    // menu below profile picture
  }
  return (
    <div>
      <div id="navBarMain">
        <img id="navBarLogo" src="logo.webp" alt="Logo" />
        <img
          id="navBarMenuIcon"
          src="three.svg"
          alt="Menu Icon"
          onClick={() => menuClicked()} //this fcn toggles the menuOpen state
        />

        {renderEitherLoginRegisterOrProfilePicture()}
      </div>
      {menuOpen && (
        <div id="sideBarOpen" className={menuOpen ? 'open' 
      
      : 'closed'}>
          <img
            id="navBarMenuIcon"
            src="three.svg"
            alt="Menu Icon"
            onClick={() => menuClicked()}
          />
          <div id="sideMenuItemContainers">
            <div
              className="sideMenuItem"
              id="sideMenuItem1"
              onClick={() => handleMenuItemClick("/")}
            >
              <h1 className="sideMenuItemText">Home</h1>
              <img className="icon" src="home.svg" />
            </div>
            <div
              className="sideMenuItem"
              id="sideMenuItem2"
              onClick={() => handleMenuItemClick("/")}
            >
              <h1 className="sideMenuItemText">Newsletter</h1>
              <img className="icon" src="news.svg" />
            </div>
            <div className = "sideMenuItem" id = "sideMenuItem3" onClick = {()=>handleMenuItemClick("/training")}>
                <h1 className = "sideMenuItemText">Training</h1>
                <img className = "icon" src="board.svg"/>
            </div>
            <div
              className="sideMenuItem"
              id="sideMenuItem5"
              onClick={() => handleMenuItemClick("/messages")}
            >
              <h1 className="sideMenuItemText">Messages</h1>
              <img className="icon" src="messages.svg" />
            </div>
            <div
              className="sideMenuItem"
              id="sideMenuItem4"
              onClick={() => handleMenuItemClick("/feedback")}
            >
              <h1 className="sideMenuItemText">Feedback</h1>
              <img className="icon" src="notepad.svg" />
            </div>
            <div
              className="sideMenuItem"
              id="sideMenuItem5"
              onClick={() => handleMenuItemClick("/leaderboard")}
            >
              <h1 className="sideMenuItemText">Leaderboard</h1>
              <img className="icon" src="leaderboard.svg" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
