import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src="/media/logo.png" alt="LVA.studio" className="logo-img" />
          </Link>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <a href="/services" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <Link to="/team" className={`nav-link ${isActive('/team') ? 'active' : ''}`}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/certifications" className={`nav-link ${isActive('/certifications') ? 'active' : ''}`}>
              Certifications
            </Link>
          </li>
          <button onClick={toggleTheme} className="theme-toggle">
            <i className={`fas ${currentTheme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <li className="theme-indicator">
            <span>{currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}</span>
          </li>
        </ul>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
} 
