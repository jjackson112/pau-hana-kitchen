import { useState } from "react";

function Coupon() {
    const [coupon, setCoupon] = useState("")

    return (
        <section className="coupon-container">
            <h3 className="coupon-title">Save here</h3>
            
            <input 
                className="coupon-input-field"
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => (e.target.value.toUpperCase())}
            />
            
            <button
                className="coupon-btn"
                type="button"
            >
                Apply
            </button>
        </section>
    )
}

export default Coupon;