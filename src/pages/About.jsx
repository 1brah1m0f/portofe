import React from 'react'

const About = () => {
  return (
    <div style={{padding: '100px 20px 50px', background: '#0f172a', minHeight: '100vh'}}>
      <div className="container">
        <h1 className="gradient-text" style={{fontSize: '3rem', textAlign: 'center', marginBottom: '50px'}}>
          About Me
        </h1>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center'}}>
          <div style={{background: '#1e293b', padding: '30px', borderRadius: '15px', textAlign: 'center'}}>
            <div style={{
              width: '150px', 
              height: '150px', 
              background: '#334155', 
              borderRadius: '50%', 
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{color: '#94a3b8'}}>Profile Picture</span>
            </div>
          </div>
          
          <div style={{maxWidth: '600px'}}>
            <h2 style={{color: '#22d3ee', fontSize: '1.5rem', marginBottom: '15px'}}>
              Hi. i'm Shixi
            </h2>
            <p style={{color: '#cbd5e1', lineHeight: '1.6', marginBottom: '20px'}}>
             I'm 17 years old and I'm an IT student at Odlar Yurdu University.
I enjoy coding, artificial intelligence, and web development.
            </p>
            
            <div style={{
              background: '#1e293b', 
              padding: '15px', 
              borderRadius: '8px',
              borderLeft: '4px solid #22d3ee'
            }}>
              <p style={{fontWeight: 'bold', color: 'white'}}>Odlar Yurdu University</p>
              <p style={{color: '#94a3b8'}}>IT Studend • 2025 - now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About