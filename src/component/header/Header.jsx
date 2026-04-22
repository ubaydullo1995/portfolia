import React from 'react'
import { Link } from 'react-router-dom'
import '../header/header.css'
 
const Header = () => {
  return (
    <div className='header'>
      <Link  to='/' className="logo">Portfoliya</Link>
        <nav className="navbar">
          <Link to="/home">Kirish</Link>
          <Link to="/about">O'zim haqimda</Link>
          <Link to="/service">Xizmatim</Link>
          <Link to="/contact">Bog'lanish</Link>
        </nav>
    </div>
  )
}

export default Header
