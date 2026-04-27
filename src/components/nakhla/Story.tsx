import storyImg from "@/assets/story-palm.jpg";
import productJar from "@/assets/nakhla-product.png";
import { Sprout, BadgeCheck, MapPin, Sparkles } from "lucide-react";

const badges = [
  { icon: Sprout, label: "Alami" },
  { icon: BadgeCheck, label: "Halal" },
  { icon: MapPin, label: "Lokal" },
  { icon: Sparkles, label: "Premium" },
];

export const Story = () => {
  return (
    <section id="tentang" className="bg-background">
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* LEFT — image */}
        <div className="relative min-h-[420px] lg:min-h-full overflow-hidden">
          <img
            src={storyImg}
            alt="Pohon kurma berkilau di bawah cahaya matahari emas"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-transparent to-background/20" />

          {/* floating jar */}
          <img
            src={productJar}
            alt=""
            aria-hidden
            loading="lazy"
            className="hidden lg:block absolute -right-12 bottom-10 w-44 drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)] float"
          />
        </div>

        {/* RIGHT — story */}
        <div className="bg-background flex items-center">
          <div className="px-6 py-16 lg:px-16 lg:py-24 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-5">
              Tentang Nakhla
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-accent leading-[1.1] mb-7">
              Lahir dari kecintaan pada kurma terbaik.
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Nakhla lahir dari kecintaan pada kurma berkualitas terbaik. Kami
                percaya bahwa <span className="text-accent font-semibold">manis yang sesungguhnya</span> berasal
                dari alam — bukan dari bahan kimia.
              </p>
              <p>
                Setiap botol kami suling dengan sabar, mempertahankan aroma, warna,
                dan kebaikan yang telah dimuliakan selama berabad-abad.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-pill bg-surface px-4 py-2 text-sm font-semibold text-accent border border-primary/30"
                >
                  <b.icon className="h-4 w-4 text-primary" strokeWidth={1.8} />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
