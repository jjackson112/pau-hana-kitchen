// useSelector hook lets React read data from the global Redux store state
import { useSelector } from 'react-redux';
import CartItem from "../components/CartItem";

function Cart() {
    const cartItems = useSelector((state) => state.cart.itemList)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    console.log("CART ITEMS", cartItems)

    return (
        <main className="cart-page">
            <h1 className="cart-title">Your Cart</h1>
            <p><strong>Total Items: {totalQuantity}</strong></p>

            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) :
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem 
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
            }   
        </main>
    )
}

export default Cart;