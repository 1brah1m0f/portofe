import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-section">
      <div className="container">
        <h1 className="big-title">
          Hi, I'm <span className="gradient-text">Shixi</span> 👋
        </h1>
        
        <p className="subtitle">
          IT Student & Developer from Azerbaijan
        </p>
        
        <p className="description">
          Passionate about coding, AI, and creating innovative web solutions. 
          Currently studying IT at Odlar Yurdu University.
        </p>

        {/* CONTACT QUICK LINK */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'rgba(30, 41, 59, 0.3)',
          borderRadius: '12px',
          maxWidth: '500px',
          margin: '3rem auto 0 auto'
        }}>
          <p style={{
            color: '#94a3b8',
            marginBottom: '1rem',
            fontSize: '1.1rem'
          }}>
            For contact information and to get in touch:
          </p>
          <Link 
            to="/contact" 
            style={{
              color: '#22d3ee',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1.1rem',
              border: '1px solid #22d3ee',
              padding: '10px 20px',
              borderRadius: '6px',
              transition: 'all 0.3s',
              display: 'inline-block'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#22d3ee';
              e.target.style.color = '#0f172a';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#22d3ee';
            }}
          >
            View Contact Details →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
