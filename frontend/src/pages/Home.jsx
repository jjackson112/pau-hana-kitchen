import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import menuItems from "../data/menu";

function Home() {
    // Set keeps only unique values - no "Plate Lunches " & "Plate Lunches"
    const categories = [...new Set(menuItems.map((item) => item.category))]

    // match the id of the menu section to the href - anchor logic
    const categoryId = (category) => category.trim().toLowerCase().replace(/\s+/g, "-")

    return (
        <main className="home-container">
            <section className="hero-container">
                <div className="hero-text">
                    <h1 className="hero-title">Pau Hana Kitchen</h1>
                    <h2 className="hero-tagline">Local favorites. Made fresh.</h2>
                    <p className="hero-sentence">Plate lunches, poke, loco moco, and more.</p>
                    <p className="coupon-banner">Get $5 off your order with code <strong>PAUHANA5</strong></p>

                    <Link to="/menu" className="cta-btn">Order now</Link>
                </div>
            </section>

            <section className="popular-section"> 
                <h2 className="popular-title">Popular Dishes</h2>
                <div className="popular-dishes">
                    {menuItems.slice(0, 4).map((item) => (
                        <MenuItem 
                            key={item.id}
                            item={item} 
                        />
                    ))}
                </div>
            </section>

            <section className="categories-section">
                <h2 className="categories-title">Menu Categories</h2>

                <nav className="menu-categories" aria-label="Menu categories">
                    {categories.map((category) => (
                        <Link 
                            key={category}
                            to={`/menu#${categoryId(category)}`}
                            className="category-pill" 
                        >
                            {category}
                        </Link>
                    ))}
                </nav>

                <div className="menu-link-container">
                    <Link to="/menu" className="menu-link-btn">View Full Menu</Link>
                </div>
            </section>

            <section className="brand-container">
                <div className="restaurant-interior"></div>
                <div className="history">
                    <h3>Pau Hana Kitchen began with a simple idea: a good day’s work deserves a good meal.</h3>
                    <p>Inspired by Hawaiʻi’s local food traditions, our neighborhood kitchen brings together plate lunches, fresh poke, musubi, and sweet treats. What started as meals shared with friends after work grew into a welcoming spot to unwind and enjoy familiar favorites.</p>
                    <p><span>Our name</span> means <span>“finished with work”</span>—an invitation to take a break, grab a plate, and enjoy a little time together.</p>
                </div>
            </section>

        </main>
    )
}

export default Home;