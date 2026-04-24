import Reveal from "../common/Reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-container">

        <div className="contact-info">
          <Reveal direction="right" variant="slide">
            <div>
              <div className="subtitle">Contact Us</div>
              <h2 className="title">Get In <span className="text-gradient">Touch</span></h2>
              <p className="description">
                Have questions or ready to start your journey? We are here to help you every step of the way.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2} width="100%" variant="fade">
            <div className="info-items">
              <div className="info-item glass-card">
                <div className="icon-box"><Phone size={24} /></div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:918866776836" target="_blank" rel="noopener noreferrer">
                    +91 88667 76836
                  </a><br />
                  <a href="tel:918866776840" target="_blank" rel="noopener noreferrer">
                    +91 88667 76840
                  </a>
                </div>
              </div>
              <div className="info-item glass-card">
                <div className="icon-box"><Mail size={24} /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:constructionguru247@gmail.com" target="_blank" rel="noopener noreferrer">
                    constructionguru247@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </Reveal>
        </div>

        <div className="contact-form-wrapper glass-card">
          <Reveal direction="left" delay={0.2} width="100%" variant="scale">
            <form className="contact-form" action="https://formspree.io/f/xwvrzlqj" method="POST">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="How can we help?" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary full-width">
                Send Message <Send size={18} />
              </button>
            </form>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Contact;
