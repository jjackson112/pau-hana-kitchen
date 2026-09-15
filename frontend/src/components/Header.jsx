import { useDispatch, useSelector } from "react-redux";
import { openCartSidebar } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { Menu, X, Utensils, ShoppingCart } from "lucide-react";

function Header() {
    const dispatch = useDispatch()

    const isOpen = useSelector((state) => state.cart.isOpen)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    return (
        <header className="header-container">

            <div className="brand-icon">
                <Utensils size={20} />
                <h4 className="app-title">Pau Hana Kitchen</h4>
            </div>

            <div className={`nav-menu ${open ? "open" : ""}`}>
                <nav>
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/menu" onClick={() => setOpen(false)}>Menu</Link>
                    <Link to="/orders" onClick={() => setOpen(false)}>Orders</Link>
                    <Link to="/menu" onClick={() => dispatch(openCartSidebar())}>
                        <ShoppingCart className="cart-icon" size={20} />
                        <span>Cart</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;