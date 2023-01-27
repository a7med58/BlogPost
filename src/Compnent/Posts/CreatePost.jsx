import React from 'react'

function CreatePost() {
  return (
    <section className="create-post">
      <h2>Add New Post</h2>
      <form>
        <label>Blog Title:</label>
        <input type="text" required></input>
        <label>Blog Image:</label>
        <input type="url" required></input>
        <label>Blog Body:</label>
        <textarea required rows="15"></textarea>
        <label>Blog Author:</label>
        <select>
          <option value="admin">Admin</option>
          <option value="eagle">Eagle</option>
        </select>
        <button className='btn' type='submit'>Add Blog</button>
      </form>
    </section>
  );
  }
export default CreatePost
