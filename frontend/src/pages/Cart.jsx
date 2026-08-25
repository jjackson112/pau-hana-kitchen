// useSelector hook lets React read data from the global Redux store state
import { useSelector } from 'react-redux';

function Cart() {
    const cartItems = useSelector((state) => state.cart.itemList)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    return (
        <main className="cart-page">
            <h1 className="cart-title">Your Cart</h1>
            <p>Total Items: {totalQuantity}</p>

            {cartItems.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Quantity: {item.quantity}</p>
                    <p>${item.price.toFixed(2)}</p>
                </div>
            ))}
        </main>
    )
}

export default Cart;