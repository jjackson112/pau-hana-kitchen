import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { Dot, Utensils } from "lucide-react";

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
            </div>

            <div className="cart-summary-items">
                {cartItems.map((item) => (
                    <div className="cart-summary-item" key={item.id}>
                        <div>
                            <p>{item.name}</p>
                            <p>x {item.quantity}</p>
                        </div>
                        <p>${item.totalPrice.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CartSummary;