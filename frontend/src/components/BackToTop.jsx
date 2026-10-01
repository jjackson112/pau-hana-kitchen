import { useState, useEffect } from "react";
import { MoveUp } from "lucide-react";

export default function scrollToTop() {
    const [isVisible, setIsVisible ] = useState(false)

    // show btn when page is scrolled past 300px
    const toggleVisibility = () => {
        if (!isVisible) return null

        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <div>
            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                style={{
                    borderRadius: '5px',
                    backgroundColor: '#000',
                    color: '#fff',
                    cursor: 'pointer'
                }}
            >
                <MoveUp aria-hidden="true" />
            </button>
        </div>
    )
}