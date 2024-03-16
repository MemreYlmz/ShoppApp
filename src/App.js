import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import MainPage from './components/MainPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ShoppingCart from './components/ShoppingCart';

import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import "./components/Navbar.css"





function App() {
  

  const[showNav , setShowNav] = useState("false")

  return (

    <div className='mainPage'>
   

    <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/shoppingCart' element={<ShoppingCart/>} />
      </Routes>
    </div>
  
    )
}

export default App;
