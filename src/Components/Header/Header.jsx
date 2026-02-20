import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Header.css";
import logo from "../../assets/logo_.png";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileLinkRefs = useRef([]);
  const logoRef = useRef(null);

  const introTL = useRef(null);
  const menuTL = useRef(null);

  /* ===============================
     INTRO ANIMATION
  =============================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { y: -120, opacity: 0 });

      introTL.current = gsap.timeline({
        defaults: { ease: "power4.out" }
      });

      introTL.current
        .to(headerRef.current, { y: 0, opacity: 1, duration: 1 })
        .from(".logo", { y: -30, opacity: 0, duration: 0.6 }, "-=0.6")
        .from(navRef.current.children, {
          y: -20,
          opacity: 0,
          stagger: 0.08,
          duration: 0.5
        }, "-=0.5");
    });

    return () => ctx.revert();
  }, []);

  /* ===============================
     SCROLL SHRINK EFFECT
  =============================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 50,
        onEnter: () => {
          gsap.to(headerRef.current, {
            height: 70,
            backgroundColor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
            duration: 0.4
          });

          gsap.to(".logo-text, .nav-link, .mobile-toggle", {
            color: "#111",
            duration: 0.3
          });
        },
        onLeaveBack: () => {
          gsap.to(headerRef.current, {
            height: 90,
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            boxShadow: "none",
            duration: 0.4
          });

          gsap.to(".logo-text, .nav-link, .mobile-toggle", {
            color: "#fff",
            duration: 0.3
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  /* ===============================
     MOBILE MENU ANIMATION
  =============================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(mobileMenuRef.current, { x: "100%", opacity: 0 });

      menuTL.current = gsap.timeline({ paused: true });

      menuTL.current
        .to(mobileMenuRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out"
        })
        .from(mobileLinkRefs.current, {
          y: 40,
          opacity: 0,
          stagger: 0.07,
          duration: 0.4
        }, "-=0.4");
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!menuTL.current) return;
    menuOpen ? menuTL.current.play() : menuTL.current.reverse();
  }, [menuOpen]);

  /* ===============================
     LOCK BODY SCROLL
  =============================== */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  /* ===============================
     MAGNETIC LOGO EFFECT
  =============================== */
  useEffect(() => {
    const logoEl = logoRef.current;
    if (!logoEl) return;

    const move = (e) => {
      const bounds = logoEl.getBoundingClientRect();
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;

      gsap.to(logoEl, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3
      });
    };

    const reset = () => {
      gsap.to(logoEl, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1,0.3)"
      });
    };

    logoEl.addEventListener("mousemove", move);
    logoEl.addEventListener("mouseleave", reset);

    return () => {
      logoEl.removeEventListener("mousemove", move);
      logoEl.removeEventListener("mouseleave", reset);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  mobileLinkRefs.current = [];

  return (
    <>
      <header ref={headerRef} className="header">
        <div className="container header-content">

          {/* LOGO */}
          <a href="#" ref={logoRef} className="logo">
            <img src={logo} alt="ConstructionGuru Logo" className="logo-image" />
            <span className="logo-text">
              Construction<span className="text-gradient">Guru</span>
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="desktop-nav">
            <ul className="nav-links" ref={navRef}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* MOBILE TOGGLE */}
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
      <div ref={mobileMenuRef} className="mobile-menu">
        <ul className="mobile-links">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              ref={(el) => (mobileLinkRefs.current[index] = el)}
            >
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.name}
              </a>
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
