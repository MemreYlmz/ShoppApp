import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useSelector,useDispatch } from 'react-redux';
import BuyProduct from './BuyProduct';
import "../styles/ShoppingCard.css"

function ShoppingCart() {
  //const [cartItems,setCartItems]=useState([])
  //const addToCart = (product) => {
  //  setCartItems([...cartItems, product]);
  //};
  const dispatch = useDispatch()
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  console.log(cartItems,"adasdasdas")
  return (
    
    <><div className='shopping-card-firstDiv'>


     <Accordion className='accordion-class'  defaultActiveKey="0">

      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        <div>
            {cartItems.map((item) => {
              return <BuyProduct key={item.id} {...item} />;
            })}
          </div>

        </Accordion.Body>
      </Accordion.Item>


     
    </Accordion>
    <div className='summary-card'>
    <h2>Summary</h2>
      <ul className='summary-ul'>
            {cartItems.map((item) => (
              <li className='summary-li' key={item._id}>
                <p>{item.productName} - ₺{item.productPrice.toFixed(cartItems.length)} - ({item.quantity})</p>
              </li>
            ))}
          </ul>
          <hr></hr>
          <p>Total: ₺{total.toFixed(cartItems.length)}</p>
    </div>
    </div>
    </>
  )
}

export default ShoppingCart