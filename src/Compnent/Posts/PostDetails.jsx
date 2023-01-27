import React from "react";

function PostDetails() {
  return (
    <article className="container post-details ">
      <div className="post-details-title">
        <h1>AI Articals </h1>
        <button className="dtn btn-danger">Delete</button>
      </div>
      <img
        src="https://www.jair.org/public/journals/1/homepageImage_en_US.jpg"
        alt="AI "
        className="post-details-img"
      ></img>
      <p className="post-details-body">AI In Egypt Comminty</p>
    </article>
  );
}

export default PostDetails;
