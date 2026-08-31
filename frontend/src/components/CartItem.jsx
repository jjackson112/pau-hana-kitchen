import { useDispatch } from "react-redux";

function CartItem({ item }) {
    const dispatch = useDispatch()


    return (
        <article className="cart-item">
            <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </div>

            <div className="cart-item-quantity">
                <span>Quantity: {item.quantity}</span>
            </div>

            <div className="cart-item-total">
                ${item.totalPrice.toFixed(2)}
            </div>
        </article>
    )
}

export default CartItem;