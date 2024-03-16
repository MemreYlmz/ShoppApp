import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import MainPage from './components/MainPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ShoppingCart from './components/ShoppingCart';

import { useState,useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import "./components/Navbar.css"
import SideBar from './components/SideBar';





function App() {

  


  

  const [showSidebar,setShowSidebar] = useState(true)
  const handleShow=()=>{
    setShowSidebar(!showSidebar)
    console.log(showSidebar)
  }


  return (

    <div className='mainPage'>
    { showSidebar && <  SideBar/>}
     
     
      <div className='content'>
    <Navbar onShowClick={handleShow}/>
    
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/shoppingCart' element={<ShoppingCart/>} />
      </Routes>
      </div>
    </div>
  
    )
}

export default App;
