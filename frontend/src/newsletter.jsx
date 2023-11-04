<<<<<<< HEAD
import Navbar from './components/Navbar.jsx'
import Popup from './components/Popup.jsx'
=======
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Popup from './components/Popup'
import './newsletter.css'
import Navbar from './components/Navbar'

>>>>>>> 7ee65c5ca71493120a45d16d509a7be7c4f9ac13
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
      <Navbar />
      <Popup/>
      <div className="admin-panel">
        <button onClick={() => setShowForm(true)}>Add New Post</button> {/* Button to show form */}
      </div>
      {showForm && <PostForm closeForm={() => setShowForm(false)} />} {/* Conditionally render the form */}
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post._id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {/* Placeholder for comments */}
            <div className="comments-section">
              {post.comments && post.comments.map((comment) => (
                <div key={comment._id} className="comment">
                  <p>{comment.text}</p>
                  {/* Add more comment details here */}
                </div>
              ))}
            </div>
            {/* More post details like buttons or additional info could be added here */}
          </div>
        ))}
      </div>
    </>
  );
}

export default newsletter;