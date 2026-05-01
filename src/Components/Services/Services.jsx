import Reveal from "../common/Reveal";
import "./Services.css";
import { services } from "../../data/servicesData";

import serviceVideo from "../../assets/services/con_.mp4";
import fallbackImg from "../../assets/services/fallback.png";

const Services = () => {

    const groupedServices = services.reduce((acc, service) => {
        const cat = service.category || "General";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(service);
        return acc;
    }, {});

    return (
        <section className="section services" id="services">
            <div className="container">

                <div className="section-header center">
                    <div className="subtitle">Our Services</div>
                    <h2 className="title">
                        What We <span className="text-gradient">Do For You</span>
                    </h2>
                </div>

                {Object.entries(groupedServices).map(([category, items]) => (
                    <div key={category} className="category-group">

                        {/* <h2 className="category-title">{ }</h2> */}

                        <div className="services-grid">
                            {items.map((item, index) => (
                                <div key={index} className="service-card glass-card">

                                    <div className="service-image">
                                        <img
                                            src={item.image || fallbackImg}
                                            alt={item.title}
                                        />
                                    </div>

                                    <div className="service-content">
                                        <div className="service-icon-wrapper">
                                            {item.icon}
                                        </div>

                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>

                                        <a href="#" className="service-link">
                                            Discover Detail
                                        </a>

                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                ))}

                <div className="services-video-container glass-card">
                    <div className="video-wrapper">

                        <video
                            src={serviceVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="styled-video"
                        />

                        <div className="video-overlay">
                            <div className="overlay-content">
                                <span className="overlay-badge">
                                    Excellence in Motion
                                </span>

                                <h3>
                                    Building the Future <br />
                                    with Precision
                                </h3>

                                <p>
                                    Watch how we transform architectural visions into reality.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;