import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, Building, Building2, Trees } from "lucide-react";
import "./Categories.css";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { icon: <Home size={32} />, name: "Residential", count: "120 Properties" },
  { icon: <Building size={32} />, name: "Apartments", count: "85 Properties" },
  { icon: <Building2 size={32} />, name: "Commercial", count: "40 Properties" },
  { icon: <Trees size={32} />, name: "Land", count: "15 Properties" },
];

const Categories = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Filter out null refs
      const cards = cardsRef.current.filter(el => el);

      // 🔥 Stagger Scroll Animation
      gsap.fromTo(cards,
        {
          y: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 💎 Card Hover 3D Effect (Enhanced)
      cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const { left, top, width, height } = card.getBoundingClientRect();
          const x = (e.clientX - left - width / 2) / 10;
          const y = (e.clientY - top - height / 2) / 10;

          gsap.to(card, {
            rotationY: x,
            rotationX: -y,
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transformPerspective: 1000,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          });
        });
      });

    }, sectionRef);


    return () => ctx.revert();
  }, []);

  return (
    <section
      className="section categories-section"
      id="categories"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-header center">
          <h2 className="title">
            Explore <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-muted">
            Find the property type that suits your lifestyle.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="category-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="cat-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
