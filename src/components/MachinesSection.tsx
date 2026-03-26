import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import machine1 from "@/assets/machine-1.jpg";
import machine2 from "@/assets/machine-2.jpg";
import machine3 from "@/assets/machine-3.jpg";
import machine4 from "@/assets/machine-4.jpg";

const machines = [
  { img: machine1, label: { id: "Mesin Injection Moulding", en: "Injection Moulding Machine" } },
  { img: machine2, label: { id: "Press Tonase Tinggi", en: "High-Tonnage Press" } },
  { img: machine3, label: { id: "Lini Produksi", en: "Production Line" } },
  { img: machine4, label: { id: "Otomasi Robotik", en: "Robotic Automation" } },
];

const MachinesSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="technology" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-2">{t("machines.label")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{t("machines.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {machines.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[5/4] overflow-hidden rounded-lg bg-muted">
                <img
                  src={m.img}
                  alt={m.label[lang]}
                  loading="lazy"
                  width={800}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="mt-3 text-center text-sm font-medium text-muted-foreground">{m.label[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MachinesSection;
