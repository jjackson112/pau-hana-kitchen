import { useDispatch, useSelector } from "react-redux";
import { setTip } from "../store/cartSlice";
import CartSummary from "../components/CartSummary";

function Checkout() {
    const dispatch = useDispatch()

    const cartItems = useSelector((state) => state.cart.itemList)

    // use reducer function - outputs a single value - to find subtotal
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.totalPrice,
        0
    )

    // tip options *const tipOptions = [0.10, 0.15, 0.20]
    const tip10 = subtotal * 0.10
    const tip15 = subtotal * 0.15
    const tip20 = subtotal * 0.20
    const taxRate = 0.08
    const tax = subtotal * taxRate
    const tip = useSelector((state) => state.cart.tip)
    const tipOption = useSelector((state) => state.cart.tipOption)
    const total = subtotal + tax + tip

    return (
        <div className="checkout-page">
            <CartSummary />

            <section className="fees">
                <div className="subtotal">
                    <h4>Subtotal </h4>
                    <p>{subtotal.toFixed(2)}</p>
                </div>
                <div className="delivery-fees">
                    <h4>Delivery Fees</h4>
                </div>
                <div className="tax">
                    <h4>Tax</h4>
                    <p>{tax.toFixed(2)}</p>
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
                <div className="total">
                    <h4>Total</h4>
                    <p>{total.toFixed(2)}</p>
                </div>
            </section>
        </div> 
    )
}

export default Checkout;