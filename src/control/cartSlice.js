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
          
          const existingItem = state.cartItems.find((item)=>item._id === newItem._id)
          if(existingItem){
            //sepette varsa
            state.cartItems = state.cartItems.map((item)=>item._id === newItem._id ? {...item,quantity:item.quantity+1}:item)
          }else{
            //sepete yeni eklendiğinde
            newItem.quantity = 1
            state.cartItems = [...state.cartItems,newItem]
          }

          state.quantity+=1
          state.total+=newItem.productPrice
       

          },
          removeItem: (state, action) => {
            const itemId = action.payload;
            const itemToRemove = state.cartItems.find(item => item._id === itemId);
        
            if (itemToRemove) {
                // Öğenin miktarını düşür
                state.quantity -= itemToRemove.quantity;
                // Öğenin toplam fiyatını düşür
                state.total -= itemToRemove.productPrice * itemToRemove.quantity;
        
                // Öğeyi sepetten kaldır
                state.cartItems = state.cartItems.filter(item => item._id !== itemId);
            }
        },

         increase:(state,action)=>{
            //const cartItem= state.cartItems.find((item)=> item.id === action.payload)
            //cartItem.quantity +=1
            // update state.carditems
            state.cartItems = state.cartItems.map((item)=>{

              if(item._id === action.payload){
                state.quantity+=1
                state.total+=item.productPrice
                
                return {...item,quantity:item.quantity+1}
              }
              return item
            })
           },
           decrease: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if (item._id === action.payload) {
                    if (item.quantity > 0) {
                        state.quantity -= 1;
                        state.total -= item.productPrice;
                        const updatedItem = { ...item, quantity: item.quantity - 1 };
                        if (updatedItem.quantity === 0) {
                            // If quantity becomes zero, remove the item from cart
                            state.cartItems = state.cartItems.filter(
                                (cartItem) => cartItem._id !== item._id
                            );
                        }
                        return updatedItem;
                    }
                }
                return item;
            });
        },
        
         }
    }
)


export const {clearCart,removeItem,increase,decrease,calculateTotal,addItemToCard} = cartSlice.actions

export default cartSlice.reducer;