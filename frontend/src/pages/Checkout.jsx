import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTip } from "../store/cartSlice";
import CartSummary from "../components/CartSummary";
import OrderType from "../components/OrderType";
import Time from "../components/Time";
import Coupon from "../components/Coupon";

function Checkout() {

    const dispatch = useDispatch()

    const cartItems = useSelector((state) => state.cart.itemList)
    
    const tip = useSelector((state) => state.cart.tip)
    const tipOption = useSelector((state) => state.cart.tipOption)

    const [orderType, setOrderType] = useState("pickup")
    const [appliedCoupon, setAppliedCoupon] = useState(null)

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

    // tip options - const tipOptions = [0.10, 0.15, 0.20]
    const tip10 = subtotal * 0.10
    const tip15 = subtotal * 0.15
    const tip20 = subtotal * 0.20
    
    const taxRate = 0.08
    const tax = discountedSubtotal * taxRate
    const total = discountedSubtotal + tax + tip

    return (
        <div className="checkout-page">
            <OrderType orderType={orderType} setOrderType={setOrderType} />
            <Time orderType={orderType} />
            <CartSummary />
            <Coupon onApplyCoupon={setAppliedCoupon} />

            <section className="fees">
                <div className="subtotal">
                    <h4>Subtotal </h4>
                    <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="delivery-fees">
                    <h4>Delivery Fees</h4>
                </div>
                <div className="tax">
                    <h4>Tax</h4>
                    <p>${tax.toFixed(2)}</p>
                </div>
                <div className="tip">
                    <h4 >Tip</h4>
                </div>
                <div className="tip-options">
                    <button
                        className={`tip-btn ${tipOption === "10" ? "active" : ""}`}
                        onClick={() => dispatch(setTip({ amount: tip10, option: "10"}))}
                    >
                        10% (${tip10.toFixed(2)})
                    </button>
                    <button
                        className={`tip-btn ${tipOption === "15" ? "active" : ""}`}
                        onClick={() => dispatch(setTip( {amount: tip15, option: "15"}))}
                    >
                        15% (${tip15.toFixed(2)})
                    </button>
                    <button
                        className={`tip-btn ${tipOption === "20" ? "active" : ""}`}
                        onClick={() => dispatch(setTip({ amount: tip20, option: "20"}))}
                    >
                        20% (${tip20.toFixed(2)})
                    </button>
                    <input 
                        className={`custom-tip-field ${tipOption === "custom" ? "active" : ""}`}
                        type="number"
                        min="0"
                        step="0.01"
                        value={tipOption === "custom" ? tip : ""}
                        placeholder="Custom tip"
                        onChange={(e) => {
                            const value = e.target.value
                            dispatch(setTip({
                                amount: value === "" ? 0 : Number(value),
                                option: value === "" ? null : "custom"
                            }))
                        }}
                    />
                </div>

                {appliedCoupon && (
                    <div className="discount">
                        <h4>Discount({appliedCoupon.code})</h4>
                        <p>- ${discount.toFixed(2)}</p>
                    </div>
                )}

                <div className="total">
                    <h4>Total</h4>
                    <p>${total.toFixed(2)}</p>
                </div>
            </section>
        </div> 
    )
}

export default Checkout;