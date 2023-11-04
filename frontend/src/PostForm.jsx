import React, { useState } from 'react';
import './PostForm.css'; // Make sure the path is correct

function PostForm({ closeForm }) {
  // State variables to manage the form fields
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      // Send a POST request to the API endpoint
      const response = await fetch('http://localhost:8000/api/post', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      // Close the form and refresh posts
      closeForm();
      // Here you would add logic to refresh the posts list if needed

      const newPost = await response.json();
      console.log('Success:', newPost); // Log the new post data
    } catch (error) {
      console.error('Error:', error); //Log any errors
    }
  };

  return (
    <div className="post-form-modal">
      <div className="post-form-container">
        <form onSubmit={handleSubmit} className="post-form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="post-form-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            required
          />
          
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="post-form-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            required
          />
          
          <label htmlFor="imageUpload">Upload Image</label>
          <input
            type="file"
            id="imageUpload"
            className="post-form-image"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
          />
          
          <button type="submit" className="post-form-submit">Submit Post</button>
          <button type="button" onClick={closeForm} className="post-form-cancel">Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;