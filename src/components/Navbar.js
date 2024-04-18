import React from 'react'
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";


function Navbar({onShowClick,handleUser,setHandleUser}) {

  console.log(handleUser)

  const handleLogout = ()=>{
    setHandleUser(null)
    console.log(handleUser,"logout buton")
  }
  

  return (
    <>
       <nav className="navbar">
          {handleUser !== null && handleUser !== "" ? (
            <>
              <div className="leftSide">
              <RxHamburgerMenu onClick={onShowClick}/>
              <NavLink className="myButton" to="/userHome">Home</NavLink>
              </div>
              <div className="rightside">
                <NavLink to="/shoppingCart">Shopping Cart</NavLink>
                <button onClick={handleLogout}>LogOut</button>
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