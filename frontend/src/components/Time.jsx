import { Clock } from "lucide-react";

function Time({ orderType }) {
    const estimatedTime = orderType === "pickup" ? "10-15 minutes" : orderType === "delivery" ? "35-50 minutes" : "Select pickup or delivery"

    return (
        <section className="estimated-time">
            <Clock aria-hidden="true" />
            <h3>Estimated Time</h3>
            <p>{estimatedTime}</p>
        </section>
    )
}

export default Time;