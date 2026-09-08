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

function Checkout() {
    const dispatch = useDispatch()

    const cartItems = useSelector((state) => state.cart.itemList)
    
    const tip = useSelector((state) => state.cart.tip)
    const tipOption = useSelector((state) => state.cart.tipOption)

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
        <div className="checkout-page">

            <section className="checkout-components">
                <h1 className="checkout-title">Checkout</h1>
                <LocationMap orderType={orderType} deliveryAddress={deliveryAddress} setDeliveryAddress={setDeliveryAddress} />
                <OrderType orderType={orderType} setOrderType={setOrderType} />
                <Time orderType={orderType} />
                <CartSummary />
            </section>

            <section className="fees-container">
                <div className="fee-row subtotal">
                    <h4>Subtotal </h4>
                    <p>${subtotal.toFixed(2)}</p>
                </div>

                <div className="fee-row delivery-fees">
                    <h4>Delivery Fees</h4>
                    <p>${deliveryFee.toFixed(2)}</p>
                </div>

                <div className="fee-row tax">
                    <h4>Tax</h4>
                    <p>${tax.toFixed(2)}</p>
                </div>

                <Coupon onApplyCoupon={setAppliedCoupon} />

                <TipSelector />

                {appliedCoupon && (
                    <div className="fee-row discount">
                        <h4>Discount ({appliedCoupon.code})</h4>
                        <p>- ${discount.toFixed(2)}</p>
                    </div>
                )}

                <Total />
            </section>

               <Payment /> 
        </div> 
    )
}

export default Checkout;