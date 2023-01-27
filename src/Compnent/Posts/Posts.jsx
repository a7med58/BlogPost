import React, { useEffect, useState } from "react";
import Post from "./Post";
function Posts() {
  const [posts, setPost] = useState(null);
  const [isloadin, setIsloadin] = useState(false);
    const [errorMsg, setError] = useState(null);

  useEffect(() => {
    setIsloadin(true);
    fetch("http://localhost:4000/posts")
      .then((res) => {
        if (!res.ok) {
          throw Error ("Not Found");
        }
          return res.json();
        
      })
      .then((data) => {
        setPost(data);
        setIsloadin(false);
      })
      .catch((err) => {
        setIsloadin(false);
        setError(err.message);
      });
  }, []);
  const handleDelete = (id) => {
    let curPosts = [...posts];
    let newPosts = curPosts.filter((post) => post.id !== id);
    setPost(newPosts);
  };
  return (
    <section className="posts">
      {posts &&
        posts.map((post) => (
          <Post key={post.id} post={post} handleDelete={handleDelete} />
        ))}
      {isloadin && <div> Loadin .... </div>}
      {!isloadin && !posts && <div className="not-foud">No Post Found</div>}
      {errorMsg && <div className="error">{errorMsg}</div>}
    </section>
  );
}

export default Posts;
