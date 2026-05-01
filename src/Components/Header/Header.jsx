import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo_.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // for active link

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container header-content">

          {/* LOGO */}
          <Link to="/" className="logo">
            <img src={logo} alt="logo" className="logo-image" />
            <span className="logo-text">
              Construction<span className="text-gradient">Guru</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    to={href}
                    className={location.pathname === href ? "active" : ""}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`hamburger ${menuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <Link to={href} onClick={() => setMenuOpen(false)}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Header;