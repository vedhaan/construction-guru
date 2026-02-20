import { useEffect, useRef, useState } from "react";
import { Search, MapPin, Home } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hero.css";
import heroImg from "../../assets/hero-bg copy.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Buy");

  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const searchRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ============================
      // MASTER INTRO TIMELINE
      // ============================
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" }
      });

      tl.from(bgRef.current, {
        scale: 1.2,
        duration: 2,
        ease: "power3.out"
      })

        .from(".badge", {
          y: 40,
          opacity: 0,
          duration: 0.8
        }, "-=1.5")

        .from(".hero-title", {
          y: 80,
          opacity: 0,
          duration: 1
        }, "-=1.2")

        .from(".hero-desc", {
          y: 40,
          opacity: 0,
          duration: 0.8
        }, "-=0.8")

        .from(".hero-buttons .btn", {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6
        }, "-=0.6")

        .from(".stat-item", {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.6
        }, "-=0.5")

        .from(searchRef.current, {
          y: 80,
          opacity: 0,
          duration: 1
        }, "-=1.2");

      // ============================
      // PARALLAX BACKGROUND
      // ============================
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // ============================
      // SEARCH CARD FLOAT EFFECT
      // ============================
      gsap.to(searchRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // ============================
      // STATS COUNTER ANIMATION
      // ============================
      gsap.from(".stat-num", {
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power1.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%"
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>

      {/* Background */}
      <div className="hero-bg">
        <img ref={bgRef} src={heroImg} alt="Luxury Home" className="hero-img" />
      </div>

      <div className="container hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content" ref={contentRef}>

          <div className="badge">
            <span className="badge-dot"></span>
            <span className="text-gradient">Architects of Distinction</span>
          </div>

          <h1 className="hero-title">
            Crafting <br />
            <span className="text-gradient">Modern Legacies</span>
          </h1>

          <p className="hero-desc">
            Since 2008, we've been the silent partners behind the world's most sophisticated architectural landmarks. Precision, passion, and permanence in every project.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary shadow-glow">Explore Our Portfolio</button>
            <button className="btn btn-outline">Consult Our Experts</button>
          </div>

          <div className="hero-stats" ref={statsRef}>
            <div className="stat-item">
              <span className="stat-num">1200</span>
              <span className="stat-label">Premium Homes</span>
            </div>

            <div className="stat-item">
              <span className="stat-num">4500</span>
              <span className="stat-label">Happy Clients</span>
            </div>

            <div className="stat-item">
              <span className="stat-num">100</span>
              <span className="stat-label">Awards Won</span>
            </div>
          </div>
        </div>

        {/* SEARCH CARD */}
        <div className="hero-search-wrapper" ref={searchRef}>
          <div className="glass-card search-card">

            <div className="search-tabs">
              {["planning", "construction", "intiral"].map((tab) => (
                <button
                  key={tab}
                  className={`tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="search-inputs">
              <div className="input-group">
                <MapPin size={20} />
                <input type="text" placeholder="Bhavnagar, Zip..." />
              </div>

              <div className="input-group">
                <Home size={20} />
                <select>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Office</option>
                </select>
              </div>

              <button className="btn btn-primary search-action-btn">
                <Search size={18} />
                Search
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
