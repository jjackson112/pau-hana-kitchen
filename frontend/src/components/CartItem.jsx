import { Plus } from "lucide-react";

function CartItem({ item }) {
    return (
        <div className="cart-item-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>
        </div>
    )
}