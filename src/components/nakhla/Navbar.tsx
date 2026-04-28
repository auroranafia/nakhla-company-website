import { Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#produk", label: "Produk" },
  { href: "#manfaat", label: "Manfaat" },
  { href: "#kontak", label: "Hubungi Kami" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md transition-[box-shadow,border-color] duration-500 border-b ${
        scrolled ? "border-primary/40 shadow-soft" : "border-primary/15"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 h-20">
        <a href="#beranda" className="flex items-baseline gap-1">
          <span className="font-display font-extrabold text-2xl tracking-tight text-primary">
            NAKHLA
          </span>
          <span className="text-primary text-xs font-semibold align-super">™</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/6282142592378"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft hover:bg-accent/90 transition-colors"
        >
          <Phone className="h-4 w-4" />
          Pesan Sekarang
        </a>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-accent"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-primary/15 bg-background">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/6282142592378"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft mt-2"
            >
              <Phone className="h-4 w-4" /> Pesan Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
