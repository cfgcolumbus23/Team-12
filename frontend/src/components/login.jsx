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

    // make form with text boxes for users to enter their ID and password
    return <div className="form" onSubmit={loginUser}>
        <Navbar />
        <div className="form-input-sections">
            <h2>Login</h2>
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