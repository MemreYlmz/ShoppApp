import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { removeItem,increase ,decrease} from '../../control/cartSlice';
import { useState } from 'react';
import "../styles/ShoppingCard.css"
function BuyProduct({ _id,productName,productPrice,productImg,quantity,productCategory }) {
    const dispatch = useDispatch()
    
  return (
    <> {quantity>0 ?   <><div className='buy-product-firstDiv'>
    <img className='buy-product-img' src={productImg} alt="" />
    <div className="product-details">
        <div className="product-info">
            <h5>{productName}</h5>
            <h5>{productPrice}TL</h5>
        </div>
        <div className="quantity-controls">
            <div className="button-container">
                <BsChevronUp onClick={() => dispatch(increase(_id))} />
                <p className="cartQuantity">{quantity}</p>
                <BsChevronDown  onClick={() => dispatch(decrease(_id))} />
            </div>
            <button className='removebtn' onClick={() => { dispatch(removeItem(_id)) }}>Sil</button>
        </div>
    </div>
</div> <hr></hr></> : null}
    

    </>
  )
}

export default BuyProduct