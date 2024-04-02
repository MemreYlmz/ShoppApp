import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { useState } from 'react'

function LayoutNav({children}) {

    const [showSidebar,setShowSidebar] = useState(true)
    const handleShow=()=>{
    setShowSidebar(!showSidebar)
  }
  return (
    <>
    <div className="mainPage">
    { showSidebar && <  SideBar  />}
    <div className="content">
    <Navbar onShowClick={handleShow}/>
    {children}
    </div>
    </div>
    </>
  )
}

export default LayoutNav