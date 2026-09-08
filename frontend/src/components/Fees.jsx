function Fees() {
    // subtract both coupons in one place - stop subtotal from decreasing below 0
    let discount = 0
    const discountedSubtotal = Math.max(subtotal - discount, 0)
    
    const deliveryFee = orderType === "delivery" ? 3.99 : 0
    
    const taxRate = 0.08
    const tax = discountedSubtotal * taxRate
    const total = discountedSubtotal + tax + tip + deliveryFee

    return (
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
        </section>
    )
}

export default Fees;