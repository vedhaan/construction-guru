import Reveal from "./Reveal";
import "./PageHero.css";

const PageHero = ({ title, subtitle, image }) => {
    return (
        <div className="page-hero">
            <div className="page-hero-bg">
                <img src={image} alt={title} />
                <div className="page-hero-overlay"></div>
            </div>

            <div className="container">
                <div className="page-hero-content">
                    <Reveal variant="fade" direction="down">
                        <span className="page-hero-subtitle">{subtitle}</span>
                    </Reveal>
                    <Reveal variant="fade" direction="up" delay={0.2}>
                        <h1 className="page-hero-title">{title}</h1>
                    </Reveal>
                    <Reveal variant="fade" direction="up" delay={0.4}>
                        <div className="page-hero-breadcrumb">
                            <span>Home</span> / <span className="active">{title}</span>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default PageHero;
