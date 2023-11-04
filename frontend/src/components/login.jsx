import React, { useState } from "react";
import "./login.css";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [employeeID, setEmployeeID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isNumeric = (str) => {
    //check if the string contains only numeric characters
    return /^\d+$/.test(str);
  };

  const handleSignIn = () => {
    //error control
    setIsFormValid(true);

    if (employeeID.trim() === "") {
      setError("Employee ID is required");
      setIsFormValid(false);
      return;
    }

    if (password.trim() === "") {
      setError("Password is required");
      setIsFormValid(false);
      return;
    }

    if (!isNumeric(employeeID)) {
      setError("Employee ID must contain only numbers");
      setIsFormValid(false);
      return;
    }

    // sign-in logic proceeds
  };

  return (
    <div className="form">
      <Navbar />
      <div className="form-input-sections">
        <h2> Login</h2>
        <h3> Welcome Back!</h3>
        <div className="id">
          <label className="form-label" htmlFor="id">
            Employee ID
          </label>
          <input
            className="form-input"
            type="text"
            id="id"
            placeholder="Employee ID"
            value={employeeID}
            onChange={(e) => setEmployeeID(e.target.value)}
          />
        </div>
        <div className="password">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-input"
            type="password" // Use type="password" for password input
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="buttonDiv">
        <Link to="/profile">
          <button type="button" className="button" onClick={handleSignIn}>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
