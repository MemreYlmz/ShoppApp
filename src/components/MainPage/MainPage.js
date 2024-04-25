import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from '../Categories/Categories';
import Slider from './Slider';

function MainPage({products}) {
  
  return ( 
    <div>
     <Slider />
     <Categories products={products}/>
   </div>
  
  )
}

export default MainPage