import Reveal from "../common/Reveal";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import "Footer.css";
import logo from "../../assets/logo_.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* ================= Brand Section ================= */}
        <Reveal>
          <div className="footer-brand">
            <a href="/" className="logo">
              <img
                src={logo}
                alt="Logo"
                className="logo-image"
              />
              <span className="logo-text">
                <span className="text-gradient">Construction Guru</span>
              </span>
            </a>

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
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
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
                  <a href="mailto:hello@constructionguru.com">
                    hello@constructionguru.com
                  </a>
                </li>
                <li>
                  <a href="tel:+15551234567">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li>Beverly Hills, CA</li>
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
