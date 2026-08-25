// useSelector hook lets React read data from the global Redux store state
import { useSelector } from 'react-redux';

function Cart() {
    const cartItems = useSelector((state) => state.cart.itemList)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
}

export default Cart;