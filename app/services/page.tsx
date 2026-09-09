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

        <section className="services-journey-section inner-section">
          <div className="inner-shell">
            <div className="inner-section-heading">
              <span className="page-eyebrow">A clear service journey</span>
              <h2>From first details to a cleaner space</h2>
              <p>Each request follows the same straightforward path, while the scope is adjusted to the service and property.</p>
            </div>
            <ol className="services-journey-grid">
              <li>
                <span>01</span>
                <h3>Choose and describe</h3>
                <p>Select a service and tell us the property size, item quantity, access details and preferred time.</p>
              </li>
              <li>
                <span>02</span>
                <h3>Confirm the scope</h3>
                <p>Our team reviews the request, checks any site-specific needs and confirms the service plan before work begins.</p>
              </li>
              <li>
                <span>03</span>
                <h3>Clean and close out</h3>
                <p>The assigned team completes the agreed scope and walks through any important care or drying notes with you.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="services-review-band">
          <div className="inner-shell services-review-band__grid">
            <div>
              <span className="page-eyebrow page-eyebrow--light">Independent feedback</span>
              <h2>Check current customer feedback at the source</h2>
            </div>
            <div>
              <p>We do not publish made-up ratings or copied testimonials. Visit our reviews page to open the current public feedback source.</p>
              <Link className="light-action" href="/reviews">View review options <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="inner-shell inner-section services-faq-section">
          <div className="inner-section-heading">
            <span className="page-eyebrow">Before you book</span>
            <h2>Helpful service questions</h2>
            <p>Exact requirements vary by property. These answers explain how the Endeavor request and confirmation process works.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>How is the final price confirmed?<span aria-hidden="true">+</span></summary>
              <p>We confirm pricing after reviewing the selected service, quantity or area, access conditions and any specialist requirements. No competitor pricing has been reused.</p>
            </details>
            <details>
              <summary>Can I request more than one service?<span aria-hidden="true">+</span></summary>
              <p>Yes. Choose the main service in the booking form and list the additional work in the notes so the team can review the full request together.</p>
            </details>
            <details>
              <summary>What should I prepare before the team arrives?<span aria-hidden="true">+</span></summary>
              <p>The individual service page includes preparation guidance. In most cases, clear access to the work area and point out fragile or priority items in advance.</p>
            </details>
            <details>
              <summary>Do you serve homes and business properties?<span aria-hidden="true">+</span></summary>
              <p>Yes. The directory includes services suited to residential and commercial spaces, with the final scope confirmed for the specific property.</p>
            </details>
          </div>
        </section>

        <section className="inner-shell service-cta-panel services-page-cta">
          <div>
            <span>Need help choosing?</span>
            <h2>Send the property details and we’ll guide the next step.</h2>
          </div>
          <div>
            <Link className="light-action" href="/book">Start a service request</Link>
            <a href="tel:+971529597778">Or call +971 52 959 7778</a>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
