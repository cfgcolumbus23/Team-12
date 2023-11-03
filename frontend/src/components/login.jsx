import React, {useState} from 'react';
import './login.css';

const SignIn = () => {
    return <div className="form">
        <div className="form-input-sections">
            <div className="id">
                  <label className="form-label" for="id">Employee ID</label>
                  <input className="form-input" type="text" id="id" placeholder="Employee ID"/>
            </div>
            <div className="password">
                  <label className="form-label" for="password">Password</label>
                  <input className="form-input" type="text" id="password" placeholder="Password"/>
            </div>
        </div>
        <div className="buttonDiv"><button type="submit" className="button">Sign In</button></div>
    </div>
}

export default SignIn