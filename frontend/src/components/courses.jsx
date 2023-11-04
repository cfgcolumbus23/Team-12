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
            "basic":"Classes can be completed remotely at home or by utilizing the Upskilling Lab for computer and Wi-Fi access at Goodwill Columbus\n\nCredentials can be completed in 3 to 6 months per credential depending on the student’s skill set",
            "digital":"Computer Basics, Internet Safety, Use of Smartphones and Tablets\n\nIn person classes are available Monday thru Friday at Columbus Metropolitan Library branches throughout central Ohio as well the Ohio Means Job Center. Please click here to see class availability.",
            "information":"CompTIA A+ or Google IT Support Professional\n\nFacebook Social Media Marketing Professional Certification\n\nCompTIA A+ classes are in-person for 12 weeks/day class, 15 weeks/night class\n\nGoogle IT Support Professional, Network +, Security +, and Certified Ethical Hacker will be completed remotely and can be completed within 3 to 6 six months depending on the student’s skill set\n\nFacebook Social Media classes will be remote and can be completed in 4 to 5 months depending on the student’s skill set",
            "healthcare":"State Tested Nursing Assistant (STNA)\n\nMedical Billing and Coding (potential for remote work), Medical Front Office Administrative Assistant, Behavior Technician\n\nSTNA – Classes are in-person at The Reeb Avenue Center on the south side of Columbus and can be completed in 5 weeks\n\nMedical Billing & Coding, Medical Front Office Adm. Asst., Behavior Technician – Classes can be completed remotely in 24 weeks or less depending on the student’s skill set\n\n",
            "hospitality":"Customer Service Gold, Rise Up Retail, Front Desk Attendant, Guest Room Attendant, Kitchen Cook, Food Server\n\nClasses can be completed remotely in as little 1 week per credential",
            "logistics":"Commercial Driver Training (Roads2Work) with Capital Transportation Academy\n\nFree training for a Class A CDL\n\n Graduates are eligible for roles offering $60K/year + benefits\n\nMust pass a physical and drug screen\n\nTraining will be completed in 5-to-6 weeks"
        }
        const contentLines = categoryContentHash[category].split('\n')
        const contentWithBreaks = contentLines.map((line, index) => <div key={index}>{line} <br/></div>)

        if(popUpOpen){
            // shows translucent background with popup showing information on clicked category
            return(
                <>
                <div id = "popUpCompleteButton" onClick = {() => setPopUpOpen(false)}>Mark Complete</div>
                <div id = "popUpBackground" onClick = {() => setPopUpOpen(false)}>
                    <div id = "popUpMain">
                        <div id = "popUpHeader">{categoryTitleHash[popUpCategory]}</div>
                        <div id = "popUpContent">{contentWithBreaks}</div>
                    </div>
                </div>
                </>
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
        {popUpOpen ? showCategoryPopUp(popUpCategory):<></>}
        <Navbar/>
    </div>
  )
}

export default Training