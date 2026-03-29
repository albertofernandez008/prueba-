import { motion } from "framer-motion";
import { useState } from "react";

const brandCurve = [0.22, 1, 0.36, 1] as const;

const ReservationSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reserva" className="relative py-[20vh] px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: brandCurve }}
              className="font-body text-xs uppercase tracking-[0.2em] text-primary"
            >
              Reserva
            </motion.span>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-4">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: brandCurve }}
              className="font-display text-4xl font-light tracking-tight md:text-6xl"
            >
              Tu mesa te espera
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: brandCurve }}
            className="col-span-12 md:col-span-5 md:col-start-4"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-primary/40">
                  <span className="font-display text-2xl text-primary">✓</span>
                </div>
                <h3 className="font-display text-2xl font-light">Reserva recibida</h3>
                <p className="mt-3 font-body text-muted-foreground">
                  Te confirmaremos por teléfono o email en breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-2 w-full border-b border-foreground/10 bg-transparent py-3 font-body text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-2 w-full border-b border-foreground/10 bg-transparent py-3 font-body text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    required
                    className="mt-2 w-full border-b border-foreground/10 bg-transparent py-3 font-body text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      Fecha
                    </label>
                    <input
                      type="date"
                      required
                      className="mt-2 w-full border-b border-foreground/10 bg-transparent py-3 font-body text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      Comensales
                    </label>
                    <select
                      required
                      className="mt-2 w-full border-b border-foreground/10 bg-transparent py-3 font-body text-foreground outline-none transition-colors focus:border-primary"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "persona" : "personas"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    rows={3}
                    className="mt-2 w-full resize-none border-b border-foreground/10 bg-transparent py-3 font-body text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full rounded-full bg-foreground py-4 font-body text-sm uppercase tracking-[0.2em] text-background transition-opacity duration-500 hover:opacity-80"
                >
                  Solicitar reserva
                </button>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: brandCurve }}
            className="col-span-12 md:col-span-4"
          >
            <div className="overflow-hidden rounded-sm">
              <iframe
                title="Ubicación de Meollo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.8!2d-6.2222!3d36.5953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDM1JzQzLjEiTiA2wrAxMyczMy41Ilc!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="400"
                style={{ border: 0, filter: "grayscale(0.8) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-6 space-y-2">
              <p className="font-body text-sm text-muted-foreground">
                Centro histórico, El Puerto de Santa María
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Cádiz, España
              </p>
              <p className="mt-4 font-body text-sm text-foreground">
                +34 956 00 00 00
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
