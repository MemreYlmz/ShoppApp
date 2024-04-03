import React from 'react'
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import LayoutNav from '../LayoutNav';
import SideBar from './SideBar';



function Navbar({onShowClick,handleUser}) {
  console.log("insideNavbar handleUserName",handleUser)

  return (
    <>
      <nav  className="navbar">
        <div className="leftSide">
          <RxHamburgerMenu  onClick={onShowClick}/>
          <NavLink  className="myButton" to="/" >Home</NavLink>
        </div>
        <div className="rightside">
          <NavLink to="/shoppingCart">Shopping Cart</NavLink>
          {handleUser ? ( // Eğer kullanıcı giriş yaptıysa, kullanıcı adını göster
            <span>{handleUser}</span>
          ) : (
            <>
              <NavLink to="/signIn">SignIn</NavLink>
              <NavLink to="/signUp">SignUp</NavLink>
            </>
          )}
        </div>

      </nav>
    
    </>
  )
}

export default Navbar