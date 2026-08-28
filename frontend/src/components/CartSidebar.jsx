import { Link } from "react";
import { X } from "lucide-react";

// open the sidebar while user is on the homepage adding menu items to the cart

function Sidebar() {
    return (
        <aside>
            <Link 
                to="/menu"
                className="full-menu-from-sidebar-btn"
            >
                View full menu
            </Link>
        </aside>
    )
}

export default Sidebar;