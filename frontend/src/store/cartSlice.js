// add-to-cart state, totals, quantities, removing items from cart
// use Redux Toolkit - share state across all parts of the app

// cart slice
import { createSlice } from '@reduxjs/toolkit';

// guaranteed structure
const defaultState = {
    itemList: [],
    totalQuantity: 0,
    isOpen: false,
    tip: 0,
    tipOption: null
}

const savedCart = localStorage.getItem("cart")

// combine defaultState with saved cart or just use defaultState
const initialState = savedCart
    ? {
        ...defaultState,
        ...JSON.parse(savedCart)
    }
    : defaultState

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

        emptyCart(state) {
            state.itemList = []
        },

        setTip(state, action) {
            state.tip = Number(action.payload.amount)
            state.tipOption = action.payload.option
        },

        openCartSidebar(state) {
            state.isOpen = true
        },

        closeCartSidebar(state) {
            state.isOpen = false
        }

    }
})

export const { addToCart, removeFromCart, deleteFromCart, emptyCart, setTip, openCartSidebar, closeCartSidebar } = cartSlice.actions;
export default cartSlice.reducer;