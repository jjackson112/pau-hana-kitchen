import { useDispatch, useSelector } from "react-redux";
import { setTip } from "../store/cartSlice";

function TipSelector({ orderType, subtotal }) {
    const dispatch = useDispatch()
    
    const tip = useSelector((state) => state.cart.tip)
    const tipOption = useSelector((state) => state.cart.tipOption)

    // tip options - const tipOptions = [0.10, 0.15, 0.20]
    const tip10 = subtotal * 0.10
    const tip15 = subtotal * 0.15
    const tip20 = subtotal * 0.20

    return (
        <div className="tip">
            <h4>{orderType === "delivery" ? "Delivery Tip" : "Tip"}</h4>
            
            <div className="tip-options">
                <button
                    type="button"
                    className={`tip-btn ${tipOption === "10" ? "active" : ""}`}
                    onClick={() => dispatch(setTip({ amount: tip10, option: "10"}))}
                >
                    10% (${tip10.toFixed(2)})
                </button>
                <button
                    type="button"
                    className={`tip-btn ${tipOption === "15" ? "active" : ""}`}
                    onClick={() => dispatch(setTip( {amount: tip15, option: "15"}))}
                >
                    15% (${tip15.toFixed(2)})
                </button>
                <button
                    type="button"
                    className={`tip-btn ${tipOption === "20" ? "active" : ""}`}
                    onClick={() => dispatch(setTip({ amount: tip20, option: "20"}))}
                >
                    20% (${tip20.toFixed(2)})
                </button>
                <button
                    type="button"
                    className={`tip-btn ${tipOption === "0" ? "active" : ""}`}
                    onClick={() => dispatch(setTip({ amount: 0, option: "0"}))}
                >
                    No tip
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
        </div>
    )
}

export default TipSelector;