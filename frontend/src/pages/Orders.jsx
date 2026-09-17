function Orders() {
    return (
        <>
            <div className="orders-title">
                <h1>Order History</h1>
            </div>

            <section className="orders-list">
                <div className="order-detail-card">
                    {order.items.map((item) => (
                        <div key={item.id}>
                            <p>{item.id}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Orders;