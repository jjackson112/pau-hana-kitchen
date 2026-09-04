import { MapPin, PaperBag } from "lucide-react";

function LocationMap({ orderType, deliveryAddress, setDeliveryAddress }) {
    const restaurantAddress = "72 Lehua Kai Way, Hāna Town, HI"
    const isPickup = orderType === "pickup"

    return (
        <section className="location-map">
            <div className="location-header">
                <PaperBag aria-hidden="true" size={22} />
                <h3>{isPickup ? "Pickup at" : "Deliver to"}</h3>
            </div>

            <div className="restaurant-location">
                <MapPin aria-hidden="true" />
                <h3>{restaurantAddress}</h3>
            </div>

            {isPickup ? (
                <>
                    <div className="map-frame">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.9915870403206!2d-155.9906395245683!3d20.751135080829687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7954ac288c098091%3A0xb25044f245c10cb9!2s1752%20Mill%20Pl%2C%20Hana%2C%20HI%2096713!5e0!3m2!1sen!2sus!4v1788532808860!5m2!1sen!2sus"
                            title="Pau Hana Kitchen pickup location"
                            style={{ border: 0 }}
                            allowfullscreen 
                            loading="lazy" 
                            referrerpolicy="strict-origin-when-cross-origin">
                        </iframe>
                    </div>
                </>
            ) : (
                <div className="delivery-location">
                    <input 
                        className="delivery-location-field"
                        type="text"
                        placeholder="Enter delivery address"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                    />
                </div>
            )}

        </section>
    )
}

export default LocationMap;