import React from 'react'
import Navbar from './Navbar'
import "./courses.css"
const Training = () => {
  return (
    <div id = "coursesContainer">
        <div id = "coursesContentContainer">
            <div className = "courseCategory" id = "firstCourseCategory"></div>
            <div className = "courseCategory" id = "secondCourseCategory"></div>
            <div className = "courseCategory" id = "thirdCourseCategory"></div>
            <div className = "courseCategory" id = "fourthCourseCategory"></div>
        </div>
        <Navbar/>
    </div>
  )
}

export default Training