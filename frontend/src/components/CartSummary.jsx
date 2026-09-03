import { useSelector } from "react-redux";
import { Dot } from "lucide-react";

function CartSummary() {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    return (
        <section className="cart-summary">
            <h3>Pau Hana Kitchen</h3>
            <Dot aria-hidden="true" />
            <h3>{totalQuantity} items</h3> 
        </section>
    )
}

export default CartSummary;