import React from 'react';

const name = "Name";
const streak = 5; 

const Profile = () => {
  return <div>
    <h1>Hi {name}</h1>
    <h2>You have a {streak} day streak!</h2>
  </div>
};

export default Profile;