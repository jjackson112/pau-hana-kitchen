import { useSelector, useDispatch } from "react-redux";
import { Minus, Plus, Dot, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import {
    addToCart,
    removeFromCart,
    deleteFromCart
    } from "../store/cartSlice";

function CartSummary() {
    const dispatch = useDispatch()

    const cartItems = useSelector((state) => state.cart.itemList)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    return (
        <section className="cart-summary">
            <div className="cart-summary-header">
                <Utensils aria-hidden="true"/>
                <h3>Pau Hana Kitchen</h3>
                <Dot aria-hidden="true" />
                <p>{totalQuantity} {totalQuantity === 1 ? "item" : "items"}</p> 
                <Link
                    to="/menu"
                    className="add-more-items-btn"
                >
                    Add more items
                </Link>
            </div>

            <div className="cart-summary-items">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map((item) => (
                        <div className="cart-summary-item" key={item.id}>
                            <p className="summary-item-name">
                                {item.name}
                            </p>
                    
                            <p className="summary-item-price">
                                ${item.totalPrice.toFixed(2)}
                            </p>
                    
                            <div className="summary-quantity-controls">
                                <button
                                    type="button"
                                    aria-label={`Decrease quantity of ${item.name}`}
                                    onClick={() =>
                                        dispatch(removeFromCart(item.id))
                                    }
                                >
                                    <Minus size={16} aria-hidden="true" />
                                </button>
                                
                                <span>{item.quantity}</span>
                                
                                <button
                                    type="button"
                                    aria-label={`Increase quantity of ${item.name}`}
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    <Plus size={16} aria-hidden="true" />
                                </button>
                            </div>
                                
                            <button
                                type="button"
                                className="summary-remove-btn"
                                aria-label={`Remove ${item.name} from cart`}
                                onClick={() =>
                                    dispatch(deleteFromCart(item.id))
                                }
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>
        </section>
    )
}

export default CartSummary;