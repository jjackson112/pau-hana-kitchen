// useSelector hook lets React read data from the global Redux store state
import { useSelector } from 'react-redux';
import CartItem from "../components/CartItem";

function Cart() {
    const cartItems = useSelector((state) => state.cart.itemList)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    
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
                <h4 className="subtotal">Subtotal</h4>
                <h4 className="delivery-fees">Delivery Fees</h4>
                <h4 className="tax">Tax</h4>
                <h4 className="tip">Tip</h4>
                <p className="tip-options"></p>
                <h4 className="total">Total</h4>
            </div> 
        </main>
    )
}

export default Cart;