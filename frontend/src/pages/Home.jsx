import menuItems from "../data/menu.js";

function Home() {
    return (
        <main>
            <section className="hero-container">
                <h1>Pau Hana Kitchen</h1>
                <h2>Local favorites. Made fresh.</h2>
                <p>Plate lunches, poke, loco moco, and more.</p>
                <button className="cta-btn">
                    Order now
                </button>
            </section>

            <section className="popular-items"> 
                <h2>Popular Dishes</h2>

                {/* Add popular dishes later - MenuItem component*/}
            </section>

            <section className="menu-categories">
                <h2>Menu Categories</h2>

                {/* Add menu categories later - MenuCategory component */}
            </section>
        </main>
    )
}

export default Home;