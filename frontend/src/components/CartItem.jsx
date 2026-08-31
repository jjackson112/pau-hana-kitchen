import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { Plus, Minus } from "lucide-react";

function CartItem({ item }) {
    const dispatch = useDispatch()

    const handleDecrease = () => {
        dispatch(removeFromCart(item.id))
    }

    const handleIncrease = () => {
        dispatch(addToCart(item))
    }

    return (
        <article className="total-cart-item">
            <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>${item.totalPrice.toFixed(2)}</p>
            </div>

            <div className="cart-item-quantity">
                <button 
                    className="decrease-quantity-btn"
                    onClick={handleDecrease}
                >
                    <Minus size={10} />
                </button>
                <span>{item.quantity}</span>
                <button 
                    className="increase-quantity-btn"
                    onClick={handleIncrease}
                >
                    <Plus size={10} />
                </button>
            </div>
        </article>
    )
}

export default CartItem;