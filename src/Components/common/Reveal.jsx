import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveal Component (Ultra Pro GSAP Version)
 * 
 * Wraps children in a div that animates into view when scrolled to.
 * Supports multiple animation variants for a premium feel.
 * 
 * Props:
 * @param {ReactNode} children - The content to animate.
 * @param {number} delay - Delay before animation starts (in seconds).
 * @param {string} width - Width of the wrapper (default: "fit-content").
 * @param {string} className - Additional classes for the wrapper.
 * @param {string} direction - Direction of the reveal ("up", "down", "left", "right"). Default: "up".
 * @param {string} variant - Animation style: "fade" | "slide" | "zoom" | "blur" | "scale". Default: "slide".
 * @param {number} duration - Duration of the animation. Default: 1.
 * @param {number} yOffset - Distance to move on Y axis. Default: 40.
 * @param {number} xOffset - Distance to move on X axis. Default: 40.
 * @param {boolean} once - If true, implementation plays only once. Default: false.
 */
const Reveal = ({
  children,
  width = "fit-content",
  delay = 0,
  className = "",
  direction = "up",
  variant = "slide",
  duration = 1,
  yOffset = 40,
  xOffset = 40,
  once = false
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let x = 0;
    let y = 0;
    let scale = 1;
    let opacity = 0;
    let filter = "none";

    // Direction Logic
    if (variant === "slide" || variant === "fade") {
      switch (direction) {
        case "up": y = yOffset; break;
        case "down": y = -yOffset; break;
        case "left": x = xOffset; break;
        case "right": x = -xOffset; break;
        default: y = yOffset;
      }
    }

    // Variant Logic
    let fromVars = { autoAlpha: 0 };

    if (variant === "slide") {
      fromVars = { ...fromVars, x, y };
    } else if (variant === "zoom") {
      fromVars = { ...fromVars, scale: 0.8, x, y };
    } else if (variant === "scale") {
      fromVars = { ...fromVars, scale: 1.2 };
    } else if (variant === "blur") {
      fromVars = { ...fromVars, filter: "blur(10px)", y: 20 };
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        fromVars,
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: once ? "play none none none" : "play none none reverse"
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [direction, delay, duration, yOffset, xOffset, variant, once]);

  return (
    <div ref={ref} className={className} style={{ width, opacity: 0 }}>
      {children}
    </div>
  );
};

export default Reveal;
