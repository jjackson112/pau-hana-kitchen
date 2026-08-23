import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import MenuCategory from "../components/MenuCategory";
import menuItems from "../data/menu";

function Home() {
    // Set keeps only unique values - no "Plate Lunches " & "Plate Lunches"
    const categories = [...new Set(menuItems.map((item) => item.category))]


    return (
        <main>
            <section className="hero-container">
                <h1>Pau Hana Kitchen</h1>
                <h2>Local favorites. Made fresh.</h2>
                <p>Plate lunches, poke, loco moco, and more.</p>
                    
                <Link to="/menu" className="cta-btn">Order now</Link>
            </section>

            <section className="popular-items"> 
                <h2>Popular Dishes</h2>
                
                {/* Add popular dishes later - MenuItem component*/}
            </section>

            <section className="menu-categories">
                <h2>Menu Categories</h2>
                {categories.map((category) => (
                    <MenuCategory 
                        key={category}
                        category={category} 
                    />
                ))}

                <MenuItem item={menuItems[0]} />
                {/* Add menu categories later - MenuCategory component */}
            </section>
        </main>
    )
}

export default Home;