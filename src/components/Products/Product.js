import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addItemToCard,increase } from '../../control/cartSlice';
import {useDispatch } from 'react-redux';


function Product({product }) {

  const dispatch = useDispatch()
  
  const handleClickProduct = () => {
    dispatch(addItemToCard(product));
    dispatch(increase(product.id))
    
  };

  return (
    <div>

      <Card style={{ width: '15rem', marginLeft:"1.5rem" }}>
      <Card.Img  style={{ maxHeight: '126.11px', maxWidth: '158px', objectFit: 'contain'}} variant="top" src={product.productImg} />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button onClick={handleClickProduct} style={{padding:"0.5rem"}} variant="primary"  >Purchase</Button>
      </Card.Body>

    </Card>

    </div>
  )
}

export default Product



      
    