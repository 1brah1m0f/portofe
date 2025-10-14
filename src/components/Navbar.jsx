import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo">Şıxı</div>
        
        {/* Desktop Menu */}
        <div className="nav-links desktop-menu">
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

        {/* Hamburger Button - Mobile */}
        <button className="hamburger-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="mobile-nav-link" onClick={toggleMenu} style={{
            color: location.pathname === '/' ? '#22d3ee' : '#cbd5e1'
          }}>Home</Link>
          <Link to="/about" className="mobile-nav-link" onClick={toggleMenu} style={{
            color: location.pathname === '/about' ? '#22d3ee' : '#cbd5e1'
          }}>About</Link>
          <Link to="/projects" className="mobile-nav-link" onClick={toggleMenu} style={{
            color: location.pathname === '/projects' ? '#22d3ee' : '#cbd5e1'
          }}>Projects</Link>
          <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu} style={{
            color: location.pathname === '/contact' ? '#22d3ee' : '#cbd5e1'
          }}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
