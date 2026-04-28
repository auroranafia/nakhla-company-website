import { PlayCircle } from "lucide-react";

export const VideoSection = () => {
  return (
    <section id="video" className="bg-surface py-20 lg:py-28 relative overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-5">
            <PlayCircle className="h-4 w-4" /> Lihat Video Produk
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-accent leading-[1.1] mb-5 text-balance">
            Saksikan kebaikan Nakhla dalam setiap tetes.
          </h2>
          <p className="text-foreground/75 leading-relaxed">
            Kenali lebih dekat sirup kurma premium Nakhla — dari kebun kurma pilihan
            hingga ke meja keluarga Anda.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-soft border border-primary/20 bg-background">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/VkKR2kSBIXM"
              title="Video Produk Nakhla — Sirup Kurma Premium"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
