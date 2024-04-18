import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Product from './Product';
function ShoppingCart() {
  //const [cartItems,setCartItems]=useState([])
  //const addToCart = (product) => {
  //  setCartItems([...cartItems, product]);
  //};
  return (
    
    <><div style={{display:"flex", justifyContent:"space-between"}}>


     <Accordion style={{width:"50vw",height:"80vh",margin:"2rem 2rem"}} defaultActiveKey="0">

      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        


        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>

          <Card style={{ width: '30vw' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                   Some quick example text to build on the card title and make up the
                   bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <div style={{width:"20vw",height:"60vh",backgroundColor:"blue",marginRight:"3rem",marginTop:"2rem"}}>

    </div>
    </div>
    </>
  )
}

export default ShoppingCart