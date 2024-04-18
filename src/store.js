import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './control/cartSlice';

export const store = configureStore({
    reducer: {
      cart: cartReducers,
    },
  });
  