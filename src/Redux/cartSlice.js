import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the item exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add a new item if it doesn't exist
      }
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
