import React from 'react'

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

        <div className="button-group">
          <a href="https://github.com" className="btn btn-primary">
            GitHub
          </a>
          
          <a href="https://linkedin.com" className="btn btn-outline">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home