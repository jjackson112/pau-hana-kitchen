import { useState, useEffect } from "react";
import { MoveUp } from "lucide-react";

export default function scrollToTop() {
    const [isVisible, setIsVisible ] = useState(false)

    // show btn when page is scrolled past 300px
    const toggleVisibility = () = {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () = {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
    })

    return (
        <div>
            <button>
                <MoveUp />
            </button>
        </div>
    )
}