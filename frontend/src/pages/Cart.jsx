// useSelector hook lets React read data from the global Redux store state
import { useSelector } from 'react-redux';
import CartItem from "../components/CartItem";

function Cart() {
    const cartItems = useSelector((state) => state.cart.itemList)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    // use reducer function - outputs a single value - to find subtotal
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.totalPrice,
        0
    )

    // tip options
    const tipOptions = [0.10, 0.15, 0.20]
    const tip10 = subtotal * 0.10
    const tip15 = subtotal * 0.15
    const tip20 = subtotal * 0.20

    const taxRate = 0.08
    const tax = subtotal * taxRate
    const total = subtotal + tax

    console.log("CART ITEMS", cartItems)

    return (
        <main className="cart-page">
            <h1 className="cart-title">Your Cart</h1>

            <div className="cart-items-list">
                <h3>Total Items: {totalQuantity}</h3>
                {cartItems.length === 0 ? (
                    <p>Cart is empty</p>
                ) :
                <div className="all-cart-items">
                    {cartItems.map((item) => (
                        <CartItem 
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
                }
            </div>  

            <div className="fees">
                <div className="subtotal">
                    <h4>Subtotal </h4>
                    <p>{subtotal.toFixed(2)}</p>
                </div>
                <div className="delivery-fees">
                    <h4>Delivery Fees</h4>
                </div>
                <div className="tax">
                    <h4>Tax</h4>
                    <p>{tax.toFixed(2)}</p>
                </div>
                <div className="tip">
                    <h4 >Tip</h4>
                </div>
                <div className="tip-options">
                </div>
                <div className="total">
                    <h4>Total</h4>
                    <p>{total.toFixed(2)}</p>
                </div>
            </div> 
        </main>
    )
}

export default Cart;