import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Plus } from 'lucide-react';

// MenuItem (user clicks) + handleAddToCart() + dispatch(addToCart(item)) + cartSlice + Redux store updates
 
function MenuItem({ item }) {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(item)) // send the item as the action payload
    }

    return (
        <div className="menu-item-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <p className="category-badge">{item.category}</p>
            <button 
                onClick={handleAddToCart} 
                className="add-cart-btn"
                aria-label={`Add ${item.name} to cart`}
            >
                <Plus size={18} />
            </button>
        </div>
    )
}

export default MenuItem;