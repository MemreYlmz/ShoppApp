import React from 'react'
import Navbar from './components/MainPage/Navbar'
import SideBar from './components/MainPage/SideBar'
import { useState } from 'react'

function LayoutNav({children,handleUser,setHandleUser}) {

    const [showSidebar,setShowSidebar] = useState(true)
    const handleShow=()=>{
    setShowSidebar(!showSidebar)
  }
  return (
    <>
    <div className="mainPage">
    { showSidebar && <  SideBar  />}
    <div className="content">
    <Navbar handleUser={handleUser} setHandleUser={setHandleUser} onShowClick={handleShow}/>
    {children}
    </div>
    </div>
    </>
  )
}

export default LayoutNav