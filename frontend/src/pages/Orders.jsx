import { useEffect, useState } from "react";
import { api } from '../api/api';
import { Link } from "react-router-dom";

function Orders() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    // fetch orders
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true)
                setError("")
                
                const data = await api.get("/orders")
                console.log("Orders fetched", data)

                setOrders(Array.isArray(data) ? data : [])

            } catch (err) {
                console.log("Failed to get orders", err)
                setError("Failed to fetch orders")
            } finally {
                setLoading(false)
            }
        }
        fetchOrders()
    }, [])

    if (loading) return "Loading orders..."
    if (error) return <p>{error}</p>

        
    async function handleCancelOrder() {
        if (!window.confirm("Cancel this order?")) return;

        try {
            const result = await api.patch(`/orders/${order.id}`, {
                order_status: "cancelled"
            })

            console.log("Order cancelled", result)

        } catch (err) {
            console.log("Cannot cancel order.")
        }
    }

    return (
        <>
            <main className="orders-page">
                <div className="orders-title">
                    <h1>Order History</h1>
                </div>

                <section className="orders-list">
                    {orders.length === 0 ? (
                        <p>No orders yet.</p>
                    ) : (
                    
                        orders.map((order) => (
                            <Link
                                to={`/orders/${order.id}`} 
                                key={order.id}
                                className="order-detail-card"
                            >
                                <p>Order #{order.id}</p>
                                <p>{order.created_at}</p>
                                <p>{order.order_status}</p>
                                <p>${order.total}</p>

                                <button
                                    type="button"
                                    className="cancel-order-btn"
                                    onClick={handleCancelOrder}
                                >        
                                    Cancel Order
                                </button>
                            </Link>
                        ))
                    )}
                </section>
            </main>
        </>
    )
}

export default Orders;