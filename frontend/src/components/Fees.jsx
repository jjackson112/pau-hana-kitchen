function Fees({ subtotal, deliveryFee, tax }) {
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