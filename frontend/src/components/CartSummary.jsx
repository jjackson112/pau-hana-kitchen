import { useSelector } from "react-redux";
import { Dot, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

function CartSummary() {
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