import type { Metadata } from "next";
import Link from "next/link";

import { categoryFromSlug } from "@/lib/services";
import SiteFrame from "../_components/SiteFrame";
import ServicesExplorer from "./ServicesExplorer";

export const metadata: Metadata = {
  title: "Cleaning Services in Dubai | Endeavor Cleaning",
  description: "Browse Endeavor cleaning services for AC units, water tanks, furniture, floors, homes and business properties in Dubai.",
};

type ServicesPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const query = await searchParams;
  const rawCategory = Array.isArray(query.category) ? query.category[0] : query.category;
  const initialCategory = categoryFromSlug(rawCategory) ?? "All Services";

  return (
    <SiteFrame>
      <main className="inner-page">
        <section className="page-hero page-hero--services">
          <div className="inner-shell page-hero__content">
            <span className="page-eyebrow">Endeavor services</span>
            <h1>Find the right cleaning service without the guesswork</h1>
            <p>Browse every active service, compare how pricing is confirmed, and continue directly to the relevant details or booking request.</p>
            <div className="page-hero__actions">
              <Link className="solid-action" href="/book">Book a Service</Link>
              <a className="outline-action" href="https://wa.me/971588754060">Ask Us on WhatsApp</a>
            </div>
          </div>
        </section>

        <div className="inner-shell service-anchor-strip" aria-label="Service categories">
          <span id="air-water">Air & Water</span>
          <span id="furniture-floors">Furniture & Floors</span>
          <span id="property-cleaning">Property Cleaning</span>
        </div>

        <div className="inner-shell">
          <ServicesExplorer key={initialCategory} initialCategory={initialCategory} />
        </div>
      </main>
    </SiteFrame>
  );
}
