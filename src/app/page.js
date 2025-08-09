"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import HeroSection from "@/sections/HeroSection";
import GeneratedNamesSection from "@/sections/GenerateNamesSection";
import BrandToolsSection from "@/sections/BrandToolsSection";
import PricingSection from "@/sections/PricingSection";
import HowItWorksSection from "@/sections/HowItWorksSection";
import UseCasesSection from "@/sections/UseCasesSection";
import EmailCaptureSection from "@/sections/EmailCaptureSection";
import FooterSection from "@/sections/FooterSection";


export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [names, setNames] = useState([
    { name: "Brandly", tagline: "Names that stick" },
    { name: "ForgeAI", tagline: "Forge your brand with AI" },
    { name: "Namerly", tagline: "Instant, memorable names" },
    { name: "SparkName", tagline: "Spark ideas into brands" },
    { name: "Mintame", tagline: "Fresh names, minted fast" },
    { name: "EchoTag", tagline: "Names that echo" },
  ]);

  const handleGenerate = () => {
    const seed = Math.random().toString(36).slice(2, 8);
    const newName = {
      name: ["Nova", "Lumen", "Vexa", "Pulse", "Orbit", "Quanta"][Math.floor(Math.random() * 6)] + seed.slice(0, 2),
      tagline: ["Built for creators", "AI-crafted brand names", "Catchy and memorable", "Short, premium, unique"][Math.floor(Math.random() * 4)]
    };
    setNames((p) => [newName, ...p].slice(0, 18));
    gsap.fromTo(".generated-flash", { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out", onComplete: () => gsap.to(".generated-flash", { opacity: 0, y: -12, duration: 0.6, delay: 0.8 }) });
  };

  const handleCopy = (n) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) navigator.clipboard.writeText(n.name);
  };
  const handleLike = (n) => gsap.fromTo(".like-anim", { scale: 0.9 }, { scale: 1.1, duration: 0.18, yoyo: true, repeat: 1 });
  const handleSave = (n) => gsap.fromTo(".save-anim", { scale: 0.95 }, { scale: 1.03, duration: 0.18, yoyo: true, repeat: 1 });
  const handleGenerateLogo = () => {
    const el = document.createElement("div");
    el.className = "logo-gen";
    document.body.appendChild(el);
    gsap.to(el, { opacity: 1, duration: 0.2, onComplete: () => setTimeout(() => el.remove(), 900) });
  };
  const handleSubscribe = () => gsap.to(".subscribe-anim", { scale: 0.98, duration: 0.08, yoyo: true, repeat: 1 });

  useEffect(() => {
    gsap.to("body", { backgroundColor: "#000000" });
  }, []);

  return (
    <div className="min-h-screen text-[#F6F6F6] antialiased" style={{ backgroundColor: "#000000" }}>
      <Header onOpenMobile={() => setMobileOpen(true)} />
      
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main className="pt-20">
        <HeroSection onGenerate={handleGenerate} />
        <div className="max-w-6xl mx-auto px-6">
          <div className="generated-flash fixed top-24 right-8 z-40 pointer-events-none opacity-0">
            <div className="rounded-full px-4 py-2 bg-gradient-to-r from-[#0AB6BC] to-[#045C43] text-black font-semibold shadow-lg">Generated</div>
          </div>
        </div>
        <GeneratedNamesSection names={names} onCopy={handleCopy} onLike={handleLike} onSave={handleSave} />
        <BrandToolsSection onGenerateLogo={handleGenerateLogo} />
        <PricingSection />
        <HowItWorksSection />
        <UseCasesSection />
        <EmailCaptureSection onSubscribe={handleSubscribe} />
        <FooterSection />
      </main>
    </div>
  );
}
