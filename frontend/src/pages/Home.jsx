import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import MenuCategory from "../components/MenuCategory";
import menuItems from "../data/menu";

function Home() {
    // Set keeps only unique values - no "Plate Lunches " & "Plate Lunches"
    const categories = [...new Set(menuItems.map((item) => item.category))]

    return (
        <main className="home-container">
            <section className="hero-container">
                <div className="hero-text">
                    <h1 className="hero-title">Pau Hana Kitchen</h1>
                    <h2>Local favorites. Made fresh.</h2>
                    <p>Plate lunches, poke, loco moco, and more.</p>
                    
                    <Link to="/menu" className="cta-btn">Order now</Link>
                </div>
            </section>

            <section className="popular-section"> 
                <h2 className="popular-title">Popular Dishes</h2>
                <div className="popular-dishes">
                    {menuItems.map((item) => (
                        <MenuItem 
                            key={item.id}
                            item={item} 
                        />
                    ))}
                </div>
            </section>

            <section className="menu-categories">
                <h2 className="categories-title">Menu Categories</h2>
                {categories.map((category) => (
                    <MenuCategory 
                        key={category}
                        category={category} 
                    />
                ))}

                {/* Add menu categories later - MenuCategory component */}
            </section>
        </main>
    )
}

export default Home;