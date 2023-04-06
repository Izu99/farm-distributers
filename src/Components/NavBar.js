import React from 'react';
import '../Styles/header.css';
import logo from '../images/navbar-logo.svg';
// import icon1 from '../images/header-icon1.png';
// import icon2 from '../images/header-icon2.png';

function Header() {
  return (
    <nav className="header">
      <a href="#"><img src={logo} alt="Logo" className="header-logo" /></a>
      <div className="header-icons">
        <a href="#"><i class="fa-solid fa-bell"></i></a>
        <a href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
      </div>
    </nav>
  );
}

export default Header;
