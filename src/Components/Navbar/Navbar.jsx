import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   const [mobileMenu, setMobileMenu] = useState(false);

   const toggleMenu = ()=> {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
   }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} duration={500}>Home</Link> </li>
        <li><Link to="program" smooth={true} duration={500} offset={-260}>Program</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-150}>About Us</Link></li>
        <li><Link to="campus" smooth={true} duration={500} offset={-260}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} duration={500} offset={-260}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-260} className="btn">Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
