import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import menu_open from "../assets/menu-open.png";
import menu_close from "../assets/menu-close.png";
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <img onClick={() => navigate('/')} className="logo" src={logo} alt="logo" />

        <img className="menu_open" onClick={toggleMenu} src={menu_open} alt="Open menu" />
        <img className="menu_close" onClick={toggleMenu} src={menu_close} alt="Close menu" />

        <ul className={`nav-menu ${isOpen ? "show" : ""}`}>
          <NavLink activeClassName="active" className="link_nav" to="/" onClick={() => setIsOpen(false)}>
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName="active" className="link_nav" to="/about-me" onClick={() => setIsOpen(false)}>
            <li>About me</li>
          </NavLink>
          <NavLink activeClassName="active" className="link_nav" to="/project" onClick={() => setIsOpen(false)}>
            <li>Projects</li>
          </NavLink>
          <NavLink activeClassName="active" className="link_nav" to="/resume" onClick={() => setIsOpen(false)}>
            <li>Resume</li>
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            <button>Contact</button>
          </NavLink>
          <ThemeToggle />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
