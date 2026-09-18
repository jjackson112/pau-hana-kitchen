// central API layer

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const request = async (endpoint, options={}) => {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
        })

        const data = res.status === 204 ? null : await res.json();

        if (!res.ok) {
            throw new Error(data?.message || `Fetch failed with status ${res.status}`)
        }

        return data
    }

// each method has the same error handling + response parsing

export const api = {
    get: (endpoint) => 
        request(endpoint, {
            method: "GET",
        }),

    post: (endpoint, body) =>
        request(endpoint, {
            method: "POST",
            body: JSON.stringify(body),
        }),

    patch: (endpoint, body) =>
        request(endpoint, {
            method: "PATCH",
            body: JSON.stringify(body),
        }),
    
    delete: (endpoint) =>
        request(endpoint, {
            method: "DELETE",
        }),
}