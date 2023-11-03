import React, { useState } from "react";
import "./feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    preferredName: "",
    id: "",
    email: "",
    comments: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); //  copy w/ value updated
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents refresh
  };

  return (
    <div className="form">
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
            required
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
            name="id"
            value={formData.id}
            onChange={handleInput}
            placeholder="Employee ID"
            required
          />
        </div>
        <div className="email">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            placeholder="Email"
            required
          />
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
