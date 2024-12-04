import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
addItem: (state, action) => {
  const newItem  = action.payload;
  const { name, image, cost } = action.payload;
  const existingItem = state.items.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    newItem.quantity = 1;
    state.items.push({ name, image, cost, quantity: 1 });
  }
},
    removeItem: (state, action) => {
        const toBeRemoveItem  = action.payload;
        const existedItem = state.items.find(item => item.name == toBeRemoveItem.name);

        if(existedItem) {
            state.items = state.items.filter(item => item.name != toBeRemoveItem.name);
        }
    },
    updateQuantity; (state, action) => {
        const toBeUpdatedItem  = action.payload;
        const existedItem = state.items.find(item => item.name == toBeUpdatedItem.name);
       
        if(existedItem) {
            existedItem.quantity = toBeUpdatedItem.quantity;
    }  
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
