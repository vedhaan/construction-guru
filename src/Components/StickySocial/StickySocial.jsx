import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./StickySocial.css";

const StickySocial = () => {
    return (
        <div className="sticky-social">

            {/* WhatsApp */}
            <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon whatsapp"
            >
                <FaWhatsapp />
            </a>

            {/* Facebook */}
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
            >
                <FaFacebookF />
            </a>

            {/* Instagram */}
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
            >
                <FaInstagram />
            </a>

        </div>
    );
};

export default StickySocial;
