import { useState } from "react";
import productJar from "@/assets/nakhla-product.png";
import dates from "@/assets/illust-dates.png";
import ginger from "@/assets/illust-ginger.png";
import cinnamon from "@/assets/illust-cinnamon.png";

type Variant = {
  id: "original" | "jahe" | "kayu-manis";
  name: string;
  flavor: string;
  price: string;
  illust: string;
  rotate: string;
};

const variants: Variant[] = [
  {
    id: "original",
    name: "Nakhla Original",
    flavor: "Rasa kurma murni — pekat, hangat, sempurna untuk minuman & kue.",
    price: "Rp 65.000",
    illust: dates,
    rotate: "-8deg",
  },
  {
    id: "jahe",
    name: "Nakhla Jahe",
    flavor: "Sentuhan jahe lokal — menghangatkan tubuh di setiap tegukan.",
    price: "Rp 72.000",
    illust: ginger,
    rotate: "10deg",
  },
  {
    id: "kayu-manis",
    name: "Nakhla Kayu Manis",
    flavor: "Aroma kayu manis lembut — manis bermartabat, kaya rempah.",
    price: "Rp 72.000",
    illust: cinnamon,
    rotate: "-6deg",
  },
];

const tabs = [
  { id: "all", label: "Semua" },
  { id: "original", label: "Original" },
  { id: "jahe", label: "Jahe" },
  { id: "kayu-manis", label: "Kayu Manis" },
] as const;

export const Products = () => {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("all");
  const visible = active === "all" ? variants : variants.filter((v) => v.id === active);

  return (
    <section id="produk" className="bg-olive text-olive-foreground py-24 lg:py-32 relative overflow-hidden">
      {/* subtle noise / grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(43 53% 80%) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-4">
              Produk Kami
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-background">
              Varian Kami
            </h2>
            <p className="mt-4 max-w-md text-background/70">
              Tiga karakter rasa, satu komitmen: keaslian dari kurma terbaik.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`rounded-pill px-5 py-2.5 text-sm font-semibold transition-[background-color,color,border-color] duration-300 border ${
                  active === t.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent border-background/25 text-background/80 hover:border-primary hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {visible.map((v, idx) => (
            <article
              key={v.id}
              className="group relative rounded-3xl bg-[hsl(113_15%_20%)] border border-primary/20 overflow-hidden transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* product visual area */}
              <div className="relative h-72 bg-gradient-to-b from-[hsl(113_18%_28%)] to-[hsl(113_18%_18%)] overflow-hidden">
                <div className="absolute inset-x-0 top-1/2 h-32 bg-primary/10 blur-2xl" />
                <img
                  src={productJar}
                  alt={v.name}
                  loading="lazy"
                  width={300}
                  height={300}
                  className="relative z-10 mx-auto h-full w-auto object-contain py-5 transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
                />
                <img
                  src={v.illust}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="absolute bottom-3 right-3 w-24 lg:w-28 opacity-95 float"
                  style={{ ['--r' as string]: v.rotate }}
                />
              </div>

              <div className="p-6 lg:p-7">
                <h3 className="font-display text-2xl text-background mb-2">{v.name}</h3>
                <p className="text-sm text-background/70 leading-relaxed min-h-[3rem]">
                  {v.flavor}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-display font-bold text-primary text-xl tabular-nums">
                    {v.price}
                  </span>
                  <a
                    href="https://wa.me/6281234567890"
                    className="rounded-pill bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-warm hover:bg-primary-hover transition-colors"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
