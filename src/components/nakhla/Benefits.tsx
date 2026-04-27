import { Zap, Droplet, Leaf, HeartPulse } from "lucide-react";
import productJar from "@/assets/nakhla-product.png";
import dates from "@/assets/illust-dates.png";

const benefits = [
  { icon: Zap, title: "Energi Alami", desc: "Karbohidrat kompleks untuk stamina sepanjang hari." },
  { icon: Droplet, title: "Kaya Zat Besi", desc: "Membantu pembentukan sel darah merah secara alami." },
  { icon: Leaf, title: "Tanpa Pengawet", desc: "Murni — apa adanya, dari pohon hingga meja Anda." },
  { icon: HeartPulse, title: "Indeks Glikemik Rendah", desc: "Manis yang lebih bersahabat untuk metabolisme tubuh." },
];

export const Benefits = () => {
  return (
    <section id="manfaat" className="bg-background py-24 lg:py-32 relative overflow-hidden">
      <img
        src={dates}
        alt=""
        aria-hidden
        className="hidden lg:block absolute -left-10 top-20 w-40 opacity-40 float"
        style={{ ['--r' as string]: '-18deg' }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* product visual */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm aspect-square">
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-surface via-primary/20 to-accent/15" />
              <img
                src={productJar}
                alt="NAKHLA Sirup Kurma"
                loading="lazy"
                className="relative w-full h-full object-contain drop-shadow-[0_30px_40px_hsl(43_50%_30%/0.4)]"
              />
            </div>
          </div>

          {/* benefits list */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-4">
              Manfaat Kurma
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-accent mb-12">
              Setiap sendok, sebuah kebaikan.
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="group flex gap-4 rounded-2xl bg-surface/60 p-5 shadow-soft hover:shadow-warm transition-[box-shadow,transform] duration-500 hover:-translate-y-0.5"
                >
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-warm">
                    <b.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-accent mb-1">{b.title}</h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
