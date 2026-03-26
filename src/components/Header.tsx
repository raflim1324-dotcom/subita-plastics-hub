import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinks = [
  { key: "nav.home" as const, href: "#hero" },
  { key: "nav.process" as const, href: "#process" },
  { key: "nav.materials" as const, href: "#materials" },
  { key: "nav.products" as const, href: "#products" },
  { key: "nav.technology" as const, href: "#technology" },
  { key: "nav.contact" as const, href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#hero" className="flex flex-col">
          <span className="text-xl font-display font-bold tracking-tight text-foreground">
            CV. Subita Plastic
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-medium">
            Plastic Injection and Moulding
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 ml-4 border border-border rounded-md overflow-hidden text-xs font-medium">
            <button
              onClick={() => setLang("id")}
              className={`px-2.5 py-1.5 transition-colors ${lang === "id" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </button>
          </div>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-t border-border px-6 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t(l.key)}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-3 border-t border-border mt-2">
            <button onClick={() => setLang("id")} className={`text-sm font-medium ${lang === "id" ? "text-primary" : "text-muted-foreground"}`}>ID</button>
            <span className="text-muted-foreground">|</span>
            <button onClick={() => setLang("en")} className={`text-sm font-medium ${lang === "en" ? "text-primary" : "text-muted-foreground"}`}>EN</button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
