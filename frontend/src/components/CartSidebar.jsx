// useSelector hook lets React read data from the global Redux store state
import { useDispatch, useSelector } from 'react-redux';
import { openCartSidebar, closeCartSidebar } from '../store/cartSlice';
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import CartItem from "../components/CartItem";

function Cart() {
    const dispatch = useDispatch()

    const cartItems = useSelector((state) => state.cart.itemList)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    const isOpen = useSelector((state) => state.cart.isOpen)

    console.log("CART ITEMS", cartItems)

    return (
        <aside className="cart-sidebar">
            <button
                className="close-sidebar-btn"
                onClick={() => dispatch(closeCartSidebar())}
                aria-label="Close cart"
            >
                <X size={20} />
            </button>

            <div className="cart-text">
                <h1 className="cart-title"> Cart</h1>
            </div>

            <div className="cart-items-list">
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

            <div className="other-cart-details">
                <h3>Total Items: {totalQuantity}</h3>
            </div>

            <div className="compliment-cart">
                
            </div>
        </aside>
    )
}

export default Cart;