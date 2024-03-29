import React from 'react'
import Product from './Product'

function Products({products}) {
  return (
  <div className='ProductsDiv' >
  {products.map((product)=>{
    return <Product product={product}   />
  })}
    </div>
  )
}

export default Products