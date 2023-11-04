import React from 'react'
import Navbar from './Navbar'
import "./courses.css"
import { useState } from 'react'
const Training = () => {
    const [popUpOpen,setPopUpOpen] = useState(false)
    const [popUpCategory,setPopUpCategory] = useState("basic")
    function showCategoryPopUp(category){
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
                        <div id = "popUpHeader">{categoryTitleHash[popUpCategory]}</div>
                    </div>
                </div>
            )
        }
    }
    function handleCategoryClick(category){
        setPopUpOpen(true)
        setPopUpCategory(category)
    }
  return (
    <div id = "coursesContainer">
        <div id = "coursesContentContainer">
            <div className = "courseCategory" id = "firstCourseCategory" onClick={()=>handleCategoryClick("basic")}>Basic Work Readiness</div>
            <div className = "courseCategory" id = "secondCourseCategory" onClick={()=>handleCategoryClick("digital")}>Digital Literacy</div>
            <div className = "courseCategory" id = "thirdCourseCategory" onClick={()=>handleCategoryClick("information")}>Information Technology</div>
            <div className = "courseCategory" id = "fourthCourseCategory" onClick={()=>handleCategoryClick("healthcare")}>Healthcare</div>
            <div className = "courseCategory" id = "fourthCourseCategory" onClick={()=>handleCategoryClick("hospitality")}>Hospitality</div>
            <div className = "courseCategory" id = "fourthCourseCategory" onClick={()=>handleCategoryClick("logistics")}>Logistics</div>
        </div>
        {showCategoryPopUp(popUpCategory)}
        <Navbar/>
    </div>
  )
}

export default Training