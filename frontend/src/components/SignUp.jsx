import React, { useState } from "react";
import "./SignUp.css";
import Navbar from "./Navbar.jsx";
import { Link } from 'react-router-dom';

const SignUp = () => {
      const navigate = useNavigate();
      const [data, setData] = useState({
            name: '',
            email: '',
            password: '',
            employeeID: '',
            phoneNumber: '',
      })
      
      const registerUser = async (e) => {
            console.log("regestering")
            e.preventDefault();

            const {name, email, password, employeeID, phoneNumber} = data;
            try {
              const {data} = await axios.post('http://localhost:8000/api/register', {
                name, email, password, employeeID, phoneNumber
              });
              if (data.error) {
                window.alert(data.error)
              } else {
                setData({});
                window.alert('Registration Successful, Welcome!');
                navigate('/sign');
              }
            } catch (error) {
              console.log(error);
            }
      }

  const handleRegister = () => {
    // Basic input validation logic
    if (preferredName.trim() === "") {
      setError("Preferred Name is required");
      return;
    }

    if (employeeID.trim() === "") {
      setError("Employee ID is required");
      return;
    }

    if (!isNumeric(employeeID)) {
      setError("Employee ID must contain only numbers");
      return;
    }

    if (password.trim() === "") {
      setError("Password is required");
      return;
    }

    if (email.trim() === "" || !isEmailValid(email)) {
      setError("Email is required and must be in a valid format");
      return;
    }

    // If validation passes, you can proceed with the registration logic here
    // For now, we'll just show an alert with the input values
    alert(
      `Preferred Name: ${preferredName}\nEmployee ID: ${employeeID}\nPassword: ${password}\nEmail: ${email}\nPhone Number: ${phoneNumber}`
    );
  };

  return (
    <div className="form">
      <Navbar /> 
      <div className="form-input-sections">
        <Navbar />
        <h2> Register </h2>
        <div className="preferredName">
          <label className="form-label" htmlFor="preferredName">
            Preferred Name
          </label>
          <input
            className="form-input"
            type="text"
            id="preferredName"
            placeholder="Preferred Name"
            value={preferredName}
            onChange={(e) => setPreferredName(e.target.value)}
          />
        </div>
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
            Create Password
          </label>
          <input
            className="form-input"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="email">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="phoneNumber">
          <label className="form-label" htmlFor="phoneNumber">
            Phone Number (Optional)
          </label>
          <input
            className="form-input"
            type="text"
            id="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="buttonDiv">
        <Link to="/profile">
            <button type="button" className="button" onClick={handleRegister}>
            Register
            </button>
        </Link>
      </div>
    </div>
}

export default SignUp