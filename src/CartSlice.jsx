import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Each item: { name, quantity, cost, ... }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(i => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem(state, action) {
      // action.payload is expected to be just the item name (a string)
      const itemName = action.payload;
      state.items = state.items.filter(i => i.name !== itemName);
    },
    updateQuantity(state, action) {
      const { name, quantity } = action.payload;
      const item = state.items.find(i => i.name === name);
      if (item) item.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;