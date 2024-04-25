import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addItemToCard,increase } from '../../control/cartSlice';
import {useDispatch } from 'react-redux';
import "../styles/Product.css"


function Product({product }) {

  const dispatch = useDispatch()
  
  const handleClickProduct = () => {
    dispatch(addItemToCard(product));
    dispatch(increase(product.id))
    
  };

  return (
    <div>

      <Card className='product-card'>
      <Card.Img className='product-card-img' variant="top" src={product.productImg} />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button onClick={handleClickProduct} className='product-btn' variant="primary"  >Purchase</Button>
      </Card.Body>

    </Card>

    </div>
  )
}

export default Product



      
    