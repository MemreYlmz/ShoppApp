import React from 'react'
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import "./Navbar.css"
import SideBar from './SideBar';



function Navbar() {

  const [showSidebar,setShowSidebar] = useState(true)


  return (
    <>
     { showSidebar && 
  <div className={showSidebar ? 'sidebar-open' : 'sidebar-closed'}>
    <SideBar/>
  </div>
}
    <div className='content'>
      <nav  className="navbar">
        <NavLink onClick= {()=>{setShowSidebar(!showSidebar) 
          console.log(showSidebar)}} className="myButton" to="/" >Home</NavLink>

        <div className='rightside'>
          <NavLink to="/shoppingCart">Shopping Cart</NavLink>
          <NavLink to="/signIn">SignIn</NavLink>
          <NavLink to="/signUp">SignUp</NavLink>
        </div>

      </nav>
    </div>
    </>
    
    
  )
}

export default Navbar