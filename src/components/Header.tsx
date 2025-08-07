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
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
