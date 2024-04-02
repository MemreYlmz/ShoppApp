import React from 'react'
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import LayoutNav from '../LayoutNav';
import SideBar from './SideBar';



function Navbar({onShowClick}) {

  return (
    <>
      <nav  className="navbar">
        <div className="leftSide">
          <RxHamburgerMenu  onClick={onShowClick}/>
          <NavLink  className="myButton" to="/" >Home</NavLink>
        </div>
        <div className="rightside">
          <NavLink to="/shoppingCart">Shopping Cart</NavLink>
          <NavLink to="/signIn">SignIn</NavLink>
          <NavLink to="/signUp">SignUp</NavLink>
        </div>

      </nav>
    
    </>
  )
}

export default Navbar