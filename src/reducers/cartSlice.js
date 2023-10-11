import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: []
  },
  reducers: {
    addToCart: (state, action) => {
        console.log("add to cart called", action.type);
        const product = action.payload;
        state.carts = [...state.carts, product]
    },
    removeFromCart: (state, action) => {
        console.log('remove called', action.payload);
        state.carts = state.carts.filter((c) => action.payload.id !== c.id)
    }
  }
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer