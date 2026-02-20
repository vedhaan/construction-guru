import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import "./About.css";
import aboutImg from "../../assets/about_img.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <div className="about-grid">

          {/* ================= IMAGE BLOCK ================= */}
          <div className="about-image-block">
            <div className="image-wrapper">
              <img
                src={aboutImg}
                alt="Construction Guru"
                className="main-img"
              />

              <div className="experience-overlay">
                <span className="years">18+</span>
                <span className="label">Years Experience</span>
              </div>
            </div>

            <div className="decorative-dots"></div>
          </div>

          {/* ================= CONTENT BLOCK ================= */}
          <div className="about-content-modern">

            <div className="badge-modern">
              About Construction Guru
            </div>

            <h2 className="display-title">
              Building <span className="text-highlight">Dreams</span> Into
              Landmark Structures
            </h2>

            <p className="lead-text">
              Construction Guru is a leading construction company delivering
              premium residential and commercial projects since 2008.
            </p>

            <p className="secondary-text">
              We provide complete construction solutions from concept to
              completion with precision, transparency, and innovation.
            </p>

            {/* ================= STATS ================= */}
            <div className="stats-row">

              <div className="stat-item">
                <div className="stat-value">250+</div>
                <div className="stat-label">Projects Completed</div>
              </div>

              <div className="stat-item">
                <div className="stat-value">180+</div>
                <div className="stat-label">Happy Clients</div>
              </div>

              <div className="stat-item">
                <div className="stat-value">25+</div>
                <div className="stat-label">Expert Team</div>
              </div>

              <div className="stat-item">
                <div className="stat-value">18+</div>
                <div className="stat-label">Years Experience</div>
              </div>

            </div>

            {/* ================= CTA BUTTON ================= */}
            <button className="cta-button-gold">
              Explore Our Projects <ArrowRight size={20} />
            </button>

          </div>
        </div>

        {/* ================= MVC SECTION ================= */}
        <div className="mvc-row">

          <div className="mvc-modern-card">
            <div className="mvc-icon-wrap mission">
              <Target size={26} />
            </div>
            <h3>Our Mission</h3>
            <p>
              Deliver innovative, reliable, and high-quality construction
              solutions while maintaining transparency and integrity.
            </p>
          </div>

          <div className="mvc-modern-card">
            <div className="mvc-icon-wrap vision">
              <Eye size={26} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To become a trusted name in the construction industry known for
              excellence, modern design, and long-term value.
            </p>
          </div>

          <div className="mvc-modern-card">
            <div className="mvc-icon-wrap commitment">
              <Heart size={26} />
            </div>
            <h3>Our Commitment</h3>
            <p>
              We build not just structures, but strong client relationships
              based on trust, quality, and performance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
