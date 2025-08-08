import fbLogo from '/src/assets/images/fb.png'

interface HeaderProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>DeWitt Woodworking and Art</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <button 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => onNavigate('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'gallery' ? 'active' : ''}
                onClick={() => onNavigate('gallery')}
              >
                Gallery
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => onNavigate('about')}
              >
                About Me
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => onNavigate('contact')}
              >
                Contact
              </button>
            </li>
            <li>
              <a 
                href="https://www.facebook.com/dewittwoodworkingandart" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                style={{
                  display: 'inline-block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img 
                  src={fbLogo} 
                  alt="Facebook"
                  style={{
                    width: '28px',
                    height: '28px', 
                    objectFit: 'contain'
                  }}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
