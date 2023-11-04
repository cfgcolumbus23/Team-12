import React, { useState } from "react";
import "./login.css";
import Navbar from "./Navbar.jsx";

const SignIn = () => {
  const [employeeID, setEmployeeID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isNumeric = (str) => {
    // Use a regular expression to check if the string contains only numeric characters
    return /^\d+$/.test(str);
  };

  const handleSignIn = () => {
    if (employeeID.trim() === "") {
      setError("Employee ID is required");
      return;
    }

    if (password.trim() === "") {
      setError("Password is required");
      return;
    }

    if (!isNumeric(employeeID)) {
      setError("Employee ID must contain only numbers");
      return;
    }

    // If validation passes, you can proceed with the sign-in logic here
    // For now, we'll just show an alert with the input values
    alert(`Employee ID: ${employeeID}\nPassword: ${password}`);
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
        <button type="button" className="button" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
