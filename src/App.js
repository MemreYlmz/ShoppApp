import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ShoppingCart from './components/ShoppingCart';
import { getUsers,getProducts, addUser } from './api'; 
import { useState,useEffect } from 'react';
import"./components/Navbar.css"
import { FetchData } from './FetchData';
import LayoutNav from './LayoutNav';
import LayoutWithoutNav from './LayoutWithoutNav';



function App() {

 const {users,products} = FetchData()
 const [userName,setUserName] = useState("")



  return (
    <>
      <Routes>

          <Route path='/' element={<LayoutNav > 
            <MainPage products={products} />
          </LayoutNav>} />

          <Route path='/userHome' element={<LayoutNav handleUser={userName} setHandleUser={setUserName}> 
            <MainPage products={products} />
          </LayoutNav>} />

          <Route path='/shoppingCart' element={<LayoutNav handleUser={userName} setHandleUser={setUserName}> 
            <ShoppingCart   />
          </LayoutNav>} />
          

          <Route path='/signIn' element={<LayoutWithoutNav> 
            <SignIn handleUser={setUserName} />
          </LayoutWithoutNav>} />

          <Route path='/signUp' element={<LayoutWithoutNav> 
            <SignUp />
          </LayoutWithoutNav>} />

        </Routes>
        </>
    )
}

export default App;
