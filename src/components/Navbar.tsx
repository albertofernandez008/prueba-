import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Sobre nosotros", href: "#sobre" },
    { label: "Carta", href: "#carta" },
    { label: "Reservar", href: "#reserva" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 md:px-10 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_hsl(var(--foreground)/0.05)]"
            : "bg-transparent"
        }`}
      >
        <a href="#" className="flex items-center gap-3">
          <div className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-500 ${scrolled ? "border-primary/30" : "border-primary-foreground/30"}`}>
            <span className={`font-display text-sm transition-colors duration-500 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>M</span>
          </div>
          <span className={`font-display text-lg font-light tracking-tight transition-colors duration-500 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Meollo
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex flex-col gap-1.5 md:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Menu"
        >
          <span className={`block h-[1px] w-5 transition-all duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""} ${scrolled ? "bg-foreground" : "bg-primary-foreground"}`} />
          <span className={`block h-[1px] w-5 transition-all duration-300 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""} ${scrolled ? "bg-foreground" : "bg-primary-foreground"}`} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-lg md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl font-light text-foreground"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
