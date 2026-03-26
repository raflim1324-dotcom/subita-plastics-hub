import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "id" | "en";

const translations = {
  // Header
  "nav.home": { id: "Beranda", en: "Home" },
  "nav.process": { id: "Proses", en: "Process" },
  "nav.materials": { id: "Material", en: "Materials" },
  "nav.products": { id: "Produk", en: "Products" },
  "nav.technology": { id: "Teknologi", en: "Technology" },
  "nav.contact": { id: "Kontak", en: "Contact" },

  // Hero
  "hero.title": {
    id: "Siap Melayani Kebutuhan Manufaktur & Rumah Tangga",
    en: "Ready to Serve Manufacturing & Household Needs",
  },
  "hero.subtitle": {
    id: "Solusi plastik presisi untuk aplikasi otomotif, rumah tangga, dan industri",
    en: "Precision plastic solutions for automotive, household, and industrial applications",
  },
  "hero.cta": { id: "Lihat Proses Kami", en: "Discover Our Process" },

  // Process
  "process.label": { id: "Alur Kerja Kami", en: "Our Workflow" },
  "process.title": { id: "Cara Kami Bekerja", en: "How We Work" },
  "process.step": { id: "Langkah", en: "Step" },
  "process.s1.title": { id: "Perencanaan", en: "Planning" },
  "process.s1.desc": {
    id: "Kami berkolaborasi dengan Anda untuk menentukan spesifikasi, mendesain cetakan, dan merencanakan setiap detail produksi.",
    en: "We collaborate with you to define specifications, design moulds, and plan every detail of production.",
  },
  "process.s2.title": { id: "Pemilihan Material", en: "Material Selection" },
  "process.s2.desc": {
    id: "Memilih resin plastik yang optimal — HD, PP, PVC, Nylon, dan lainnya — disesuaikan dengan kebutuhan produk Anda.",
    en: "Choosing the optimal plastic resin — HD, PP, PVC, Nylon, and more — tailored to your product needs.",
  },
  "process.s3.title": { id: "Manufaktur", en: "Manufacturing" },
  "process.s3.desc": {
    id: "Injection moulding presisi tinggi dengan mesin canggih memastikan output yang konsisten dan sempurna.",
    en: "High-precision injection moulding with state-of-the-art machines ensures consistent, flawless output.",
  },
  "process.s4.title": { id: "Pengemasan", en: "Packing" },
  "process.s4.desc": {
    id: "Inspeksi kualitas yang teliti dan pengemasan profesional, siap dikirim ke lokasi Anda.",
    en: "Careful quality inspection and professional packaging, ready for delivery to your doorstep.",
  },

  // Materials
  "materials.label": { id: "Bahan Baku", en: "Raw Materials" },
  "materials.title": { id: "Material Kami", en: "Our Materials" },
  "materials.spec": { id: "Spesifikasi Bahan", en: "Material Specification" },

  // Products
  "products.label": { id: "Portofolio", en: "Portfolio" },
  "products.title": { id: "Galeri Produk", en: "Product Gallery" },

  // Machines
  "machines.label": { id: "Peralatan", en: "Equipment" },
  "machines.title": { id: "Teknologi Canggih Kami", en: "Our Advanced Technology" },

  // Footer
  "footer.contact": { id: "Hubungi Kami", en: "Contact Us" },
  "footer.office": { id: "Alamat Kantor", en: "Office Address" },
  "footer.workshop": { id: "Alamat Workshop / Pabrik", en: "Workshop / Factory Address" },
  "footer.follow": { id: "Ikuti Kami", en: "Follow Us" },
  "footer.rights": { id: "Hak cipta dilindungi.", en: "All rights reserved." },
  "footer.desc": {
    id: "Menyediakan solusi plastik presisi dengan pengalaman manufaktur lebih dari satu dekade.",
    en: "Delivering precision plastic solutions with over a decade of manufacturing excellence.",
  },
} as const;

type TranslationKey = keyof typeof translations;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("id");
  const t = (key: TranslationKey) => translations[key]?.[lang] ?? key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
