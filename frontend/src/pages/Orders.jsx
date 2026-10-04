import { useEffect, useState } from "react";
import { api } from '../api/api';
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

function Orders() {
    const [orders, setOrders] = useState([])
    const [now, setNow] = useState(Date.now())
    const [cancellationMessage, setCancellationMessage] = useState("")
    

    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(0)
    const [hasPrev, setHasPrev] = useState(false)
    const [hasNext, setHasNext] = useState(false)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const formatOrderDate = (date) =>
        new Date(date).toLocaleString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        });

    // fetch orders
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true)
                setError("")
                
                const data = await api.get("/orders")
                console.log("Orders fetched", data)

                setOrders(Array.isArray(data) ? data : [])
                setPages(data.pages || [])

            } catch (err) {
                console.log("Failed to get orders", err)
                setError("Failed to fetch orders")
            } finally {
                setLoading(false)
            }
        }
        fetchOrders()
    }, [])

    // cancel order btn should stop after 5 mins
    useEffect(() => {
        const timer = setInterval(() => {
            setNow(Date.now())
        }, 60_000)

        return () => clearInterval(timer)
    }, [])

    // render guards
    if (loading) return "Loading orders..."
    if (error) return <p>{error}</p>

    function displayCancelOrder(order) {
        const createdAt = new Date(order.created_at).getTime()
        const age = now - createdAt

        return (
            order.order_status === "received" &&
            Number.isFinite(createdAt) && // ensures that the date is a finite value
            age >= 0 &&
            age < 5 * 60 * 1000
        )
    }

    async function handleCancelOrder(orderId) {
        if (!window.confirm("Cancel this order?")) return;

        setCancellationMessage("")

        try {
            const result = await api.patch(`/orders/${orderId}`, {
                order_status: "cancelled"
            })

            console.log("Order cancelled", result)

            setOrders((current) => 
                current.map((order) => 
                    order.id === orderId ? result.order : order))

        } catch (err) {
            console.error("Cannot cancel order.", err)
            setCancellationMessage("Cannot cancel the order. Please try again.")
        }
    }

    return (
        <>
            <main className="orders-page">
                <div className="orders-title">
                    <h1>Order History</h1>
                </div>

                <div className="cancellation-window-message">
                    <p>Orders can be cancelled within 5 mins of being placed.</p>
                    {cancellationMessage}
                </div>

                <section className="orders-list">
                    {orders.length === 0 ? (
                        <p>No orders yet.</p>
                    ) : (
                        orders.map((order) => (
                            <article 
                                className="order-detail-card"
                                key={order.id}
                            >
                                <div className="order-detail-header">
                                    <Link 
                                        to={`/orders/${order.id}`}
                                        className="order-id-link"
                                    >
                                        <p>Order #{order.id}</p>
                                    </Link>

                                    <p
                                        className={`order-status ${
                                            order.order_status === "received"
                                            ? "status-received"
                                            : order.order_status === "cancelled"
                                                ? "status-cancelled"
                                                : ""
                                            }`}
                                    >
                                        {order.order_status}
                                    </p>
                                </div>

                                <p>{formatOrderDate(order.created_at)}</p>

                                <div className="order-total-row">
                                    <p className="order-type">{(order.order_type).toUpperCase()}</p>
                                    <p><strong>${Number(order.total).toFixed(2)}</strong></p>
                                </div>

                                <Link 
                                    to={`/orders/${order.id}`}
                                    className="view-order-link"
                                >
                                    <MoveRight />
                                </Link>

                                {displayCancelOrder(order) && (
                                    <button
                                        type="button"
                                        className="cancel-order-btn"
                                        onClick={() => handleCancelOrder(order.id)}
                                    >
                                        Cancel Order
                                    </button>
                                )}

                            </article>

                        ))
                    )}
                </section>

                <section className="pagination">
                    <nav className="pagination-nav" aria-label="Orders pagination">
                        <button
                            type="button"
                            disabled={!hasPrev || loading}
                            onClick={() => setPage((current) => current - 1)}
                        >
                            Previous
                        </button>

                        <span>
                            {page} of {pages}
                        </span>

                        <button
                            type="button"
                            disabled={!hasNext || loading}
                            onClick={() => setPage((current) => current + 1)}
                        >
                            Next
                        </button>
                    </nav>
                </section>

            </main>
        </>
    )
}

export default Orders;