import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useSelector,useDispatch } from 'react-redux';
import BuyProduct from './BuyProduct';
function ShoppingCart() {
  //const [cartItems,setCartItems]=useState([])
  //const addToCart = (product) => {
  //  setCartItems([...cartItems, product]);
  //};
  const dispatch = useDispatch()
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  return (
    
    <><div style={{display:"flex", justifyContent:"space-between" }}>


     <Accordion style={{width:"50vw",height:"80vh",margin:"2rem 2rem"}} defaultActiveKey="0">

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
    <div style={{width:"20vw",height:"60vh",backgroundColor:"blue",marginRight:"3rem",marginTop:"2rem"}}>

    </div>
    </div>
    </>
  )
}

export default ShoppingCart