import React from 'react'
import Navbar from './Navbar'
import "./courses.css"
import { useState } from 'react'
const Training = () => {
    const [popUpOpen,setPopUpOpen] = useState(false)
    function handleCategoryClick(category){
        // hashes that help display the proper data
        let categoryTitleHash = {
            "basic":"Basic Work Readiness",
            "digital":"Digital Literacy",
            "information":"Information Technology",
            "healthcare":"Healthcare",
            "hospitality":"Hospitality",
            "logistics":"Logistics"
        }
        let categoryContentHash = {
            "basic":"Basic content",
            "digital":"Digital content",
            "information":"information content",
            "healthcare":"healthcare content",
            "hospitality":"hospitality content",
            "logistics":"logistics content"
        }
        if(popUpOpen){
            // shows translucent background with popup showing information on clicked category
            return(
                <div id = "popUpBackground" onClick = {() => setPopUpOpen(false)}>
                    <div id = "popUpMain">
                        <div id = "popUpHeader">HEADER</div>
                    </div>
                </div>
            )
        }
    }
  return (
    <div id = "coursesContainer">
        <div id = "coursesContentContainer">
            <div className = "courseCategory" id = "firstCourseCategory" onClick={()=>setPopUpOpen(true)}>Basic Work Readiness</div>
            <div className = "courseCategory" id = "secondCourseCategory">Digital Literacy</div>
            <div className = "courseCategory" id = "thirdCourseCategory">Information Technology</div>
            <div className = "courseCategory" id = "fourthCourseCategory">Healthcare</div>
            <div className = "courseCategory" id = "fourthCourseCategory">Hospitality</div>
            <div className = "courseCategory" id = "fourthCourseCategory">Logistics</div>
        </div>
        {handleCategoryClick()}
        <Navbar/>
    </div>
  )
}

export default Training