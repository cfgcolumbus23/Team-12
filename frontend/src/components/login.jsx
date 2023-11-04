import React, { useState } from "react";
import "./login.css";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [employeeID, setEmployeeID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const isNumeric = (str) => /^\d+$/.test(str);

  const handleEmployeeIDChange = (e) => {
    const value = e.target.value;
    setEmployeeID(value);

    if (isNumeric(value) && value.trim() !== '' && password.trim() !== '') {
      setIsFormValid(true);
      setError('');
    } else {
      setIsFormValid(false);
      setError('Employee ID must contain only numbers and both fields are required');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (isNumeric(employeeID) && employeeID.trim() !== '' && value.trim() !== '') {
      setIsFormValid(true);
      setError('');
    } else {
      setIsFormValid(false);
      setError('Employee ID must contain only numbers and both fields are required');
    }
  };

  const handleSignIn = () => {
    if (isFormValid) {
      // Perform the sign-in logic here
      alert(`Employee ID: ${employeeID}\nPassword: ${password}`);
    } else {
      setError('Please fill in both fields and ensure that the Employee ID contains only numbers.');
    }
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
