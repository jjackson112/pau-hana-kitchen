import { useSelector } from "../store/cartSlice";
import { Dot } from "lucide-react";

function CartSummary() {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    return (
        <section className="cart-summary">
            <h3>Pau Hana Kitchen</h3>
            <Dot />
            <h3>{totalQuantity} items</h3> 
        </section>
    )
}

export default CartSummary;