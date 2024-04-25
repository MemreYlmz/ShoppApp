import React from 'react'
import Products from '../Products/Products'
import Slider from "react-slick";
import "../styles/aa.css"

function Category({products}) {
  const categoryNames = [...new Set(products.map(product => product.productCategory))];

  // Her bir kategori adı için bir kategori başlığı oluştur
  const categories = categoryNames.map((category, index) => (
    <h1 key={index} className="headerCategory">{category}</h1>
  ));
  
  return (
    <>
<div className="contentCategory">
{categories}
  <div className="containerCategory">
      <Products products={products}/>
  </div>
</div>
    {/*<div style={{ display: 'flex', flexWrap: 'wrap' }}>
      
          <Products products={products}/>
        
    </div> */}
  </>
  )
}

export default Category