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
            >
                {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="brand-icon">
                <Utensils size={20} />
                <h1 className="app-title">Pau Hana Kitchen</h1>
            </div>

            <div className="nav-menu">
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/cart">Cart</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;