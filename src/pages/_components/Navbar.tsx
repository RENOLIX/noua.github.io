import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage, useSiteContent } from "@/components/providers/language";
import type { Locale } from "@/lib/site-content";

type LanguageSelectorProps = {
  inverted?: boolean;
  compact?: boolean;
};

function LanguageSelector({ inverted = false, compact = false }: LanguageSelectorProps) {
  const { locale, options, setLocale } = useLanguage();
  const { nav } = useSiteContent();

  return (
    <label className="relative block">
      <span className="sr-only">{nav.languageLabel}</span>
      <Globe
        className={`pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 ${
          inverted ? "text-white/75" : "text-muted-foreground"
        }`}
      />
      <select
        aria-label={nav.languageLabel}
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className={`h-10 appearance-none rounded-full border pl-9 pr-9 text-sm font-medium outline-none transition-colors ${
          compact ? "w-full" : "min-w-[132px]"
        } ${
          inverted
            ? "border-white/30 bg-white/10 text-white backdrop-blur-sm"
            : "border-border bg-white text-foreground"
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className={`pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 ${
          inverted ? "text-white/75" : "text-muted-foreground"
        }`}
      />
    </label>
  );
}

export default function Navbar() {
  const { nav } = useSiteContent();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const logoImage = `${import.meta.env.BASE_URL}images/brand/nouaouria-logo.png`;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);

    if (href.startsWith("/")) {
      navigate(href);
      return;
    }

    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: href });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isSolid = scrolled || location.pathname !== "/";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSolid
            ? "bg-white/96 shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoImage}
                alt="Nouaouria Export"
                className="h-12 w-auto object-contain"
              />
              <div className="mt-3 flex flex-col justify-center">
                <span
                  className={`block font-serif text-sm leading-none font-bold transition-colors ${
                    isSolid ? "text-foreground" : "text-white"
                  }`}
                >
                  NOUAOURIA
                </span>
                <span
                  className={`text-[9px] font-medium uppercase tracking-widest transition-colors ${
                    isSolid ? "text-muted-foreground" : "text-white/70"
                  }`}
                >
                  {nav.brandSubline}
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {nav.links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`cursor-pointer text-sm font-medium transition-colors ${
                    isSolid
                      ? "text-foreground/80 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <LanguageSelector inverted={!isSolid} />
              <Button
                onClick={() => handleNav("#contact")}
                className="cursor-pointer bg-primary px-5 font-medium text-white hover:bg-primary/90"
              >
                {nav.cta}
              </Button>
            </div>

            <button
              className={`rounded-lg p-2 transition-colors md:hidden ${
                isSolid ? "text-foreground" : "text-white"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-border bg-white px-6 py-6 shadow-xl"
          >
            <nav className="flex flex-col gap-4">
              <LanguageSelector compact />
              {nav.links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="cursor-pointer text-start text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNav("#contact")}
                className="mt-2 w-full cursor-pointer bg-primary text-white"
              >
                {nav.cta}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
