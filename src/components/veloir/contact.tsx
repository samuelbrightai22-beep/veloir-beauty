"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("General Enquiry");
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        title: "Please complete every field",
        description: "We'd like to know how to reach you and what you'd like to discuss.",
        variant: "destructive",
      });
      return;
    }
    setSending(true);
    // Simulated send
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Your note is on its way to Paris",
        description: "A member of La Maison will respond within two business days.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setSubject("General Enquiry");
    }, 1100);
  };

  return (
    <section id="contact" className="bg-background py-24 lg:py-32 bg-grain">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: copy + addresses */}
          <div>
            <p className="font-body text-[10px] tracking-[0.42em] uppercase text-copper mb-4">
              Write to the House
            </p>
            <h2 className="font-serif-display text-[42px] md:text-[58px] leading-[1.05] text-cream">
              Contact
            </h2>
            <div className="hairline my-8 max-w-[120px]" />
            <p className="font-body text-[15px] text-cream/70 leading-relaxed mb-10 max-w-md">
              For press, partnership, concierge, or simply to ask which shade
              suits you best — the atelier is at your service. We respond to
              every letter within two business days.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Paris Atelier",
                  lines: ["8 rue de Sèvres", "75007 Paris, France"],
                  meta: "Open Tue – Sat, 11h – 19h",
                },
                {
                  icon: MapPin,
                  title: "New York Atelier",
                  lines: ["112 Mercer Street", "New York, NY 10012"],
                  meta: "Open Wed – Sun, 11am – 7pm",
                },
                {
                  icon: Phone,
                  title: "Client Concierge",
                  lines: ["+1 (212) 555-0087", "+33 (0)1 55 00 87 12"],
                  meta: "9am – 9pm, all time zones",
                },
                {
                  icon: Mail,
                  title: "Editorial Enquiries",
                  lines: ["la.maison@veloir.beauty", "press@veloir.beauty"],
                  meta: "Response within two business days",
                },
              ].map((c) => (
                <div key={c.title} className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 border border-cream-soft/30 flex items-center justify-center text-copper">
                    <c.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-body text-[10px] tracking-[0.32em] uppercase text-cream/55 mb-1">
                      {c.title}
                    </p>
                    {c.lines.map((l) => (
                      <p key={l} className="font-serif-display text-[18px] text-cream leading-snug">
                        {l}
                      </p>
                    ))}
                    <p className="mt-1 font-body text-[11px] text-cream/45 italic">
                      {c.meta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-ink-soft border border-cream-soft/15 p-7 sm:p-10">
            <h3 className="font-serif-display text-[28px] text-cream mb-1">
              Send a note
            </h3>
            <p className="font-body text-[12px] text-cream/55 mb-7">
              Fields marked with an asterisk are required.
            </p>
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Your name *">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="veloir-input"
                    placeholder="Élodie Laurent"
                    required
                  />
                </Field>
                <Field label="Email address *">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="veloir-input"
                    placeholder="elodie@example.com"
                    required
                  />
                </Field>
              </div>

              <Field label="Subject">
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="veloir-input appearance-none cursor-pointer"
                >
                  <option className="bg-ink text-cream">General Enquiry</option>
                  <option className="bg-ink text-cream">Product & Order</option>
                  <option className="bg-ink text-cream">Press</option>
                  <option className="bg-ink text-cream">Wholesale</option>
                  <option className="bg-ink text-cream">La Maison Membership</option>
                </select>
              </Field>

              <Field label="Message *">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="veloir-input resize-none"
                  placeholder="Tell us how we can help…"
                  required
                />
              </Field>

              <button
                type="submit"
                disabled={sending}
                className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-cream text-ink text-[11px] tracking-[0.32em] uppercase font-body hover:bg-copper hover:text-cream transition-all duration-300 disabled:opacity-60 disabled:cursor-wait"
              >
                {sending ? "Sending…" : "Send to the Atelier"}
                {!sending && (
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                )}
              </button>
              <p className="text-center font-body text-[10px] tracking-[0.18em] uppercase text-cream/40">
                We never share your details. Read our privacy promise.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.veloir-input) {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid rgba(243, 236, 223, 0.2);
          color: var(--cream);
          font-family: var(--font-inter), sans-serif;
          font-size: 14px;
          padding: 10px 0 12px;
          outline: none;
          transition: border-color 0.2s;
        }
        :global(.veloir-input::placeholder) {
          color: rgba(243, 236, 223, 0.35);
        }
        :global(.veloir-input:focus) {
          border-color: var(--copper);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-body text-[10px] tracking-[0.28em] uppercase text-cream/55 block mb-1">
        {label}
      </span>
      {children}
    </label>
  );
}
