import { useSelector } from "react-redux";
import { Dot, Utensils } from "lucide-react";

function CartSummary() {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    return (
        <section className="cart-summary">
            <Utensils />
            <h3>Pau Hana Kitchen</h3>
            <Dot aria-hidden="true" />
            <p>{totalQuantity} {totalQuantity === 1 ? "item" : "items"}</p> 
        </section>
    )
}

export default CartSummary;