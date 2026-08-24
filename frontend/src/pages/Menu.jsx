import MenuCategory from "../components/MenuCategory";
import menuItems from "../data/menu";

function Menu() {
    // Set keeps only unique values - no "Plate Lunches " & "Plate Lunches"
    const categories = [...new Set(menuItems.map((item) => item.category))]

    return (
        <main>
            <div className="full-menu">
                <div className="menu-title">
                    <h1>Menu</h1>
                </div>

                <div className="menu-categories-list">
                    {categories.map((category) => {
                        const categoryItems = menuItems.filter(
                            (item) => item.category === category
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default Menu;