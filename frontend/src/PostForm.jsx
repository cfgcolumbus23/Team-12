/*try {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/post', {
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
      setErrorMessage('Error: ' + error.message); // Set an error message
    }*/
    import './PostForm.css'; // Make sure the path is correct
    import React, { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showForm, setShowForm] = useState(false); // Start with the form hidden

  const addPost = () => {
    if (title && content) {
      const newPost = {
        title,
        content,
        image,
        comments: []
      };

      setPosts([...posts, newPost]);
      setTitle('');
      setContent('');
      setImage(null);
      setErrorMessage('');
    } else {
      setErrorMessage('Please fill out both title and content before submitting.');
    }
  };

  const cancelPost = () => {
    setTitle('');
    setContent('');
    setImage(null);
    setErrorMessage('');
    setShowForm(false); // Hide the form without adding the post
  };

  const submitComment = (postIndex) => {
    if (comment) {
      const updatedPosts = [...posts];
      updatedPosts[postIndex].comments.push(comment);
      setPosts(updatedPosts);
      setComment(''); // Clear the comment input
    }
  };

  return (
    <div className="admin-panel">
      <button onClick={() => setShowForm(true)}>Add New Post</button>
      
      {showForm && (
        <div className="post-form-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addPost();
            }}
            className="post-form"
          >
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
            <button type="button" className="post-form-cancel" onClick={cancelPost}>Cancel Post</button>
          </form>

          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}
        </div>
      )}

      <div className="post-list">
        {posts.map((post, postIndex) => (
          <div key={postIndex} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.image && (
              <img src={URL.createObjectURL(post.image)} alt="Post" />
            )}

            {/* Comment section for each post */}
            <div className="comment-section">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment"
              />
              <button className="comment-button" onClick={() => submitComment(postIndex)}>Submit Comment</button>
            </div>

            {/* Display comments for the post within the same post div */}
            <div className="comments">
              {post.comments.map((comment, commentIndex) => (
                <div key={commentIndex} className="comment">
                  {comment}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
