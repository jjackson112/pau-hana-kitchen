import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import menuItems from "../data/menu";
import { PaperBag, Car, Clock, MapPin } from "lucide-react";
import BackToTop from "../components/BackToTop";

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

            <section className="info-section">
                <div className="ordering-options">
                    <h3>Your favorites, your way</h3>

                    <div className="pickup-option">
                        <div className="pickup-icon">
                            <PaperBag aria-hidden="true" />
                        </div>

                        <div className="pickup-info">
                            <h4>Pick up</h4>
                            <p>Order ahead and collect your meal from Pau Hana Kitchen.</p>
                        </div>
                    </div>

                    <div className="delivery-option">
                        <div className="delivery-icon">
                            <Car aria-hidden="true" />
                        </div>

                        <div className="delivery-info">
                            <h4>Delivery</h4>
                            <p>Enjoy your local favorites at home. Choose delivery at checkout.</p>
                        </div>
                    </div>
                </div>

                <div className="store-info">
                    <div className="hours">
                        <div className="hours-icon">
                            <Clock aria-hidden="true" />
                        </div>

                        <div className="hours-info">
                            <h4>Hours & Location</h4>
                            <p><strong>Mon-Sat</strong> 11am - 9pm</p>
                            <p><strong>Sun</strong> 12pm - 8pm</p>
                        </div>
                    </div>

                    <div className="store-location">
                        <div className="map-icon">
                            <MapPin aria-hidden="true" />
                        </div>
                        <div className="delivery-address">
                            <p>72 Lehua Kai Way, Hāna Town, HI</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="brand-container">
                <div className="restaurant-interior"></div>
                <div className="history">
                    <h2>Our Story</h2>
                    <h3>Pau Hana Kitchen began with a simple idea: a good day’s work deserves a good meal.</h3>
                    <p>Inspired by Hawaiʻi’s local food traditions, our neighborhood kitchen brings together plate lunches, fresh poke, musubi, and sweet treats. What started as meals shared with friends after work grew into a welcoming spot to unwind and enjoy familiar favorites.</p>
                    <p><span>Our name</span> means <span>“finished with work”</span>—an invitation to take a break, grab a plate, and enjoy a little time together.</p>
                </div>
            </section>
            
            <BackToTop />
        </main>
    )
}

export default Home;