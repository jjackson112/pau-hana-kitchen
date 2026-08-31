// add-to-cart state, totals, quantities, removing items from cart
// use Redux Toolkit - share state across all parts of the app

// cart slice
import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
    itemList: [],
    totalQuantity: 0,
    isOpen: false,
    tip: 0
}

const savedCart = localStorage.getItem("cart")

const initialState = savedCart
    ? JSON.parse(savedCart)
    : {
        itemList: [],
        totalQuantity: 0,
        isOpen: false,
        tip: 0
    }

// define initial state and the slice with an addToCart reducer
const cartSlice = createSlice({
    name: 'cart',
    initialState, // loading saved cart state

    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemList.find((item) => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.itemList.push({ ...newItem, quantity: 1, totalPrice: newItem.price });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price; // adding item
            }
        },

        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.itemList.find((item) => item.id === id);

            if (existingItem) {
                state.totalQuantity--;
                if (existingItem.quantity === 1) {
                    state.itemList = state.itemList.filter((item) => item.id !== id)
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice -= existingItem.price // removing item
                }
            }
        },

        deleteFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.itemList.find(
                (item) => item.id === id
            )

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity // current cart quantity - item quantity to be deleted

                state.itemList = state.itemList.filter(
                    (item) => item.id !== id
                )
            }
        },

        setTip(state, action) {
            state.tip = action.payload
        },

        openCartSidebar(state) {
            state.isOpen = true
        },

        closeCartSidebar(state) {
            state.isOpen = false
        }

    }
})

export const { addToCart, removeFromCart, deleteFromCart, setTip, openCartSidebar, closeCartSidebar } = cartSlice.actions;
export default cartSlice.reducer;