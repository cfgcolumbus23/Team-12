import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Navbar from "./Navbar.jsx";
import './SignUp.css';

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

    return <div className="form" onSubmit={registerUser}>
      <Navbar />
        <div className="form-input-sections">
            <div className="preferredName">
                  <label className="form-label" for="preferredName">Preferred Name</label>
                  <input className="form-input" type="text" id="preferredName" placeholder="Preferred Name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
            </div>
            <div className="id">
                  <label className="form-label" for="id">Employee ID</label>
                  <input className="form-input" type="text" id="id" placeholder="Employee ID" value={data.employeeID} onChange={(e) => setData({...data, employeeID: e.target.value})}/>
            </div>
            <div className="password">
                <label className="form-label" for="password">Create Password</label>
                <input className="form-input" type="password" id="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
          </div>
            <div className="email">
                  <label className="form-label" for="email">Email</label>
                  <input className="form-input" type="email" id="email" placeholder="Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            </div>
            <div className="phoneNumber">
                  <label className="form-label" for="phoneNumber">Phone Number (Optional)</label>
                  <input className="form-input" type="text" id="phoneNumber" placeholder="Phone Number" value={data.phoneNumber} onChange={(e) => setData({...data, phoneNumber: e.target.value})}/>
            </div>
        </div>
        <div className="buttonDiv" onClick={registerUser}><button type="submit" className="button">Register</button></div>
    </div>
}

export default SignUp