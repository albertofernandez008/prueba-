import { motion } from "framer-motion";

const brandCurve = [0.22, 1, 0.36, 1] as const;

const AboutSection = () => {
  return (
    <section className="relative py-[20vh] px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: brandCurve }}
              className="font-body text-xs uppercase tracking-[0.2em] text-primary"
            >
              Sobre nosotros
            </motion.span>
          </div>

          <div className="col-span-12 md:col-span-8 md:col-start-4">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: brandCurve }}
              className="font-display text-4xl font-light leading-tight tracking-tight md:text-6xl"
            >
              A 200 metros del Castillo de San Marcos.{" "}
              <span className="text-primary">12 mesas.</span>{" "}
              Un solo núcleo.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: brandCurve }}
              className="mt-10 max-w-2xl font-body text-lg leading-relaxed tracking-tight text-muted-foreground"
            >
              En el corazón del Puerto de Santa María, donde las calles de piedra
              guardan siglos de historia, nace Meollo. Un espacio donde el producto
              de la Bahía de Cádiz se transforma con respeto y sin artificio.
              Cada plato es un diálogo entre la tierra, el mar y las manos que lo preparan.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: brandCurve }}
              className="mt-10 h-[1px] w-24 origin-left bg-primary/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
