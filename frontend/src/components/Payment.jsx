function Payment({ handleCreateOrder }) {
    return (
        <section className="payment-container">
            <h3>Payment</h3>
            <p style={{ color: "red" }}><strong>Demo checkout - no real payment will be processed</strong></p>

            <label>
                Name on card
                <input
                    type="text"
                    className="payment-field"
                    placeholder="Name on card"
                />
            </label>

            <label>
                Card number
                <input
                    type="text"
                    className="payment-field"
                    placeholder="4242 4242 4242 4242"
                />
            </label>

            <div className="payment-row">
                <label>
                    Expiration
                    <input
                        type="text"
                        className="payment-field"
                        placeholder="MM/YY"
                    />
                </label>

                <label>
                    CVV
                    <input
                        type="text"
                        className="payment-field"
                        placeholder="123"
                    />
                </label>
            </div>

            <button 
                className="place-order-btn" 
                onClick={handleCreateOrder}
                type="button"
            >
                Place Order
            </button>
        </section>
    )
}

export default Payment;