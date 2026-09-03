import { useState } from "react";

function Coupon() {
    const [coupon, setCoupon] = useState("")
    const couponCodes = {
        ALOHA10: {
            type: "percentage",
            value: 0.10
        },
        PAUHANA5: {
            type: "fixed",
            value: 5
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
            >
                Apply
            </button>
        </section>
    )
}

export default Coupon;