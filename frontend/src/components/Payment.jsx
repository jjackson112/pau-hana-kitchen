import { useState } from "react";

function Payment({ handleCreateOrder, payment, setPayment }) {
    const [payment, setPayment] = useState({
        cardholder: "",
        cardNumber: "",
        expiration: "",
        cvv: ""
    })

    const populatePaymentDetails = () => {
        setPayment({
            cardholder: "Jane Doe",
            cardNumber: "4242 1350 0022 8932",
            expiration: "12/28",
            cvv: "123"
        })
    }

    const handlePaymentDetailChange = (e) => {
        const { name, value } = e.target.value

        setPayment((current) => ({
            ...current,
            [name]: value
        }))
    }

    return (
        <section className="payment-container">
            <h3>Payment</h3>
            <p style={{ color: "red" }}><strong>Demo checkout - no real payment will be processed</strong></p>

            <label>
                Cardholder
                <input
                    type="text"
                    aria-label="Cardholder name"
                    value={payment.cardholder}
                    onChange={handlePaymentDetailChange}
                    className="payment-field"
                    placeholder="Name on card"
                />
            </label>

            <label>
                Card number
                <input
                    type="text"
                    aria-label="Card number"
                    value={payment.cardNumber}
                    onChange={handlePaymentDetailChange}
                    className="payment-field"
                    placeholder="4242 4242 4242 4242"
                />
            </label>

            <div className="payment-row">
                <label>
                    Expiration
                    <input
                        type="text"
                        aria-label="Expiration date"
                        value={payment.expiration}
                        onChange={handlePaymentDetailChange}
                        className="payment-field"
                        placeholder="MM/YY"
                    />
                </label>

                <label>
                    CVV
                    <input
                        type="text"
                        aria-label="security code"
                        value={payment.cvv}
                        onChange={handlePaymentDetailChange}
                        className="payment-field"
                        placeholder="123"
                    />
                </label>
            </div>

            <button 
                className="place-order-btn" 
                onClick={() => { populatePaymentDetails(), handleCreateOrder()}}
                type="button"
            >
                Place Demo Order
            </button>
        </section>
    )
}

export default Payment;