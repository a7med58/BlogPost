import React from 'react'
import Posts from '../Posts/Posts'

export default function Home() {
  const title = 'Home';
  return (
    <div>
      <h1 style={{color:'red', backgroundColor:''}}>{title}</h1>
      <Posts />
    </div>
  );
}
