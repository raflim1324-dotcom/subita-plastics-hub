import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  { img: product1, label: { id: "Komponen Industri", en: "Industrial Components" } },
  { img: product2, label: { id: "Gear & Komponen Presisi", en: "Precision Gears & Parts" } },
  { img: product3, label: { id: "Wadah Rumah Tangga", en: "Household Containers" } },
  { img: product4, label: { id: "Tutup & Kemasan", en: "Caps & Packaging" } },
];

const ProductsSection = () => {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const { lang, t } = useLanguage();

  const go = (d: number) => {
    setDir(d);
    setIdx((prev) => (prev + d + products.length) % products.length);
  };

  return (
    <section id="products" className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-2">{t("products.label")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{t("products.title")}</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-[16/10] overflow-hidden rounded-xl bg-muted relative">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.img
                key={idx}
                src={products[idx].img}
                alt={products[idx].label[lang]}
                custom={dir}
                initial={{ opacity: 0, x: dir * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -80 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={800}
              />
            </AnimatePresence>
          </div>

          <p className="text-center mt-4 text-sm font-medium text-muted-foreground">
            {products[idx].label[lang]}
          </p>

          <button
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-md"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-md"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? "bg-primary" : "bg-border"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
