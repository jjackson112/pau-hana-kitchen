// central API layer

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const request = async (endpoint) => {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Fetch failed")
        }

        return data
    }
