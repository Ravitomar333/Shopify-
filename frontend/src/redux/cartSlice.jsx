import { createSlice } from '@reduxjs/toolkit';

const getSavedCartItems = () => {
  const savedCartItems = localStorage.getItem('cartItems');
  if (!savedCartItems) return [];

  try {
    const parsedCartItems = JSON.parse(savedCartItems);
    return Array.isArray(parsedCartItems) ? parsedCartItems : [];
  } catch (error) {
    console.error('Invalid saved cart data:', error);
    localStorage.removeItem('cartItems');
    return [];
  }
};

const initialState = {
  cartItems: getSavedCartItems(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.productId === item.productId);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.productId === existItem.productId ? item : x
        );
      } else {
        state.cartItems.push(item);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.productId !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cartItems');
    }
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;