"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ParticleCard({ children, className = "", glowColor = "10,182,188", enableTilt = true }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        gsap.to(el, { rotateX, rotateY, duration: 0.25, transformPerspective: 800, ease: "power3.out" });
      }
      el.style.setProperty("--glow-x", `${(x / rect.width) * 100}%`);
      el.style.setProperty("--glow-y", `${(y / rect.height) * 100}%`);
      el.style.setProperty("--glow-color", glowColor);
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {});
    };
    const handleLeave = () => {
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.4, ease: "power3.out" });
      el.style.setProperty("--glow-intensity", "0");
    };
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enableTilt, glowColor]);
  return (
    <div ref={ref} className={`${className} relative overflow-hidden`} style={{ position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, background: "radial-gradient(circle at var(--glow-x,50%) var(--glow-y,50%), rgba(var(--glow-color,10,182,188), calc(var(--glow-intensity,0) * 0.18)) 0%, transparent 40%)", borderRadius: "16px" }} />
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
}
