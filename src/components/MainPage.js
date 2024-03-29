import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
import Products from './Products';

function MainPage({products}) {
  
  return ( 
    <div style={{height:"90vh"}}>
       <Carousel style={{width:"80%",display:"block",margin:"auto"}}>
      <Carousel.Item >
      <img
              style={{width:"100%",height:"25vh"}}
              src="https://www.webtekno.com/images/editor/default/0003/68/5b2ae4da1c0cd20cb5d441da32f8165720a07e90.jpeg"
              alt="Third slide"
            />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img
              style={{width:"100%",height:"25vh"}}
              src="https://www.webtekno.com/images/editor/default/0003/68/5b2ae4da1c0cd20cb5d441da32f8165720a07e90.jpeg"
              alt="Third slide"
            />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* 
    <div>
        <div> 
          {products.map((product) => (
            <div key={product._id}>
              <p>Marka: {product.productName}</p>
              <p>Fiyat: {product.productPrice}</p>
            </div>
          ))}
        </div>
      </div>   
    */}
     <Products products={products}  />

   </div>
  
  )
}

export default MainPage