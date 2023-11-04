import "./Popup.css"
import React from "react";

const Popup = () => {
    function handleClick() {
        console.log("Clicked")
        document.querySelector(".popup").style.display = "none";
    }
    return (
        <div className="popup">
            <button onClick={handleClick} id="close">&times;</button>
            <h1>Digital Literacy Courses</h1>
            <p>Digital literacy is crucial for enabling individuals to thrive in the digital age by providing them with the skills to use technology efficiently and critically evaluate online information.</p>
            <a href="https://www.goodwillcolumbus.org/services/for-individuals/job-training/" target="_blank">Courses</a>
        </div>
    )
}

export default Popup;