// PostForm.js

import React, { useState } from 'react';

function PostForm({ closeForm }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      // Close the form and refresh posts
      closeForm();
      // Add logic to refresh the posts list here if needed

      const newPost = await response.json();
      console.log('Success:', newPost);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="post-form-modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />
        <button type="submit">Submit Post</button>
        <button type="button" onClick={closeForm}>Cancel</button>
      </form>
    </div>
  );
}

export default PostForm;
