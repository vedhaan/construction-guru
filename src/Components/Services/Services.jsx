import Reveal from "../common/Reveal";
import { Hammer, RefreshCw, Sofa, Ruler, Box, Users, Briefcase } from "lucide-react";
import "./Services.css";

// Images
import constructionImg from "../../assets/services/construction.jpg";
import renovationImg from "../../assets/services/renovation.jpg";
import interiorImg from "../../assets/services/interior.jpg";
import planningImg from "../../assets/services/planning.jpg";
import elevationImg from "../../assets/services/elevation.jpg";
import labourImg from "../../assets/services/labour.jpg";
import professionalImg from "../../assets/services/professional.jpg";

// Video
import serviceVideo from "../../assets/services/con_.mp4";

const services = [
    {
        icon: <Hammer size={28} />,
        image: constructionImg,
        title: "Bespoke Construction",
        desc: "Exquisite residential and commercial landmarks crafted from the ground up with unparalleled precision."
    },
    {
        icon: <RefreshCw size={28} />,
        image: renovationImg,
        title: "Artistic Renovation",
        desc: "Breathe new life into your heritage properties with our master remodeling and restoration services."
    },
    {
        icon: <Sofa size={28} />,
        image: interiorImg,
        title: "Luxury Interiors",
        desc: "Where functionality meets high-end aesthetics. We design spaces that reflect your distinction."
    },
    {
        icon: <Ruler size={28} />,
        image: planningImg,
        title: "Architectural Mastery",
        desc: "Visionary planning and structural design that redefine the limits of modern architecture."
    },
    {
        icon: <Box size={28} />,
        image: elevationImg,
        title: "Immersive 3D Viz",
        desc: "Experience your future space before it exists with photorealistic 3D elevations and walkthroughs."
    },
    {
        icon: <Users size={28} />,
        image: labourImg,
        title: "Elite Craftsmanship",
        desc: "A hand-picked workforce of master artisans dedicated to perfection in every brick and beam."
    },
    {
        icon: <Briefcase size={28} />,
        image: professionalImg,
        title: "Global Consulting",
        desc: "Strategic architectural advisory and structural engineering for monumental projects."
    }
];

const Services = () => {
    return (
        <section className="section services" id="services">
            <div className="container">

                {/* Section Header */}
                <div className="section-header center">
                    <div className="subtitle">Our Services</div>
                    <h2 className="title">
                        What We <span className="text-gradient">Do For You</span>
                    </h2>
                </div>

                {/* Service Cards */}
                <div className="services-grid">
                    {services.map((item, index) => (
                        <Reveal key={index} delay={index * 0.1} variant="blur" direction="up">
                            <div className="service-card glass-card">
                                <div className="service-image">
                                    <img src={item.image} alt={item.title} />
                                    <div className="image-overlay"></div>
                                </div>

                                <div className="service-content">
                                    <div className="service-icon-wrapper">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <a href="#" className="service-link">
                                        Discover Detail
                                        <span className="link-arrow"></span>
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Professional Video Experience */}
                <Reveal delay={0.4} variant="zoom" direction="up" width="100%">
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
                                    <span className="overlay-badge">Excellence in Motion</span>
                                    <h3>Building the Future <br /> with Precision</h3>
                                    <p>Watch how we transform architectural visions into physical masterpieces through our dedicated craftsmanship and advanced technology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};

export default Services;
