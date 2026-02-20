import Reveal from "../common/Reveal";
import { MapPin, Bed, Bath, Share2, Heart } from "lucide-react";
import "./Properties.css";

import prop1 from "../../assets/prop-1.jpg";
import prop2 from "../../assets/prop-2.jpg";
import prop3 from "../../assets/prop-3.jpg";

const properties = [
    {
        id: 1,
        image: prop1,
        price: "$850,000",
        title: "Modern Luxury Villa",
        location: "Beverly Hills, CA",
        beds: 5,
        baths: 4,
        sqft: 4500,
        tag: "For Sale"
    },
    {
        id: 2,
        image: prop2,
        price: "$450,000",
        title: "Downtown Penthouse",
        location: "New York, NY",
        beds: 2,
        baths: 2,
        sqft: 1800,
        tag: "For Rent"
    },
    {
        id: 3,
        image: prop3,
        price: "$620,000",
        title: "Cozy Family Home",
        location: "Austin, TX",
        beds: 3,
        baths: 3,
        sqft: 2400,
        tag: "For Sale"
    }
];

const Properties = () => {
    return (
        <section className="section" id="properties">
            <div className="container">

                <div className="section-header center">
                    <Reveal delay={0.1}>
                        <div className="subtitle">Best Choices</div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h2 className="title">Popular <span className="text-gradient">Residences</span></h2>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p className="text-muted">Explore our handpicked selection of premium properties.</p>
                    </Reveal>
                </div>

                <div className="property-grid">
                    {properties.map((prop, index) => (
                        <Reveal
                            key={prop.id}
                            width="100%"
                            delay={index * 0.15}
                            variant="slide"
                            direction="up"
                            className="property-card-wrapper"
                        >
                            <div className="property-card glass-card">
                                <div className="card-image-wrapper">
                                    <img src={prop.image} alt={prop.title} className="card-img" />
                                    <span className={`status-tag ${prop.tag === "For Rent" ? "rent" : "sale"}`}>
                                        {prop.tag}
                                    </span>
                                    <div className="card-actions">
                                        <button className="action-btn"><Share2 size={16} /></button>
                                        <button className="action-btn"><Heart size={16} /></button>
                                    </div>
                                </div>

                                <div className="card-content">
                                    <div className="price-tag">{prop.price}</div>
                                    <h3 className="card-title">{prop.title}</h3>
                                    <div className="card-location">
                                        <MapPin size={16} className="icon-sm" />
                                        {prop.location}
                                    </div>

                                    <div className="card-divider"></div>

                                    <div className="card-details">
                                        <div className="detail-item">
                                            <Bed size={18} />
                                            <span>{prop.beds} Beds</span>
                                        </div>
                                        <div className="detail-item">
                                            <Bath size={18} />
                                            <span>{prop.baths} Baths</span>
                                        </div>
                                        <div className="detail-item">
                                            <span>{prop.sqft} sqft</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="center-btn">
                    <button className="btn btn-primary">View All Properties</button>
                </div>

            </div>
        </section>
    );
};

export default Properties;
