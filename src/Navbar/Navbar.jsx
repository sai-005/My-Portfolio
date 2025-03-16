import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import day_night from '../assets/day-night.png'
import {Link} from 'react-router-dom'
import menu_open from "../assets/menu-open.png"
import menu_close from "../assets/menu-close.png"
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo"/>

      <img className='menu_open' onClick={toggleMenu} src={menu_open} alt="" />
     
      <img  className="menu_close" onClick={toggleMenu}  src={menu_close} alt="" />
     
      <ul className={`nav-menu ${isOpen ? "show" : ""}`} >
        <Link className='link_nav' to='/' onClick={() => setIsOpen(false)}><li>Home</li></Link>
        <Link className='link_nav' to='/about-me' onClick={() => setIsOpen(false)}> <li>About me</li></Link>
        <Link className='link_nav' to='/project' onClick={() => setIsOpen(false)}><li>Projects</li></Link>
        <Link className='link_nav' to='/resume' onClick={() => setIsOpen(false)}><li>Resume</li></Link>
        <Link  className='link_nav'to='/contact' onClick={() => setIsOpen(false)}> <button>Contact</button></Link>   
      </ul>
    </div>
  )
}

export default Navbar
