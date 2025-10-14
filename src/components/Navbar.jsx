import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo">1brah1m0f</div>
        
        <div className="nav-links">
          <Link to="/" className="nav-link" style={{
            color: location.pathname === '/' ? '#22d3ee' : '#cbd5e1'
          }}>Home</Link>
          <Link to="/about" className="nav-link" style={{
            color: location.pathname === '/about' ? '#22d3ee' : '#cbd5e1'
          }}>About</Link>
          <Link to="/projects" className="nav-link" style={{
            color: location.pathname === '/projects' ? '#22d3ee' : '#cbd5e1'
          }}>Projects</Link>
          <Link to="/contact" className="nav-link" style={{
            color: location.pathname === '/contact' ? '#22d3ee' : '#cbd5e1'
          }}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
