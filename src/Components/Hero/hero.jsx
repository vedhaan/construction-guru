import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Search, MapPin, Home } from "lucide-react";
import "./hero.css";
import logo from "../../assets/logo_.png";

// ✅ Import images correctly
import constructionImg from "../../assets/services/construction.png";
import furnitureImg from "../../assets/services/custom_furniture.png";
import constructionJpg from "../../assets/services/elevation.jpg";

const images = [
  constructionImg,
  furnitureImg,
  constructionJpg,
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Buy");
  const [current, setCurrent] = useState(0);

  // ✅ Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">

      {/* BACKGROUND SLIDER */}
      <div className="hero-bg">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="container hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge_">
            <span className="badge-dot"></span>
            <span className="text-gradient">
              No. 1 Real Estate Agency
            </span>
          </div>

          <h1 className="hero-title">
            Discover Your <br />
            <span className="text-gradient">Dream Life</span> Here
          </h1>

          <p className="hero-desc">
            Experience the pinnacle of luxury living. We connect you with
            verified properties, trusted agents, and your future home.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
            <Link to="/inquiry" className="btn btn-outline">Any  Inquiry</Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">1200+</span>
              <span className="stat-label">Premium Homes</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <span className="stat-num">4500+</span>
              <span className="stat-label">Happy Clients</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <span className="stat-num">100+</span>
              <span className="stat-label">Awards Won</span>
            </div>
          </div>
        </motion.div>

        <img style={{ width: "100%", height: "100%" }} src={logo} alt="logo" className="logo-image" />

      </div>
    </section>
  );
};

export default Hero;