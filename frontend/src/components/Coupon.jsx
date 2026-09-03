import { useState } from "react";

function Coupon({ onApplyCoupon }) {
    const [coupon, setCoupon] = useState("")
    const [message, setMessage] = useState("")

    const couponCodes = {
        ALOHA10: {
            code: "ALOHA10",
            type: "percentage",
            value: 0.10
        },
        PAUHANA5: {
            code: "PAUHANA5",
            type: "fixed",
            value: 5
        }
    }

    const handleAppliedCoupon = () => {
        const enteredCoupon = coupon.trim()
        const selectedCoupon = couponCodes[enteredCoupon]

        if (selectedCoupon) {
            onApplyCoupon(selectedCoupon)
            setMessage(`${enteredCoupon} applied!`)
        } else {
            onApplyCoupon(null)
            setMessage("Invalid coupon code!")
        }
    }

    return (
        <section className="coupon-container">
            <h3 className="coupon-title">Save here</h3>
            
            <input 
                className="coupon-input-field"
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value.toUpperCase())}
            />
            
            <button
                className="coupon-btn"
                type="button"
                disabled={!coupon.trim()}
                onClick={handleAppliedCoupon}
            >
                Apply
            </button>

            {message && <p className="coupon-message">{message}</p>}
        </section>
    )
}

export default Coupon;