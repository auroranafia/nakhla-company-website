import { Instagram, Youtube, MessageCircle } from "lucide-react";

const socials = [
  {
    href: "https://www.instagram.com/nakhlaofficial/",
    label: "Instagram NAKHLA",
    Icon: Instagram,
  },
  {
    href: "https://youtu.be/VkKR2kSBIXM?si=TVXG8TZZAK4QvR1k",
    label: "YouTube NAKHLA",
    Icon: Youtube,
  },
  {
    href: "https://wa.me/6282142592378",
    label: "WhatsApp NAKHLA",
    Icon: MessageCircle,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 text-center">
        <a href="#beranda" className="inline-flex items-baseline gap-1">
          <span className="font-display font-extrabold text-4xl lg:text-5xl text-primary tracking-tight">
            NAKHLA
          </span>
          <span className="text-primary text-sm font-semibold align-super">™</span>
        </a>
        <p className="mt-3 italic text-surface/80 text-lg">
          “Manisnya Juara, Sehatnya Nyata.”
        </p>

        <nav className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-surface/70">
          <a href="#beranda" className="hover:text-primary transition-colors">Beranda</a>
          <a href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</a>
          <a href="#produk" className="hover:text-primary transition-colors">Produk</a>
          <a href="#manfaat" className="hover:text-primary transition-colors">Manfaat</a>
          <a href="#kontak" className="hover:text-primary transition-colors">Hubungi Kami</a>
        </nav>

        <div className="mt-10 flex justify-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface/25 text-surface/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-surface/15 text-xs text-surface/60 tracking-wider">
          © 2025 NAKHLA™ · Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
};
