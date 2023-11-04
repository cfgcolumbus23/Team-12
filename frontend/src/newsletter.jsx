import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Popup from './components/Popup'
import './newsletter.css'
import Navbar from './components/Navbar'

import React, { useState, useEffect } from 'react';
import './newsletter.css';
import PostForm from './PostForm.jsx';

function newsletter() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch('/api/posts');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setPosts(data);
  //     } catch (error) {
  //       console.error('There has been a problem with your fetch operation:', error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <>
      <Navbar/>
    </>
  )
}

export default newsletter;
