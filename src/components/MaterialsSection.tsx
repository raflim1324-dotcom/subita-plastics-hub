import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import hdImg from "@/assets/material-hd.jpg";
import pvcImg from "@/assets/material-pvc.jpg";
import ppImg from "@/assets/material-pp.jpg";
import nilonImg from "@/assets/material-nilon.jpg";
import psImg from "@/assets/material-ps.jpg";
import acrylicImg from "@/assets/material-acrylic.jpg";
import sponImg from "@/assets/material-spon.jpg";

const materials = [
  {
    name: "HD",
    img: hdImg,
    spec: {
      id: "HD (High Density Polyethylene): Kuat, tahan kimia, cocok untuk wadah industri, pipa, dan botol.",
      en: "HD (High Density Polyethylene): Strong, chemical resistant, ideal for industrial containers, pipes, and bottles.",
    },
  },
  {
    name: "PVC",
    img: pvcImg,
    spec: {
      id: "PVC (Polyvinyl Chloride): Tahan cuaca, isolasi listrik baik, cocok untuk pipa, kabel, dan profil bangunan.",
      en: "PVC (Polyvinyl Chloride): Weather resistant, good electrical insulation, ideal for pipes, cables, and building profiles.",
    },
  },
  {
    name: "PP",
    img: ppImg,
    spec: {
      id: "PP (Polypropylene): Tahan panas, lentur, cocok untuk wadah makanan, komponen otomotif, dan tekstil.",
      en: "PP (Polypropylene): Heat resistant, flexible, ideal for food containers, automotive parts, and textiles.",
    },
  },
  {
    name: "NILON",
    img: nilonImg,
    spec: {
      id: "Nilon (Polyamide): Sangat kuat dan tahan aus, cocok untuk roda gigi, bearing, dan komponen mekanik.",
      en: "Nylon (Polyamide): Extremely strong and wear resistant, ideal for gears, bearings, and mechanical components.",
    },
  },
  {
    name: "PS",
    img: psImg,
    spec: {
      id: "PS (Polystyrene): Ringan, transparan, mudah dicetak, cocok untuk kemasan, peralatan rumah tangga, dan mainan.",
      en: "PS (Polystyrene): Lightweight, transparent, easy to mould, ideal for packaging, household items, and toys.",
    },
  },
  {
    name: "AS Acrylic",
    img: acrylicImg,
    spec: {
      id: "AS Acrylic (Acrylonitrile Styrene): Transparan, tahan benturan, cocok untuk peralatan rumah tangga dan display.",
      en: "AS Acrylic (Acrylonitrile Styrene): Transparent, impact resistant, ideal for household appliances and displays.",
    },
  },
  {
    name: "Spon",
    img: sponImg,
    spec: {
      id: "Spon (Foam/Busa): Ringan, penyerap getaran, cocok untuk bantalan, insulasi, dan pelindung kemasan.",
      en: "Spon (Foam): Lightweight, shock absorbing, ideal for cushioning, insulation, and protective packaging.",
    },
  },
];

const MaterialsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { lang, t } = useLanguage();

  return (
    <section id="materials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-2">{t("materials.label")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{t("materials.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {materials.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group cursor-pointer"
              onClick={() => setSelected(selected === i ? null : i)}
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-muted relative">
                <img
                  src={m.img}
                  alt={`${m.name} plastic pellets`}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-medium bg-primary/80 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {t("materials.spec")}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-center text-sm font-semibold text-foreground tracking-wide">{m.name}</p>

              <AnimatePresence>
                {selected === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 p-3 bg-section-alt rounded-md text-xs text-muted-foreground leading-relaxed border border-border">
                      {m.spec[lang]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for larger screens - shown on click */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-6 md:hidden"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-background rounded-xl p-6 max-w-sm w-full shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-display font-bold text-foreground">{materials[selected].name}</h3>
                <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground">
                  <X size={18} />
                </button>
              </div>
              <img src={materials[selected].img} alt={materials[selected].name} className="w-full aspect-square object-cover rounded-lg mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed">{materials[selected].spec[lang]}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MaterialsSection;
