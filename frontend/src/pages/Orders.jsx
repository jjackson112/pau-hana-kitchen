import { useEffect, useState } from "react";

function Orders() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    // fetch 
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true)
                setError("")
                
                const res = await api.get("/orders")
                console.log("Orders fetched")

                setOrders(res.orders || [])

            } catch (err) {
                console.log("Failed to get orders", err)
                setError("Failed to fetch orders")
            } finally {
                setLoading(false)
            }
        }
        fetchOrders()
    }, [])

    // render guards
    if (loading) return "Loading orders..."

    if (error) return <p>{error}</p>

    return (
        <>
            <div className="orders-title">
                <h1>Order History</h1>
            </div>

            <section className="orders-list">
                {orders.length === 0 ? (
                    <p>No orders yet.</p>
                ) : (
                    orders.map((order) => (
                        <div 
                            key={order.id}
                            className="order-detail-card"
                        >
                            <p>Order #{order.id}</p>
                            <p>{order.created_at}</p>
                            <p>{order.order_status}</p>
                            <p>${order.total}</p>
                        </div>
                    ))
                )}
            </section>
        </>
    )
}

export default Orders;