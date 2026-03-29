import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";

const brandCurve = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Plato de pulpo servido en cerámica artesanal"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Circular logo element */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: brandCurve }}
          className="mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-primary/40 md:h-36 md:w-36"
        >
          <span className="font-display text-3xl font-light tracking-tight text-primary-foreground md:text-4xl">
            M
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: brandCurve }}
          className="text-hero font-display font-light text-primary-foreground"
        >
          Meollo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: brandCurve }}
          className="mt-6 max-w-md font-body text-lg tracking-tight text-primary-foreground/80 md:text-xl"
        >
          El corazón del sabor en El Puerto
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <a
            href="#reserva"
            className="inline-block rounded-full border border-primary/50 bg-primary/20 px-8 py-3 font-body text-sm uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm transition-all duration-500 hover:bg-primary/40"
          >
            Reservar mesa
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-[1px] bg-gradient-to-b from-primary-foreground/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
