function OrderDetail() {
    return (
        <div>
            {order.items.map((item) => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
        </div>
    )
}

export default OrderDetail;