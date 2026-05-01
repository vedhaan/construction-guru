import Reveal from "../common/Reveal";
import { DollarSign, BarChart2, CheckCircle2 } from "lucide-react";
import "./Sell.css";
import sellImg from "../../assets/hero-bg.jpg"; // Re-using background or another asset

const Sell = () => {
    return (
        <section className="section sell-section" id="sell">
            <div className="container sell-container">
                <div className="sell-content">
                    <Reveal direction="right" variant="slide">
                        <div className="label-tag">For Sellers</div>
                        <h2 className="title">Sell Your Property <span className="text-gradient">Stress-Free</span></h2>
                        <p className="description">
                            Get the best value for your property with our expert valuation and vast network of buyers. We handle everything from listing to closing.
                        </p>
                    </Reveal>

                    <Reveal direction="right" delay={0.2} width="100%" variant="fade">
                        <div className="sell-features">
                            <div className="sell-feature">
                                <div className="sf-icon"><BarChart2 size={24} /></div>
                                <div>
                                    <h4>Free Valuation</h4>
                                    <p>Get an accurate market price estimation.</p>
                                </div>
                            </div>
                            <div className="sell-feature">
                                <div className="sf-icon"><DollarSign size={24} /></div>
                                <div>
                                    <h4>Best Market Rates</h4>
                                    <p>We ensure you get the maximum profit.</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal direction="right" delay={0.4} variant="scale">
                        <button className="btn btn-primary mt-6">Get A Free Valuation</button>
                    </Reveal>
                </div>

                <div className="sell-image">
                    <Reveal direction="left" delay={0.3} width="100%" variant="zoom">
                        <div className="image-card-glass">
                            <img src={sellImg} alt="Sell your home" />
                            <div className="floating-stat">
                                <span>Sold 500+ Homes this year!</span>
                                <CheckCircle2 color="#10b981" />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Sell;
