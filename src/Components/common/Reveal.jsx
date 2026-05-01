import React, { useEffect, useRef, useState } from 'react';
import './Reveal.css';

/**
 * Reveal Component (Lightweight CSS Version)
 * 
 * Wraps children in a div that animates into view when scrolled to using IntersectionObserver.
 */
const Reveal = ({
  children,
  width = "fit-content",
  delay = 0,
  className = "",
  direction = "up",
  variant = "slide",
  duration = 0.8,
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [once]);

  // Map direction and variant to simple classes
  let variantClass = variant;
  if (variant === "slide") {
    variantClass = `slide-${direction}`;
  }

  return (
    <div
      ref={ref}
      className={`reveal-container ${variantClass} ${isVisible ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
      style={{
        width,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
