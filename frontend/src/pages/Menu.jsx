import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import menuItems from "../data/menu";

function Menu() {
    const { hash } = useLocation()

    // Set keeps only unique values - no "Plate Lunches " & "Plate Lunches"
    const categories = [...new Set(menuItems.map((item) => item.category.trim()))]

    // match the id of the menu section to the href - anchor logic
    const categoryId = (category) => category.trim().toLowerCase().replace(/\s+/g, "-")

    // scroll to matching section after page renders
    useEffect(() => {
        if (!hash) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            })
            return
        }

        const sectionId = decodeURIComponent(hash.slice(1))
        const section = document.getElementById(sectionId)

        section?.scrollIntoView({
            block: "start"
        })

    }, [hash])

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
                            <section 
                                key={category} 
                                id={categoryId(category)}
                                className="menu-category-section"
                            >
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