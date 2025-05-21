import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/images/logonew.png';

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <footer className="container">
      <div className="image-wrapper" type="logo-footer">
        <Link to="/"><img src={logo} alt="Réhahn Logo" /></Link>
      </div>
      <nav className="list-footer">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/artist" className={pathname === '/artist' ? 'active' : ''}>ARTIST</Link>
          </li>
          <li className="nav-item">
            <Link to="/product" className={pathname === '/product' ? 'active' : ''}>PRODUCT</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>CONTACT</Link>
          </li>
        </ul>
        <ul className="footer-content-right">
          <li>COPYRIGHTS © {new Date().getFullYear()} REHAHN PHOTOGRAPHY</li>
          <li>
            <p>EN</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer; 