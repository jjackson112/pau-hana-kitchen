import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api/api";

function OrderDetail() {
    const { id } = useParams()

    const [orderDetails, setOrderDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    // format money amounts to show 2 decimal places - quantize() just rounds the saved amount on the backend
    const formatMoney = (value) =>
        Number(value ?? 0).toFixed(2)

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
                setError(err.message || "Cannot fetch order details")

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
        <main className="order-detail-page">
            <Link 
                to="/orders"
                className="order-link"
            >
                ← Back to orders
            </Link>

            <section className="order-information">
                <p>
                    <h3>Order #{orderDetails.id}</h3>
                </p>

                <p>
                    <span>Status</span>
                    <span>{orderDetails.order_status}</span>
                </p>
                    
                <p>
                    <span>Type</span>
                    <span>{orderDetails.order_type}</span>
                </p>
                    
                <p>
                    <span>Date</span>
                    <span>{orderDetails.created_at}</span>
                </p>
                    
                <p>
                    <span>Customer</span> 
                    <span>{orderDetails.customer_name}</span>
                </p>

                {orderDetails.order_type === "delivery" && (
                    <p>
                        <span>Deliver to</span>
                        <span>{orderDetails.delivery_address}</span>
                    </p>
                )}

                <section className="order-items">
                    <h2>Items</h2>

                    {orderDetails.items.length > 0 ? (
                        orderDetails.items.map((item) => (
                            <div 
                                key={item.id}
                                className="order-item"
                            >
                                <span>{item.name}</span>
                                <span>x {item.quantity}</span>
                                <span>${item.price}</span>
                            </div>
                        ))
                    ) : (
                        <p>No items for this order</p>
                    )}
                </section>

                <section className="order-totals">
                    <p>
                        <span>Subtotal</span>
                        <span>${formatMoney(orderDetails.subtotal)}</span>
                    </p>

                    <p>
                        <span>Delivery Fee</span>
                        <span>${formatMoney(orderDetails.delivery_fee ?? 0)}</span>
                    </p>

                    <p>
                        <span>Tax</span>
                        <span>${formatMoney(orderDetails.tax)}</span>
                    </p>

                    <p>
                        <span>Tip</span> 
                        <span>${formatMoney(orderDetails.tip)}</span>
                    </p>

                    <p>
                        <span>Discount</span>
                        <span>-${formatMoney(orderDetails.discount)}</span>
                    </p>
                    
                    <p>
                        <span>Total</span> 
                        <span>${formatMoney(orderDetails.total)}</span>
                    </p>
                </section>
            </section>
        </main>
    )
}

export default OrderDetail;