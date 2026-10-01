import { useState, useEffect } from "react";
import { MoveUp } from "lucide-react";

export default function scrollToTop() {
    const [isVisible, setIsVisible ] = useState(false)

    const scrollToTop = () = {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }

    return (
        <div>
            <button>
                <MoveUp />
            </button>
        </div>
    )
}