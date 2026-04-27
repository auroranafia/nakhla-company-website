import { Leaf, ShieldCheck, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "Bahan 100% Alami",
    desc: "Diolah dari kurma premium pilihan, tanpa gula tambahan maupun bahan sintetis.",
  },
  {
    icon: ShieldCheck,
    title: "Tanpa Pengawet",
    desc: "Proses higienis modern menjaga rasa dan nutrisi tetap utuh — apa adanya.",
  },
  {
    icon: HeartHandshake,
    title: "Kaya Nutrisi",
    desc: "Sumber energi alami, zat besi, dan serat — manis yang menyehatkan keluarga.",
  },
];

export const WhyUs = () => {
  return (
    <section className="bg-cream-texture py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-4">
            Mengapa Nakhla?
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-accent">
            Manis yang berbeda,<br/> dari pohon ke meja Anda.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative p-2"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-background shadow-soft mb-6 group-hover:shadow-warm transition-[box-shadow] duration-500">
                <it.icon className="h-7 w-7 text-primary" strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-xl lg:text-2xl mb-3 text-accent">
                {it.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed text-[0.97rem] max-w-xs">
                {it.desc}
              </p>
              <span className="block mt-6 text-xs font-bold tracking-widest text-primary/70">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
