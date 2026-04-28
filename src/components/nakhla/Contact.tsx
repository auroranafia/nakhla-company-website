import { useState } from "react";
import { MessageCircle, Instagram, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [form, setForm] = useState({ nama: "", hp: "", pesan: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nama || !form.hp) {
      toast({ title: "Mohon lengkapi nama dan nomor HP.", variant: "destructive" });
      return;
    }
    const text = encodeURIComponent(
      `Halo Nakhla, saya ${form.nama} (${form.hp}). ${form.pesan}`
    );
    window.open(`https://wa.me/6282142592378?text=${text}`, "_blank");
  };

  return (
    <section id="kontak" className="bg-cream-texture py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-4">
              Hubungi Kami
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-accent leading-[1.1] mb-6">
              Mari berbincang tentang kurma.
            </h2>
            <p className="text-foreground/75 max-w-md leading-relaxed mb-10">
              Pesan langsung, tanya rasa, atau jadilah reseller resmi kami.
              Tim Nakhla siap membantu.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/6282142592378"
                className="flex items-center gap-3 rounded-pill bg-[hsl(140_55%_38%)] text-white px-7 py-4 font-semibold shadow-warm hover:bg-[hsl(140_55%_32%)] transition-colors w-fit"
              >
                <MessageCircle className="h-5 w-5" />
                Chat via WhatsApp
              </a>
              <a
                href="https://www.instagram.com/nakhlaofficial/"
                className="flex items-center gap-3 rounded-pill border-2 border-primary text-accent px-7 py-3.5 font-semibold hover:bg-primary hover:text-primary-foreground transition-colors w-fit"
              >
                <Instagram className="h-5 w-5" />
                @nakhlaofficial
              </a>
            </div>
          </div>

          {/* form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-background p-8 lg:p-10 shadow-warm border border-primary/20"
          >
            <div className="space-y-5">
              <Field
                label="Nama"
                value={form.nama}
                onChange={(v) => setForm({ ...form, nama: v })}
                placeholder="Nama lengkap Anda"
              />
              <Field
                label="Nomor HP"
                value={form.hp}
                onChange={(v) => setForm({ ...form, hp: v })}
                placeholder="08xx xxxx xxxx"
                type="tel"
              />
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-accent/80 mb-2">
                  Pesan
                </label>
                <textarea
                  value={form.pesan}
                  onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                  rows={4}
                  placeholder="Saya ingin pesan varian..."
                  className="w-full rounded-2xl border border-primary/25 bg-surface/40 px-4 py-3.5 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 transition"
                />
              </div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 rounded-pill bg-primary text-primary-foreground px-6 py-4 font-semibold shadow-warm hover:bg-primary-hover transition-[background-color,transform] active:scale-[0.98]"
              >
                Kirim Pesan
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label, value, onChange, placeholder, type = "text",
}: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder: string; type?: string;
}) => (
  <div>
    <label className="block text-xs font-semibold tracking-wider uppercase text-accent/80 mb-2">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-pill border border-primary/25 bg-surface/40 px-5 py-3.5 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 transition"
    />
  </div>
);
