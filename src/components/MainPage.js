import React from 'react'

function MainPage({products}) {
  
  return (
    <div>
      <div>
        {/* products dizisini kullanarak istediğiniz işlemleri yapabilirsiniz */}
        {products.map((product, index) => (
          <div key={index}>
            <p>Marka: {product.marka}</p>
            <p>Fiyat: {product.fiyat}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainPage