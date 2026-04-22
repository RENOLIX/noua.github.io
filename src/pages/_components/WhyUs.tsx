import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ShieldCheck, Truck, PackageCheck, Globe, Leaf, Award } from "lucide-react";
import { competitiveAdvantages } from "@/lib/zores-content";

const icons = [ShieldCheck, Truck, PackageCheck, Globe, Leaf, Award];
const styles = [
  { color: "text-rose-700", bg: "bg-rose-50" },
  { color: "text-amber-700", bg: "bg-amber-50" },
  { color: "text-slate-700", bg: "bg-slate-50" },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="advantages" ref={ref} className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Nos avantages competitifs
            </span>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Un partenaire fiable pour vos achats
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Basee a Tiaret, Nouaouria Export combine lecture commerciale,
              coordination logistique et souplesse produit pour servir des
              marches varies avec une execution claire.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Notre approche repose sur la consolidation multi-secteurs, la
              preparation export et une relation B2B simple a piloter, meme
              lorsque les besoins couvrent plusieurs familles de produits.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
                <ShieldCheck className="h-7 w-7 text-white" />
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-foreground">
                  Nouaouria Export
                </div>
                <div className="text-sm text-muted-foreground">
                  Tiaret, Algerie - Export multi-secteurs
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {competitiveAdvantages.map((item, i) => {
              const Icon = icons[i % icons.length];
              const style = styles[i % styles.length];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${style.bg}`}
                  >
                    <Icon className={`h-5 w-5 ${style.color}`} />
                  </div>
                  <h4 className="mb-1 text-sm font-semibold capitalize text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
