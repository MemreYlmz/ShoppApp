import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ShoppingCart from './components/ShoppingCart';
import { getUsers,getProducts } from './api'; 
import { useState,useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import"./components/Navbar.css"
import SideBar from './components/SideBar';

function App() {
  const [users,setUsers] = useState([])
  const [products,setProducts] = useState([])
  // Get UserList
  useEffect(()=>{
    async function fetchUsers(){
      const personList = await getUsers()
      setUsers(personList)
    }
    fetchUsers()
  },[])
  // Get ProductList
  useEffect(()=>{
    async function fetchProducts(){
      const productList = await getProducts()
      setProducts(productList)
    }
    fetchProducts()
  },[])
  console.log(products)


  //console.log(users)  // neden 6 kere çalışıyor bu aq

  //DUMMY DATA
  const productss= [{marka:"Apple",fiyat:50000},{marka:"Samsung",fiyat:25000},{marka:"Xiaomi",fiyat:15000},{marka:"Oppo",fiyat:10000}]


  //SideBar Option
  const [showSidebar,setShowSidebar] = useState(true)
  const handleShow=()=>{
    setShowSidebar(!showSidebar)
  }

  return (
    <div className="mainPage">
      {/**  // TODO  :  add SideBar animasyon   */}
    { showSidebar && <  SideBar  />}

      <div className="content">
    <Navbar onShowClick={handleShow}/>
      <Routes>
        <Route path='/' element={<MainPage products={products} /> }/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/shoppingCart' element={<ShoppingCart/>} />
      </Routes>
      </div>
    </div>
    )
}

export default App;
