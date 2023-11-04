import React, { useState } from "react";
import "./feedback.css";
import Navbar from "./components/Navbar.jsx";

const Feedback = () => {
  const [formData, setFormData] = useState({
    //expected input
    preferredName: "",
    id: "",
    email: "",
    comments: "",
  });
  const [errors, setErrors] = useState({
    //for invalid input
    preferredName: "",
    id: "",
    email: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    //check for valid input
    const rules = {
      preferredName: /^[A-Za-z\s]+$/,
      id: /^[0-9]+$/,
      email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]/,
    };
    const is_Valid = rules[name].test(value);
    setErrors({
      ...errors,
      [name]: is_Valid ? "" : "Please enter valid input",
    });

    if (is_Valid) {
      setFormData({ ...formData, [name]: value }); //  copy w/ value updated
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents refresh
  };

  return (
    <div class="form">
      <Navbar />
      <h2> Contact Us </h2>
      <h3> Include Name, ID, Email for personal concerns or requests </h3>
      <div className="form-input-sections">
        <div className="preferredName">
          <label className="form-label" htmlFor="preferredName">
            Preferred Name
          </label>
          <input
            className="form-input"
            type="text"
            id="preferredName"
            name="preferredName"
            value={formData.preferredName}
            onChange={handleInput}
            placeholder="Preferred Name"
          />
          <div className="error">{errors.preferredName}</div>
        </div>
        <div className="id">
          <label className="form-label" htmlFor="id">
            Employee ID
          </label>
          <input
            className="form-input"
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInput}
            placeholder="Employee ID"
          />
          <div className="error">{errors.id}</div>
        </div>
        <div className="email">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            placeholder="Email"
          />
          <div className="error">{errors.email}</div>
        </div>
        <div className="comment">
          <label className="form-label" htmlFor="Comments">
            How can we help you?
          </label>
          <input
            className="form-input"
            type="text"
            id="comment"
            name="comment"
            value={formData.Comments}
            onChange={handleInput}
            placeholder="Comments"
            required
          />
        </div>
      </div>
      <button type="submit" className="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Feedback;
