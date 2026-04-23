import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import "./footer.css";
import logo from "../../assets/logo_.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* ================= Brand Section ================= */}
        <Reveal>
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img
                src={logo}
                alt="Logo"
                className="logo-image"
              />
              <span className="logo-text">
                <span className="text-gradient">Construction Guru</span>
              </span>
            </Link>

            <p className="footer-desc">
              Building your dreams with precision and excellence since 2008.
              We specialize in residential, commercial, and industrial projects.
            </p>

            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook size={20} />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter size={20} />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={20} />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* ================= Links Section ================= */}
        <div className="footer-links">

          <Reveal delay={0.1}>
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="link-group">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="link-group">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:constructionguru247@gmail.com">
                    constructionguru247@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+918866776836">
                    +91 88667 76836
                  </a><br />
                  <a href="tel:+918866776840">
                    +91 88667 76840
                  </a>
                </li>
                <li>Bhavnagar, Gujarat</li>
              </ul>
            </div>
          </Reveal>

        </div>
      </div>

      {/* ================= Bottom ================= */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
