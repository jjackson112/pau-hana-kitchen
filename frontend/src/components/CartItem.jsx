import { useState } from "react";

// add-to-cart state, totals, quantities, removing items from cart

const [addToCart, setAddToCart] = useState([])
const [cartCount, setCartCount] = useState(0)

const [loading, setLoading] = useState(false)
const [error, setError] = useState("")