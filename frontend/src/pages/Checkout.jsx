import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTip } from "../store/cartSlice";
import CartSummary from "../components/CartSummary";
import OrderType from "../components/OrderType";
import Time from "../components/Time";
import Coupon from "../components/Coupon";
import LocationMap from "../components/LocationMap";
import Payment from "../components/Payment";
import TipSelector from "../components/TipSelector";
import Total from "../components/Total";
import Fees from "../components/Fees";

function Checkout() {
    const dispatch = useDispatch()

    const cartItems = useSelector((state) => state.cart.itemList)
    const tip = useSelector((state) => state.cart.tip)

    const [orderType, setOrderType] = useState("pickup")
    const [appliedCoupon, setAppliedCoupon] = useState(null)
    const [deliveryAddress, setDeliveryAddress] = useState("")

    // use reducer function - outputs a single value - to find subtotal
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.totalPrice,
        0
    )

    // discount calculation - support both coupons
    let discount = 0

    if (appliedCoupon?.type === "percentage") {
        discount = subtotal * appliedCoupon.value
    }

    if (appliedCoupon?.type === "fixed") {
        discount = Math.min(appliedCoupon.value, subtotal) // prevent discount from exceeding the subtotal
    }

    // subtract both coupons in one place - stop subtotal from decreasing below 0
    const discountedSubtotal = Math.max(subtotal - discount, 0)
    
    const deliveryFee = orderType === "delivery" ? 3.99 : 0
    
    const taxRate = 0.08
    const tax = discountedSubtotal * taxRate
    const total = discountedSubtotal + tax + tip + deliveryFee

    return (
        <main className="checkout-page">

            <section className="checkout-components">
                <h1 className="checkout-title">Checkout</h1>
                <LocationMap orderType={orderType} deliveryAddress={deliveryAddress} setDeliveryAddress={setDeliveryAddress} />
                <OrderType orderType={orderType} setOrderType={setOrderType} />
                <Time orderType={orderType} />
                <CartSummary />
            </section>

            <aside className="checkout-sidebar">
                <Fees subtotal={subtotal} deliveryFee={deliveryFee} tax={tax} />

                <Coupon onApplyCoupon={setAppliedCoupon} appliedCoupon={appliedCoupon} discount={discount} />

                <TipSelector subtotal={subtotal} orderType={orderType} />

                <Total total={total} />
                <Payment /> 
            </aside>
        </main> 
    )
}

export default Checkout;