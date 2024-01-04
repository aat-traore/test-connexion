import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router

const Navbar = () => {
  // State to handle the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Your Logo
        </Link>

        <div className={isMobileMenuOpen ? "navbar-menu mobile-menu-open" : "navbar-menu"}>
          <ul className="navbar-items">
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">
                login
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/register" className="navbar-link">
                inscrire
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="navbar-link">
                Services
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;