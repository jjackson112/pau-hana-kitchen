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
            <button 
                type="button"
                className="hamburger-menu"
                onClick={() => dispatch(openCartSidebar())}
                aria-label={`Open cart with ${totalQuantity} items`}
            >
                {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="brand-icon">
                <Utensils size={20} />
                <h1 className="app-title">Pau Hana Kitchen</h1>
            </div>

            <div className={`nav-menu ${open ? "open" : ""}`}>
                <nav>
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/menu" onClick={() => setOpen(false)}>Menu</Link>
                    <Link to="/orders" onClick={() => setOpen(false)}>Orders</Link>
                    <Link to="/menu" onClick={() => dispatch(openCartSidebar())}>
                        <ShoppingCart size={20} />
                        <span>Cart</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;