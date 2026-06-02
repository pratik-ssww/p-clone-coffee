import { Link, Outlet } from 'react-router-dom';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import './Layout.css';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="layout">
      <div className="watermark-text">TOP</div>
      <nav className="navbar">
        <div className="container nav-container">
          <Link to="/" className="brand">
            <Coffee className="brand-icon text-primary" size={32} />
            <span className="brand-text">Brew<span className="text-primary">Haven</span></span>
          </Link>

          <div className="nav-links desktop-only">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/about" className="nav-link">About</Link>
            <button className="btn btn-primary">Order Now</button>
          </div>

          <button 
            className="mobile-menu-btn mobile-only"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu glass-panel animate-fade-in">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            <button className="btn btn-primary w-100">Order Now</button>
          </div>
        )}
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer glass-panel">
        <div className="container footer-container">
          <div className="footer-brand">
            <div className="brand">
              <Coffee className="brand-icon text-primary" size={24} />
              <span className="brand-text">BrewHaven</span>
            </div>
            <p className="text-muted mt-2">Crafting the perfect cup since 2026. Premium coffee beans sourced globally.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Links</h4>
              <Link to="/menu">Our Menu</Link>
              <Link to="/about">About Us</Link>
              <Link to="/locations">Locations</Link>
            </div>
            <div className="link-group">
              <h4>Contact</h4>
              <p className="text-muted">hello@brewhaven.com</p>
              <p className="text-muted">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom border-top">
          <p className="text-muted text-center">© 2026 BrewHaven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
