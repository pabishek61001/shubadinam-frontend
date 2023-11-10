import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { useRef } from 'react';
import HeaderComponent from '../components/header';

const MenuBar = () => {
  const [isOpen, setOpen] = useState(false);



  return (
    <div className={`menu-bar-container ${isOpen ? 'open' : ''}`}>
      <Hamburger toggled={isOpen} toggle={setOpen}>

      </Hamburger>

      {isOpen && (
        <>
          <NavLink to="/home" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>Home</NavLink>
          <NavLink to="/about-us" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>About</NavLink>
          <NavLink to="/faq" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>FAQ</NavLink>
          
        </>
      )}
    </div>
  );
};

export default MenuBar;
