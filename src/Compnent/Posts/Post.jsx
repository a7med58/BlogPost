import React from "react";

function Post({ post, handleDelete }) {
  return (
    <div className="post">
      <img src={post.img} alt=""></img>
      <h1>{post.title}</h1>
      <div className="post-author">BY :{post.by ? post.by : "None"}</div>
      <h3>{post.description}</h3>
      <button className="btn" onClick={() => handleDelete(post.id)}>
        Delete
      </button>
    </div>
  );
}

export default Post;
