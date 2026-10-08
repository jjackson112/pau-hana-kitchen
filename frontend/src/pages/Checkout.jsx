import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../store/cartSlice";
import { api } from "../api/api";
import CartSummary from "../components/CartSummary";
import OrderType from "../components/OrderType";
import Time from "../components/Time";
import Coupon from "../components/Coupon";
import LocationMap from "../components/LocationMap";
import Payment from "../components/Payment";
import TipSelector from "../components/TipSelector";
import Total from "../components/Total";
import Fees from "../components/Fees";

function Checkout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cartItems = useSelector((state) => state.cart.itemList)
    const tip = useSelector((state) => state.cart.tip)

    const [orderType, setOrderType] = useState("pickup")
    const [appliedCoupon, setAppliedCoupon] = useState(null)
    const [deliveryAddress, setDeliveryAddress] = useState("")

    const [orderError, setOrderError] = useState("")

    // use reducer function - outputs a single value - to find subtotal
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.totalPrice,
        0
    )

    // discount calculation - support both coupons
    let discount = 0

    if (appliedCoupon?.type === "percentage") {
        discount = subtotal * appliedCoupon.value
    }

    if (appliedCoupon?.type === "fixed") {
        discount = Math.min(appliedCoupon.value, subtotal) // prevent discount from exceeding the subtotal
    }

    // subtract both coupons in one place - stop subtotal from decreasing below 0
    const discountedSubtotal = Math.max(subtotal - discount, 0)
    
    const deliveryFee = orderType === "delivery" ? 3.99 : 0
    
    const taxRate = 0.08
    const tax = discountedSubtotal * taxRate
    const total = discountedSubtotal + tax + tip + deliveryFee

    // test out Create Order process - POST order route
    async function handleCreateOrder() {
        setOrderError("")

        if (cartItems.length === 0) {
            setOrderError("Add at least one item to your cart before placing an order.")
            return
        }

        console.log("PLACE ORDER CLICKED")

        // use existing Redux cart state to map over menu items
        const menuItems = cartItems.map((item) => ({
            menu_item_id: item.id,
            quantity: item.quantity
        }))
    
        const orderData = {
            "order_type": orderType,
            "delivery_address": orderType === "delivery" ? deliveryAddress : null,
            "customer_name": "Jane Doe",
            "customer_email": "jane@mail.com",
            "customer_phone_number": "555-555-5555",
            "menu_items": menuItems,
            "tip": tip,
            "coupon_code": appliedCoupon?.code ?? null
        }

        console.log("tip sent to checkout", orderData.tip)
        console.log("type of tip", typeof orderData.tip)
        console.log("Checkout totals:", { tip, total })

        try {
            const result = await api.post("/orders", orderData)

            console.log("ORDER CREATED", result)

            dispatch(emptyCart())
            navigate("/orders", {
                state: {
                    confirmationMessage:
                    `Order #${result.order.id} placed successfully!`
                }
            })

        } catch (err) {
            setOrderError("Cannot create the order. Please try again.")
            console.error("Cannot create the order. Please try again.", err)
        }
    }

    return (
        <main className="checkout-page">

            <section className="checkout-components">
                <h1 className="checkout-title">Checkout</h1>
                {orderError && (
                    <p className="order-error" role="alert">{orderError}</p>
                )}

                <LocationMap orderType={orderType} deliveryAddress={deliveryAddress} setDeliveryAddress={setDeliveryAddress} />
                <OrderType orderType={orderType} setOrderType={setOrderType} />
                <Time orderType={orderType} />
                <CartSummary />
            </section>

            <aside className="checkout-sidebar">
                <Fees subtotal={subtotal} deliveryFee={deliveryFee} tax={tax} />

                <Coupon onApplyCoupon={setAppliedCoupon} appliedCoupon={appliedCoupon} discount={discount} />

                <TipSelector subtotal={subtotal} orderType={orderType} />

                <Total total={total} />

                <Payment handleCreateOrder={handleCreateOrder} /> 
            </aside>
        </main> 
    )
}

export default Checkout;