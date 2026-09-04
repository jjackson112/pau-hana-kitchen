function OrderType({ orderType, setOrderType }) {
    return (
        <section className="order-type">
            <button
                className={orderType === "pickup" ? "active" : ""}
                onClick={() => setOrderType("pickup")}
            >
                Pickup
            </button>

            <button
                className={orderType === "delivery" ? "active" : ""}
                onClick={() => setOrderType("delivery")}
            >
                Delivery
            </button>
        </section>
    )
}

export default OrderType;