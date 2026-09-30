"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Welcome to La Maison",
        description: "Your first letter will arrive on Sunday — alongside a $25 welcome credit.",
      });
      setEmail("");
    }, 1100);
  };

  return (
    <section className="bg-ink py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-50" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="font-script text-copper text-3xl mb-3">La Maison VELOIR</p>
        <h2 className="font-serif-display text-[36px] md:text-[48px] leading-[1.05] text-cream">
          Letters from the Atelier
        </h2>
        <p className="mt-5 font-body text-[14px] md:text-[15px] text-cream/65 leading-relaxed max-w-xl mx-auto">
          A weekly letter: ritual notes, behind-the-scenes from the atelier,
          first access to limited editions, and the occasional poem. No
          promotions, no urgency — only the slow pleasure of writing and being
          written to.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 bg-transparent border border-cream-soft/25 text-cream font-body text-[14px] px-5 py-4 outline-none focus:border-copper transition-colors placeholder:text-cream/35"
          />
          <button
            type="submit"
            disabled={sending}
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-cream text-ink text-[11px] tracking-[0.28em] uppercase font-body hover:bg-copper hover:text-cream transition-all duration-300 disabled:opacity-60"
          >
            {sending ? "Joining…" : "Subscribe"}
            {!sending && (
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            )}
          </button>
        </form>
        <p className="mt-4 font-body text-[10px] tracking-[0.22em] uppercase text-cream/40">
          Subscribe and receive $25 off your first order
        </p>
      </div>
    </section>
  );
}
