const FooterSection = () => {
  return (
    <footer className="border-t border-foreground/5 bg-card px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-8">
          {/* Logo */}
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30">
                <span className="font-display text-lg text-foreground">M</span>
              </div>
              <span className="font-display text-2xl font-light tracking-tight">
                Meollo
              </span>
            </div>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-muted-foreground">
              El corazón del sabor en el centro histórico de El Puerto de Santa María.
            </p>
          </div>

          {/* Horario */}
          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Horario
            </h4>
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <p>Martes — Sábado</p>
              <p>13:30 — 16:00</p>
              <p>20:30 — 23:30</p>
              <div className="mt-3 h-[1px] w-12 bg-primary/20" />
              <p className="pt-2">Domingo</p>
              <p>13:30 — 16:00</p>
              <div className="mt-3 h-[1px] w-12 bg-primary/20" />
              <p className="pt-2 text-muted-foreground/60">Lunes cerrado</p>
            </div>
          </div>

          {/* Redes */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="font-body text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Síguenos
            </h4>
            <div className="space-y-2 font-body text-sm">
              <a
                href="#"
                className="block text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href="#"
                className="block text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Facebook
              </a>
              <a
                href="#"
                className="block text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-foreground/5 pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Meollo — El Puerto de Santa María, Cádiz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
