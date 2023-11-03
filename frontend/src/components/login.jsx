import React, {useState} from 'react';
import './login.css';

const SignUp = () => {
    return <div className="form">
        <div className="form-input-sections">
            {/* sections: preferred name, email, phone number (optional), employee id,  */}
            <div className="preferredName">
                  <label className="form-label" for="preferredName">Preferred Name</label>
                  <input className="form-input" type="text" id="preferredName" placeholder="Preferred Name"/>
            </div>
            <div className="id">
                  <label className="form-label" for="id">Employee ID</label>
                  <input className="form-input" type="text" id="id" placeholder="Employee ID"/>
            </div>
            <div className="email">
                  <label className="form-label" for="email">Email</label>
                  <input className="form-input" type="text" id="email" placeholder="Email"/>
            </div>
            <div className="phoneNumber">
                  <label className="form-label" for="phoneNumber">Phone Number (Optional)</label>
                  <input className="form-input" type="text" id="phoneNumber" placeholder="Phone Number"/>
            </div>
        </div>
        <button type="submit" class="button">Register</button>
    </div>
}

export default RegistrationForm;