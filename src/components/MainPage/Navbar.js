import React from 'react'
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from 'react-redux';

function Navbar({onShowClick,handleUser,setHandleUser}) {
  const { quantity } = useSelector((store) => store.cart);
  console.log(useSelector((store) => store.cart));
  console.log(handleUser,"inNavbar handleuser")

  const handleLogout = ()=>{
    setHandleUser(null)
    console.log(handleUser,"logout buton")
  }
  

  return (
    <>
       <nav className="navbar">
          {handleUser !== null && handleUser !== "" && handleUser!==undefined ? (
            <>
              <div className="leftSide">
              <RxHamburgerMenu onClick={onShowClick}/>
              <NavLink className="myButton" to="/userHome">Home</NavLink>
              </div>
              <div className="rightside">
                <p>{quantity}</p>
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