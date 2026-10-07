import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import menuItems from "../data/menu";
import BackToTop from "../components/BackToTop";

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
                <h1 className="menu-title">Pau Hana Kitchen Menu</h1>
                <div className="menu-instructions">
                    <p>Add menu items by clicking the "+" icon and your cart will appear.</p>
                    <p>When you're done adding menu items, scroll to the bottom of your cart and click the checkout button.</p>
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

            <BackToTop />
        </main>
    )
}

export default Menu;