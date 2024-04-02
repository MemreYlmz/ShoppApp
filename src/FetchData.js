import { useEffect, useState } from 'react';
import { getUsers, getProducts } from './api';

export function FetchData() {
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
  return{users,products}

  
}

  
