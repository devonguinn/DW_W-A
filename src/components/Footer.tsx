import fbLogo from '/src/assets/images/fb.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DeWitt Wood</h3>
            <p>Custom Woodworking & Fine Craftsmanship</p>
            <div className="contact-info">
              <p>📧 info@dewittwood.com</p>
              <p>📱 (555) 123-4567</p>
              <p>📍 Hillsboro, Illinois</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Custom Furniture</li>
              <li>Kitchen Cabinetry</li>
              <li>Built-in Storage</li>
              <li>Restoration</li>
              <li>Decorative Pieces</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <a href="https://www.facebook.com/dewittwoodworkingandart" style={{ 
              textDecoration: 'none', 
              color: 'inherit',
              transition: 'transform 0.3s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h4>Follow Us on Facebook</h4>
            </a>
            <div className="social-links">
              <a 
                href="https://www.facebook.com/dewittwoodworkingandart" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                style={{
                  fontSize: '2rem',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img 
                  src={fbLogo} 
                  alt="Facebook"
                  style={{
                    width: '32px',
                    height: '32px', 
                    objectFit: 'contain'
                  }}
                />
              </a>
            </div>
            <p>See our latest projects and behind-the-scenes work</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Adam DeWitt. All rights reserved.</p>
          <p>Handcrafted with caffeine ☕️ </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
