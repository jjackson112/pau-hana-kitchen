import { Clock } from "lucide-react";

function Time({ orderType }) {
    const estimatedTime = orderType === "pickup" ? "10-15 minutes" : orderType === "delivery" ? "35-50 minutes" : "Select pickup or delivery"

    return (
        <section className="estimated-time">
            <Clock aria-hidden="true" />
            <div>
                <h2>Estimated Time</h2>
                <p>{estimatedTime}</p>
            </div>
        </section>
    )
}

export default Time;