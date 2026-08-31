import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Redux state - save cart when it changes
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

store.subscribe(() => {
    const cartState = store.getState().cart

    localStorage.setItem(
        "cart",
        JSON.stringify(cartState)
    )
})

export default store;