function Total({ total }) {
    return (
        <div className="fee-row total">
            <h3>Total</h3>
            <h3>${total.toFixed(2)}</h3>
        </div>
    )
}

export default Total;