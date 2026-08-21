import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Utensils } from "lucide-react";

function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="header-container">
            <button 
                className="hamburger"
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={open}
            >
                {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="brand-icon">
                <Utensils size={20} />
                <h1 className="app-title">Pau Hana Kitchen</h1>
            </div>

            <div className="nav-menu">
                <nav>
                    <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/menu" onClick={() => setOpen(false)}>Menu</Link>
                    <Link to="/orders" onClick={() => setOpen(false)}>Orders</Link>
                    <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;