import React, {useState} from 'react';
import './login.css';
import axios from "axios";
import Navbar from "./Navbar.jsx";
import {useNavigate} from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        employeeID: '',
        password: '',
    })    
    const loginUser = async (e) => {
        console.log("loggin in");
        e.preventDefault();
        const {employeeID, password} = data;
        try {
            const {data} = await axios.post('http://localhost:8000/api/login', {
                employeeID,
                password
            });

            if (data.error) {
                window.alert(data.error);
            } else {
                setData({});
                console.log('Navigating to /');
                navigate('/');
            }
        } catch (error) {
            window.alert(error);
        }
    }

    return <div className="form" onSubmit={loginUser}>
        <Navbar />
        <div className="form-input-sections">
            <div className="id">
                  <label className="form-label" for="id">Employee ID</label>
                  <input className="form-input" type="email" id="id" placeholder="Employee ID" value={data.employeeID} onChange={(e) => setData({...data, employeeID: e.target.value})}/>
            </div>
            <div className="password">
                <label className="form-label" for="password">Create Password</label>
                <input className="form-input" type="password" id="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
          </div>
        </div>
        <div className="buttonDiv"><button type="submit" className="button" onClick={loginUser}>Register</button></div>
    </div>
}

export default SignIn



// import React, { useState } from "react";
// import "./login.css";
// import Navbar from "./Navbar.jsx";
// import { Link } from "react-router-dom";

// const SignIn = () => {
//   const [employeeID, setEmployeeID] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const isNumeric = (str) => {
//     // Use a regular expression to check if the string contains only numeric characters
//     return /^\d+$/.test(str);
//   };

//   const handleSignIn = () => {
//     setIsFormValid(true);
    
//     if (employeeID.trim() === "") {
//       setError("Employee ID is required");
//       setIsFormValid(false);
//       return;
//     }

//     if (password.trim() === "") {
//       setError("Password is required");
//       setIsFormValid(false);
//       return;
//     }

//     if (!isNumeric(employeeID)) {
//       setError("Employee ID must contain only numbers");
//       setIsFormValid(false);
//       return;
//     }

//     // If validation passes, you can proceed with the sign-in logic here
//     // For now, we'll just show an alert with the input values
//     // alert(`Employee ID: ${employeeID}\nPassword: ${password}`);
//   };

//   return (
//     <div className="form">
//       <Navbar />
//       <div className="form-input-sections">
//         <h2> Login</h2>
//         <h3> Welcome Back!</h3>
//         <div className="id">
//           <label className="form-label" htmlFor="id">
//             Employee ID
//           </label>
//           <input
//             className="form-input"
//             type="text"
//             id="id"
//             placeholder="Employee ID"
//             value={employeeID}
//             onChange={(e) => setEmployeeID(e.target.value)}
//           />
//         </div>
//         <div className="password">
//           <label className="form-label" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="form-input"
//             type="password" // Use type="password" for password input
//             id="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//       </div>
//       {error && <div className="error-message">{error}</div>}
//       <div className="buttonDiv">
//         <Link to="/profile">
//           <button type="button" className="button" onClick={handleSignIn}>
//             Sign In
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
