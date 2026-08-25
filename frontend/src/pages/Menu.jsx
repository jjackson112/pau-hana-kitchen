import MenuItem from "../components/MenuItem";
import menuItems from "../data/menu";

function Menu() {
    // Set keeps only unique values - no "Plate Lunches " & "Plate Lunches"
    const categories = [...new Set(menuItems.map((item) => item.category))]

    return (
        <main className="menu-page">
            <section className="full-menu">
                <div className="menu-title">
                    <h1>Pau Hana Kitchen Menu</h1>
                </div>

                <div className="menu-container">
                    {categories.map((category) => {
                        const categoryItems = menuItems.filter(
                            (item) => item.category === category
                        )

                        return (
                            <section key={category} className="menu-category-section">
                                <h2 className="category-title">{category}</h2>
                                <div className="menu-category-items">
                                    {categoryItems.map((item) => (
                                        <MenuItem
                                            key={item.id}
                                            item={item}
                                        />
                                    ))}
                                </div>
                            </section>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Menu;