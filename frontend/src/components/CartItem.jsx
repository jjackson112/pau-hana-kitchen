import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { Plus, Minus, Trash2 } from "lucide-react";

function CartItem({ item }) {
    const dispatch = useDispatch()

    const handleDecrease = () => {
        dispatch(removeFromCart(item.id))
    }

    const handleIncrease = () => {
        dispatch(addToCart(item))
    }

    const handleDelete = () => {
        dispatch(deleteFromCart(item.id))
    }

    return (
        <article className="total-cart">
            <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>${item.totalPrice.toFixed(2)}</p>
            </div>

            <div className="cart-item-quantity">
                <button 
                    className="decrease-quantity-btn"
                    onClick={handleDecrease}
                    aria-label={`Decrease quantity of ${item.name}`}
                >
                    <Minus size={14} />
                </button>
                <span>{item.quantity}</span>
                <button 
                    className="increase-quantity-btn"
                    onClick={handleIncrease}
                    aria-label={`Increase quantity of ${item.name}`}
                >
                    <Plus size={14} />
                </button>
            </div>
            <div className="delete-item-div">
                <button
                    className="delete-item-btn"
                    onClick={handleDelete}
                    aria-label={`Delete ${item.name} from cart`}
                >
                    <Trash2 size={18} />
                </button>
            </div>
        </article>
    )
}

export default CartItem;