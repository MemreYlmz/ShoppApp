import React from 'react'
import Product from './Product'
import Slider from "react-slick";

function Products({products}) {

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
    
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id}>
        <Product product={product}/>
        </div>
      ))}
    </Slider>
   
   {/* 
    <div className='ProductsDiv' >
  {products.map((product)=>{
    return <Product product={product}   />
  })}
    </div>
  */} 
  </>
  )
}

export default Products