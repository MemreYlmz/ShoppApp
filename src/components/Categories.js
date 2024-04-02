import React from 'react'
import Category from './Category';

function Categories({products}) {

  const categorizedProducts = {};

  // ürün kategori eşleme
  products.forEach(product => {
    const { productCategory } = product;
    if (!categorizedProducts[productCategory]) {
      categorizedProducts[productCategory] = [];
      console.log(categorizedProducts)
    }
    categorizedProducts[productCategory].push(product);
  });

  return (
    <div >
      {Object.keys(categorizedProducts).map(category => (
        <Category key={category} category={category} products={categorizedProducts[category]} />
      ))}
    </div>
  );
}

export default Categories