import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
                setOrderDetails(data)

            } catch (err) {
                console.log("Failed to fetch order details", err)
                setError("Cannot fetch order details", err)
            } finally {
                setLoading(false)
            }
        }
        fetchOrderDetails()
    
    }, [])

    if (loading) return <p>Order details loading...</p>
    if (error) return <p>{error}</p>
    if(!orderDetails) return <p>Order not found</p>

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