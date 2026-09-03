import { Clock } from "lucide-react";

function Time({ orderType }) {
    const estimatedPickupTime = orderType === "pickup" ? "10-15 minutes" : "15-20 minutes"
    const estimatedDeliveryTime = orderType === "delivery" ? "35-50 minutes" : "20-30 minutes"

    return (
        <section className="estimated-time">
            <Clock />
            <div>
                <h2>Estimated Time</h2>
                <p>{estimatedTime}</p>
            </div>
        </section>
    )
}

export default Time;