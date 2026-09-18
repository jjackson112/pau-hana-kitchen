// central API layer

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const api = {
    get: async (endpoint) => {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer"
            }
        })
    }
}
