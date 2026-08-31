import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";

function CartItem({ item }) {
    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(addToCart(item))
    }

    const handleDecrease = () => {
        dispatch(removeFromCart(item.id))
    }

    return (
        <article className="cart-item">
            <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>${item.totalPrice.toFixed(2)} each</p>
            </div>

            <div className="cart-item-quantity">
                <button 
                    className="increase-quantity-btn"
                    onClick={handleIncrease}
                >
                    +
                </button>
                <span>{item.quantity}</span>
                <button 
                    className="decrease-quantity-btn"
                    onClick={handleDecrease}
                >
                    -
                </button>
            </div>

            <div className="cart-item-total">
                <p>${item.totalPrice.toFixed(2)}</p>
            </div>
        </article>
    )
}

export default CartItem;