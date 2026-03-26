import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImg1 from "@/assets/hero-factory.jpg";
import heroImg2 from "@/assets/hero-factory-2.jpg";
import heroImg3 from "@/assets/hero-factory-3.jpg";
import heroImg4 from "@/assets/hero-factory-4.jpg";

const slides = [heroImg1, heroImg2, heroImg3, heroImg4];

const HeroSection = () => {
  const [idx, setIdx] = useState(0);
  const { t } = useLanguage();

  const next = useCallback(() => setIdx((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={slides[idx]}
          alt="CV. Subita Plastic manufacturing facility"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-foreground/65" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight"
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-light"
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.a
          href="#process"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="inline-block mt-8 px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          {t("hero.cta")}
        </motion.a>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
