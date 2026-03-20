import Reveal from "../common/Reveal";
import { Clock, Layers, UserCheck, Gem, Timer, Search, Eye } from "lucide-react";
import "./WhyChooseUs.css";

const reasons = [
    {
        icon: <Clock size={32} />,
        title: "18+ Years Experience",
        desc: "Proven track record of excellence since 2008."
    },
    {
        icon: <Layers size={32} />,
        title: "All-in-One Solutions",
        desc: "Complete construction services under one roof."
    },
    {
        icon: <UserCheck size={32} />,
        title: "Expert Team",
        desc: "Professional architects, engineers, and workforce."
    },
    {
        icon: <Gem size={32} />,
        title: "Quality Materials",
        desc: "We use only premium materials for lasting durability."
    },
    {
        icon: <Timer size={32} />,
        title: "On-Time Completion",
        desc: "Committed to delivering projects on schedule."
    },
    {
        icon: <Search size={32} />,
        title: "Transparent Process",
        desc: "Honest pricing and clear communication throughout."
    },
    {
        icon: <Eye size={32} />,
        title: "Personal Supervision",
        desc: "Ensuring client satisfaction at every step."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="section why-choose-us" id="why-choose-us">
            <div className="container">
                <div className="section-header center">
                    <h2 className="title">Why <span className="text-gradient">Choose Us?</span></h2>
                    <p className="text-muted">We are committed to providing the best real estate experience.</p>
                </div>

                <div className="reasons-grid">
                    {reasons.map((item, index) => (
                        <Reveal
                            key={index}
                            width="100%"
                            delay={index * 0.15}
                            className="reason-card-wrapper"
                        >
                            <div className="reason-card">
                                <div className="reason-icon-wrapper">
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
