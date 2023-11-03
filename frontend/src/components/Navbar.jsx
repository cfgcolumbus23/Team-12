import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div id="navBarMain">
        <img src = "three.svg" id = "navBarMenuIcon"/>

        <img id = "navBarLogo" src = "logo.webp"/>
        <Link to="/messages">MESSAGES</Link>
    </div>
  )
}



export default Navbar