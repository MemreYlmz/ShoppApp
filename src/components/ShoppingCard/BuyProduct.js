import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { removeItem,increase ,decrease} from '../../control/cartSlice';
import { useState } from 'react';
import "../styles/ShoppingCard.css"
function BuyProduct({ _id,productName,productPrice,productImg,quantity,productCategory }) {
    const dispatch = useDispatch()
    
  return (
    <> {quantity>0 ? <div className='buy-product-firstDiv' >
    <img className='buy-product-img'  src={productImg} alt="" />
    <div >
      <h5>{productName}</h5>
      <h5>{productPrice}TL</h5>
      <div>
        <button onClick={()=> dispatch(increase(_id))} >
          <BsChevronUp />
        </button>
        <p className="cartQuantity"></p>
        <button onClick={()=>dispatch(decrease(_id))} >
          <BsChevronDown />
        </button>
      </div>
      <button  onClick={()=>{dispatch(removeItem(_id))}}>Sil</button>
    </div>
  </div> : null}
    

    </>
  )
}

export default BuyProduct