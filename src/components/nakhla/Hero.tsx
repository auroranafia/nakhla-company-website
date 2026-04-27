import productJar from "@/assets/nakhla-product.png";
import dates from "@/assets/illust-dates.png";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative bg-parchment overflow-hidden"
    >
      {/* Soft golden glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-20 pb-24 lg:pb-32 min-h-[88vh] grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-6 relative z-10">
          <p className="reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-6">
            <span className="h-px w-8 bg-primary" />
            Sirup Kurma Premium
          </p>

          <h1 className="reveal reveal-delay-1 font-display font-extrabold text-accent text-[clamp(2.6rem,5.6vw,4.6rem)] leading-[1.02]">
            Rasa Manis Alami<br/> yang <em className="not-italic text-primary">Sesungguhnya</em>.
          </h1>

          <p className="reveal reveal-delay-2 mt-6 text-lg lg:text-xl italic text-primary/90 font-medium">
            “Manisnya Juara, Sehatnya Nyata.”
          </p>

          <p className="reveal reveal-delay-3 mt-5 max-w-md text-foreground/75 text-base leading-relaxed">
            Setiap tetes NAKHLA™ disuling dari kurma pilihan — tanpa gula tambahan,
            tanpa pengawet. Murni manisnya alam.
          </p>

          <div className="reveal reveal-delay-4 mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#produk"
              className="group inline-flex items-center gap-2 rounded-pill bg-primary text-primary-foreground px-8 py-4 font-semibold shadow-warm hover:bg-primary-hover hover:shadow-glow transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5"
            >
              Lihat Produk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#tentang"
              className="text-sm font-semibold text-accent/80 hover:text-accent underline-offset-4 hover:underline"
            >
              Tentang Nakhla →
            </a>
          </div>

          {/* Trust strip */}
          <div className="reveal reveal-delay-4 mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold tracking-widest uppercase text-foreground/55">
            <span>100% Alami</span>
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span>Halal MUI</span>
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span>Tanpa Pengawet</span>
          </div>
        </div>

        {/* RIGHT — product */}
        <div className="lg:col-span-6 relative">
          <div className="relative mx-auto w-full max-w-[520px] aspect-square">
            {/* warm circular backdrop */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary/30 via-surface to-accent/15 blur-md" />
            <div className="absolute inset-10 rounded-full border border-primary/30" />

            <img
              src={productJar}
              alt="Toples kaca NAKHLA™ Sirup Kurma dengan tutup emas dan label maroon"
              width={520}
              height={520}
              className="reveal reveal-delay-2 relative z-10 w-full h-full object-contain drop-shadow-[0_30px_50px_hsl(43_50%_30%/0.45)]"
            />

            {/* floating dates illustrations */}
            <img
              src={dates}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute -top-6 -left-4 w-28 lg:w-32 opacity-90 float"
              style={{ ['--r' as string]: '-12deg' }}
            />
            <img
              src={dates}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute -bottom-2 -right-4 w-24 lg:w-28 opacity-95 drift"
              style={{ ['--r' as string]: '15deg' }}
            />
            <img
              src={dates}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute top-1/3 -right-10 w-16 lg:w-20 opacity-80 float"
              style={{ ['--r' as string]: '25deg', animationDelay: '1.5s' }}
            />
          </div>
        </div>
      </div>

      {/* bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-surface" />
    </section>
  );
};
