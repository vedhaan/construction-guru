import Reveal from "../common/Reveal";
import { ArrowRight } from "lucide-react";
import "./Rent.css";
import rent1 from "../../assets/prop-1.jpg";
import rent2 from "../../assets/prop-2.jpg";

const Rent = () => {
    return (
        <section className="section rent-section" id="rent">
            <div className="container">
                <div className="rent-header">
                    <div className="rh-content">
                        <h2 className="title">Properties For <span className="text-gradient">Rent</span></h2>
                        <p className="text-muted">Find your temporary home from our curated rental list.</p>
                    </div>
                    <button className="btn btn-outline">View All Rentals <ArrowRight size={18} /></button>
                </div>

                <div className="rent-grid">
                    {/* Featured Rental Big Card */}
                    <Reveal
                        className="rent-card featured"
                        direction="right"
                        variant="slide"
                        width="100%"
                    >
                        <img src={rent1} alt="Luxury Apartment" />
                        <div className="rent-details">
                            <span className="price">$1,200 / mo</span>
                            <h3>Modern City Apartment</h3>
                            <p>2 Beds • 2 Baths</p>
                        </div>
                    </Reveal>

                    {/* Secondary Cards */}
                    <Reveal
                        className="rent-stack"
                        direction="left"
                        delay={0.2}
                        variant="fade"
                        width="100%"
                    >
                        <div className="rent-card small">
                            <img src={rent2} alt="Studio" />
                            <div className="rent-info">
                                <h4>Cozy Studio</h4>
                                <span>$800 / mo</span>
                            </div>
                        </div>
                        <div className="rent-cta-card">
                            <h3>Looking for something specific?</h3>
                            <p>We help you find rentals that fit your budget.</p>
                            <button className="btn btn-primary small">Contact Rental Team</button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Rent;
