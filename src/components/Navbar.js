import React from 'react'
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import LayoutNav from '../LayoutNav';
import SideBar from './SideBar';



function Navbar({onShowClick,handleUser}) {

  return (
    <>
       <nav className="navbar">
  
    {handleUser ? (
      <>
        
        <div className="leftSide">
        <RxHamburgerMenu onClick={onShowClick}/>
        <NavLink className="myButton" to="/userHome">Home</NavLink>
        </div>
        <div className="rightside">
          <NavLink to="/shoppingCart">Shopping Cart</NavLink>
          <span>{handleUser}</span>
        </div>
        
      </>
    ) : (
      <>
          <div className="leftSide">
          <RxHamburgerMenu onClick={onShowClick}/>
        <NavLink className="myButton" to="/">Ana Sayfa</NavLink>
        </div>
        <div className="rightside">
          <NavLink to="/signIn">SignIn</NavLink>
          <NavLink to="/signUp">SignUp</NavLink>
        </div>
        
      </>
    )}
  
 
</nav>
    
    </>
  )
}

export default Navbar