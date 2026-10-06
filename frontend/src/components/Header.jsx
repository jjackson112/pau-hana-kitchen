import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCartSidebar } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { Menu, X, Utensils, ShoppingCart } from "lucide-react";

function Header() {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(false)
        dispatch(openCartSidebar())
    }

    return (
        <header className="header-container">

            <Link 
                to="/"
                className="brand-icon"
                onClick={() => setOpen(false)}
            >
                <Utensils size={20} aria-hidden="true" />
                <span className="app-title">Pau Hana Kitchen</span>
            </Link>

            <button
                type="button"
                className="nav-toggle"
                aria-expanded={open}
                aria-controls="header-navigation"
                onClick={() => setOpen((current) => !current)}
            >
                {open
                ? <X aria-hidden="true" />
                : <Menu aria-hidden="true" />}
            </button>

            <nav 
                className={`nav-menu ${open ? "open" : ""}`}
                aria-label="Main navigation"
            >
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                <Link to="/menu" onClick={() => setOpen(false)}>Menu</Link>
                <Link to="/orders" onClick={() => setOpen(false)}>Orders</Link>
                
                <Link to="/menu" onClick={() => dispatch(openCartSidebar())}>
                    <ShoppingCart className="cart-icon" size={18} />
                    <span>Cart</span>
                </Link>
            </nav>
        </header>
    )
}

export default Header;