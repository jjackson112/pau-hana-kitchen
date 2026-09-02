// useSelector hook lets React read data from the global Redux store state
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import CartItem from "../components/CartItem";

function Cart() {
    const cartItems = useSelector((state) => state.cart.itemList)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    console.log("CART ITEMS", cartItems)

    return (
        <aside className="cart-page">
            <h1 className="cart-title">Your Cart</h1>

            <div className="cart-items-list">
                <h3>Total Items: {totalQuantity}</h3>
                <Link to="/menu" className="more-menu-items-btn">Add more items</Link>

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
        </aside>
    )
}

export default Cart;