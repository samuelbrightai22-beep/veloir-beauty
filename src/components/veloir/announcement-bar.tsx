"use client";

import { useEffect, useState } from "react";

const messages = [
  "Complimentary shipping & samples on every order over $50",
  "Now shipping to 47 countries — discover our international atelier",
  "Receive a travel-size Rose de Mai with orders over $150",
  "Discover Lumière Dorée — the new golden fragrance from the house",
  "Members of La Maison VELOIR receive early access to Noir Absolu",
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-ink text-cream/80 text-[11px] tracking-[0.22em] uppercase py-2.5 text-center font-body border-b border-cream-soft relative overflow-hidden">
      <div
        key={index}
        className="animate-fade-in px-6"
      >
        {messages[index]}
      </div>
    </div>
  );
}
