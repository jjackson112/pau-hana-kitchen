import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api/api";

function OrderDetail() {
    const { id } = useParams()

    const [orderDetails, setOrderDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchOrderDetails = async () => {

            try {
                setLoading(true)
                setError("")

                const data = await api.get(`/orders/${id}`)

                console.log("Order details fetched", data)
                setOrderDetails(data || [])

            } catch (err) {
                console.log("Failed to fetch order details", err)
                setError("Cannot fetch order details", err)
            } finally {
                setLoading(false)
            }
        }
        fetchOrderDetails()
    
    }, [id])

    if (loading) return <p>Order details loading...</p>
    if (error) return <p>{error}</p>
    if(!orderDetails) return <p>Order not found</p>

    return (
        <main>
            <Link to="/orders">← Back to orders</Link>

            <h1>Order #{order.id}</h1>

            <section className="order-information">
                <p>Status: {order.order_status}</p>
                <p>Type: {order.order_type}</p>
                <p>Date: {order.created_at}</p>
                <p>Customer: {order.customer_name}</p>
            </section>

            <section className="order-items">
                {order.map((item) => {
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>x {item.quantity}</p>
                        <p>${item.price}</p>
                    </div>
                })}
            </section>

            <section className="order-totals">
                <p>Subtotal: {order.subtotal}</p>
                <p>Tax: {order.tax}</p>
                <p>Tip: {order.tip}</p>
                <p>Discount: {order.discount}</p>
                <p>Total: {order.total}</p>
            </section>
        </main>
    )
}

export default OrderDetail;