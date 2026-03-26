import { motion } from "framer-motion";
import { ClipboardList, Layers, Factory, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: ClipboardList, title: t("process.s1.title"), desc: t("process.s1.desc") },
    { icon: Layers, title: t("process.s2.title"), desc: t("process.s2.desc") },
    { icon: Factory, title: t("process.s3.title"), desc: t("process.s3.desc") },
    { icon: Package, title: t("process.s4.title"), desc: t("process.s4.desc") },
  ];

  return (
    <section id="process" className="py-24 bg-section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-2">{t("process.label")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{t("process.title")}</h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-24 h-24 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 relative z-10">
                <step.icon className="text-primary" size={32} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-semibold text-primary mb-1">{t("process.step")} {i + 1}</span>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[250px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
