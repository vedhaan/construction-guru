import Reveal from "../common/Reveal";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Benefits.css";
import benefitImg from "../../assets/prop-2.jpg";

const benefitsList = [
    "Easy Payment Plans",
    "High Return on Investment",
    "Prime Locations",
    "Top-Notch Security",
    "Modern Amenities",
    "Eco-Friendly Environment",
];

const Benefits = () => {

    const navigate = useNavigate(); // navigation hook

    return (
        <section className="section benefits" id="benefits">
            <div className="container benefits-container">

                <div className="benefits-content">

                    <Reveal direction="left" variant="slide">
                        <h2 className="title">
                            Property <span className="text-gradient">Benefits</span>
                        </h2>
                    </Reveal>

                    <Reveal direction="left" delay={0.2} variant="blur">
                        <p className="description">
                            Investing in our properties comes with a multitude of advantages
                            designed to secure your future and enhance your lifestyle.
                        </p>
                    </Reveal>

                    <div className="benefits-list">
                        {benefitsList.map((item, index) => (
                            <Reveal
                                key={index}
                                delay={0.3 + index * 0.1}
                                direction="up"
                                variant="fade"
                                width="100%"
                            >
                                <div className="benefit-item-row">
                                    <CheckCircle size={20} className="check-icon" />
                                    <span>{item}</span>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal direction="up" delay={0.6} variant="scale">
                        <button
                            className="btn btn-primary mt-4"
                            onClick={() => navigate("/contact")}
                        >
                            Learn More <ArrowRight size={20} />
                        </button>
                    </Reveal>

                </div>

                <div className="benefits-image">
                    <Reveal direction="right" delay={0.2} width="100%" variant="zoom">
                        <div className="img-frame-accent">
                            <img src={benefitImg} alt="Luxury Living" />
                        </div>
                    </Reveal>
                </div>

            </div>
        </section>
    );
};

export default Benefits;