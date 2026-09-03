function OrderType({ orderType, setOrderType }) {
    return (
        <section className="order-type">
            <button
                className={orderType === "pickup" ? "active" : ""}
                onclick={() => setOrderType("pickup")}
            >
                Pickup
            </button>

            <button
                className={orderType === "delivery" ? "active" : ""}
                onclick={() => setOrderType("delivery")}
            >
                Pickup
            </button>
        </section>
    )
}

export default OrderType;