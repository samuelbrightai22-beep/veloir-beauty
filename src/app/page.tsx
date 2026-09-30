"use client";

import { AnnouncementBar } from "@/components/veloir/announcement-bar";
import { Header } from "@/components/veloir/header";
import { Hero } from "@/components/veloir/hero";
import { Marquee } from "@/components/veloir/marquee";
import { Collections } from "@/components/veloir/collections";
import { Bestsellers } from "@/components/veloir/bestsellers";
import { Shop } from "@/components/veloir/shop";
import { Editorial } from "@/components/veloir/editorial";
import { Journal } from "@/components/veloir/journal";
import { About } from "@/components/veloir/about";
import { Contact } from "@/components/veloir/contact";
import { Newsletter } from "@/components/veloir/newsletter";
import { Footer } from "@/components/veloir/footer";
import { CartDrawer } from "@/components/veloir/cart-drawer";
import { ProductDetailModal } from "@/components/veloir/product-detail-modal";
import { SearchModal } from "@/components/veloir/search-modal";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        <Hero />
        <Marquee />
        <Collections />
        <Bestsellers />
        <Editorial />
        <Shop />
        <Journal />
        <About />
        <Newsletter />
        <Contact />
      </main>

      <Footer />

      {/* Overlays */}
      <CartDrawer />
      <ProductDetailModal />
      <SearchModal />
    </div>
  );
}
