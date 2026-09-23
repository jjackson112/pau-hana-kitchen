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
                setOrderDetails(data.order ?? data)

            } catch (err) {
                console.error("Failed to fetch order details", err)
                setError("Cannot fetch order details" || err.message)
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

            <h1>Order #{orderDetails.id}</h1>

            <section className="order-information">
                <p>Status: {orderDetails.order_status}</p>
                <p>Type: {orderDetails.order_type}</p>
                <p>Date: {orderDetails.created_at}</p>
                <p>Customer: {orderDetails.customer_name}</p>
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
                <p>Subtotal: {orderDetails.subtotal}</p>
                <p>Tax: {orderDetails.tax}</p>
                <p>Tip: {orderDetails.tip}</p>
                <p>Discount: {orderDetails.discount}</p>
                <p>Total: {orderDetails.total}</p>
            </section>
        </main>
    )
}

export default OrderDetail;