import React from 'react'

const Contact = () => {
  const contacts = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      color: '#333333',
      textColor: 'white',
      icon: '🐱'
    },
    {
      name: 'LinkedIn', 
      url: 'https://linkedin.com',
      color: '#0077b5',
      textColor: 'white',
      icon: '💼'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/994709034041',
      color: '#25D366',
      textColor: 'white',
      icon: '💚'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sixi.ibrahimli',
      color: '#E4405F', 
      textColor: 'white',
      icon: '📷'
    },
   
  ]

  return (
    <div className="home-section">
      <div className="container">
        <h1 className="gradient-text" style={{
          fontSize: '3rem', 
          textAlign: 'center', 
          marginBottom: '30px'
        }}>
          Contact Me
        </h1>
        
        <p className="description">
          Get in touch with me using the buttons below!
        </p>

        <div className="button-group" style={{marginBottom: '2rem'}}>
          {contacts.map((contact, index) => (
            <a 
              key={index}
              href={contact.url}
              style={{
                backgroundColor: contact.color,
                color: contact.textColor,
                padding: '12px 32px',
                borderRadius: '8px',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all 0.3s',
                display: 'inline-block',
                border: 'none'
              }}
              onMouseOver={(e) => {
                e.target.style.opacity = '0.8';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateY(0)';
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.icon} {contact.name}
            </a>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          color: '#94a3b8',
          marginTop: '3rem',
          background: 'rgba(30, 41, 59, 0.5)',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '400px',
          margin: '3rem auto 0 auto'
        }}>
          <p style={{marginBottom: '1rem', fontSize: '1.1rem'}}>
            sixiibrahimov217@gmail.com
          </p>
          <p style={{fontSize: '1.1rem'}}>
            +994 70 903 40 41
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
