import { MapPin } from "lucide-react";

function LocationMap({ orderType }) {
    const restaurantAddress = "Hana Town, HI"
    const mapQuery = encodeURIComponent(restaurantAddress)

    return (
        <section className="location-map">
            <MapPin aria-hidden="true" />

            <div>
                <h3></h3>
            </div>
        </section>
    )
}

export default LocationMap;