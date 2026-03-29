import { motion } from "framer-motion";
import pulpoImg from "@/assets/pulpo.jpg";
import carpaccioImg from "@/assets/carpaccio.jpg";
import postreImg from "@/assets/postre.jpg";
import cevicheImg from "@/assets/ceviche.jpg";
import pescadoImg from "@/assets/pescado.jpg";

const brandCurve = [0.22, 1, 0.36, 1] as const;

interface Dish {
  name: string;
  description: string;
  image: string;
  tag: string;
}

const dishes: Dish[] = [
  {
    name: "Pulpo a la brasa",
    description: "Pulpo de roca de la Bahía, emulsión de adobo gaditano, patata trufada y toque cítrico de nuestra tierra.",
    image: pulpoImg,
    tag: "Plato estrella",
  },
  {
    name: "Tartar de atún rojo",
    description: "Atún rojo de almadraba, aguacate, brotes frescos y un aliño sutil de soja y sésamo.",
    image: carpaccioImg,
    tag: "De la Bahía",
  },
  {
    name: "Carpaccio de gambas de sanlucar",
    description: "Pescado del día marinado en leche de tigre con maíz crujiente y hierbas de la huerta.",
    image: cevicheImg,
    tag: "Temporada",
  },
  {
    name: "Chicharrones",
    description: "Selección del día, a la plancha con limón de la tierra y un hilo de aceite virgen extra.",
    image: pescadoImg,
    tag: "Clásico",
  },
  {
    name: "Tarta de queso payoyo",
    description: "\n",
    image: postreImg,
    tag: "Postre",
  },
];

const MenuSection = () => {
  return (
    <section className="relative bg-card py-[20vh] px-6">
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
              La carta
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
              Platos destacados
            </motion.h2>
          </div>
        </div>

        {/* Dish grid — asymmetric masonry-like */}
        <div className="space-y-24">
          {/* Row 1: Featured large */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: brandCurve }}
            className="group grid grid-cols-12 gap-4 md:gap-8"
          >
            <div className="col-span-12 md:col-span-7 overflow-hidden rounded-sm">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: brandCurve }}
                src={dishes[0].image}
                alt={dishes[0].name}
                className="aspect-[4/5] w-full object-cover grayscale-[0.15] transition-[filter] duration-700 group-hover:grayscale-0"
              />
            </div>
            <div className="col-span-12 md:col-span-5 flex flex-col justify-center py-4 md:p-8">
              <span className="font-body text-xs uppercase tracking-[0.2em] text-primary mb-4">
                {dishes[0].tag}
              </span>
              <h3 className="font-display text-4xl font-light mb-6 md:text-5xl">
                {dishes[0].name}
              </h3>
              <p className="font-body text-base leading-relaxed tracking-tight text-muted-foreground max-w-prose md:text-lg">
                {dishes[0].description}
              </p>
              <div className="mt-8 h-[1px] w-20 bg-primary/30" />
            </div>
          </motion.div>

          {/* Row 2: Two columns */}
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            {dishes.slice(1, 3).map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: brandCurve }}
                className="group col-span-12 md:col-span-6"
              >
                <div className="overflow-hidden rounded-sm">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.7, ease: brandCurve }}
                    src={dish.image}
                    alt={dish.name}
                    className="aspect-[3/4] w-full object-cover grayscale-[0.15] transition-[filter] duration-700 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-6">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-primary">
                    {dish.tag}
                  </span>
                  <h3 className="mt-2 font-display text-3xl font-light">{dish.name}</h3>
                  <p className="mt-3 font-body text-base leading-relaxed tracking-tight text-muted-foreground">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3: Reversed large + small */}
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            {dishes.slice(3, 5).map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: brandCurve }}
                className={`group col-span-12 ${i === 0 ? "md:col-span-5" : "md:col-span-7"}`}
              >
                <div className="overflow-hidden rounded-sm">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.7, ease: brandCurve }}
                    src={dish.image}
                    alt={dish.name}
                    className={`w-full object-cover grayscale-[0.15] transition-[filter] duration-700 group-hover:grayscale-0 ${i === 0 ? "aspect-square" : "aspect-[4/5]"}`}
                  />
                </div>
                <div className="mt-6">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-primary">
                    {dish.tag}
                  </span>
                  <h3 className="mt-2 font-display text-3xl font-light">{dish.name}</h3>
                  {dish.description && (
                    <p className="mt-3 font-body text-base leading-relaxed tracking-tight text-muted-foreground">
                      {dish.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
