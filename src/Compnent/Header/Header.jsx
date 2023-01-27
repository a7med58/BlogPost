import React from 'react'

export default function Header() {
  return (
    <header className='continer'>
      <nav className='navbar'>
      <h1>Blog Post</h1>
         <div className='Links'>
         <a href='/'>Home</a>
         <a href='/create-post' className='btn'>Create</a>

         </div>
      
      </nav>

    </header>
  )
}
