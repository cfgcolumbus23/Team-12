import React from 'react'
import Navbar from './Navbar'
import "./courses.css"
const Training = () => {
  return (
    <div id = "coursesContainer">
        <div id = "coursesContentContainer">
            <div className = "courseCategory" id = "firstCourseCategory">Basic Work Readiness</div>
            <div className = "courseCategory" id = "secondCourseCategory">Digital Literacy</div>
            <div className = "courseCategory" id = "thirdCourseCategory">Information Technology</div>
            <div className = "courseCategory" id = "fourthCourseCategory">Healthcare</div>
            <div className = "courseCategory" id = "fourthCourseCategory">Hospitality</div>
            <div className = "courseCategory" id = "fourthCourseCategory">Logistics</div>
        </div>
        <Navbar/>
    </div>
  )
}

export default Training