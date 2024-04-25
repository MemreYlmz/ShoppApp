import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartItems: [],
  quantity: 0,
  //db de quantity eklemen gerek
  total: 0,
};


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems = []
          },
        
        addItemToCard:(state,action)=>{
           
            const newItem = action.payload
           // add newitem to cartitems
           return {
            ...state,
            cartItems: [...state.cartItems, newItem], // Yeni ürünü ekleyerek yeni bir dizi oluşturuyoruz
          };

          },
          removeItem:(state,action)=>{
            console.log(action.payload)
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item)=>item._id!==itemId)
          },

        calculateTotal:(state)=>{
          let total =0
          let quantity = 0
          state.cartItems.forEach((item)=>{
            total +=item.quantity * item.price
            quantity+=item.quantity
          })
          state.quantity=quantity
          state.total=total
         },
         increase:(state,action)=>{
            const cartItem= state.cartItems.find((item)=> item.id === action.payload)
            cartItem.quantity +=1
           },
        decrease:(state,action)=>{
          const cartItem= state.cartItems.find((item)=> item.id === action.payload)
          cartItem.quantity -=1
         }
    }
})


export const {clearCart,removeItem,increase,decrease,calculateTotal,addItemToCard} = cartSlice.actions

export default cartSlice.reducer;