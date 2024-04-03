import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
import Products from './Products';
import Categories from './Categories';
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