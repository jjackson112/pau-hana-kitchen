// add-to-cart state, totals, quantities, removing items from cart
// use Redux Toolkit - share state across all parts of the app

// cart slice
import { createSlice } from '@reduxjs/toolkit';

// define initial state and the slice with an addToCart reducer
const cartSlice = createSlice({
    name: 'cart',
    initialState: { itemList: [], totalQuantity: 0 },

    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemList.find((item) => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.itemList.push({ ...newItem, quantity: 1, totalPrice: newItem.price });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;