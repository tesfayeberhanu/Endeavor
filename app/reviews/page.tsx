import type { Metadata } from "next";
import Link from "next/link";

import SiteFrame from "../_components/SiteFrame";

export const metadata: Metadata = {
  title: "Customer Reviews | Endeavor Cleaning",
  description: "Find verified review sources for Endeavor Cleaning services in Dubai.",
};

export default function ReviewsPage() {
  return (
    <SiteFrame>
      <main className="inner-page">
        <section className="page-hero page-hero--reviews">
          <div className="inner-shell page-hero__content">
            <span className="page-eyebrow">Customer feedback</span>
            <h1>Read feedback at its verified source</h1>
            <p>Endeavor does not publish invented testimonials. Review totals, ratings, customer names and service details should be verified before they appear on this website.</p>
            <div className="page-hero__actions">
              <a className="solid-action" href="https://www.google.com/search?q=Endeavor+Cleaning+Services+Dubai+reviews" target="_blank" rel="noreferrer">Find Endeavor on Google ↗</a>
              <Link className="outline-action" href="/services">Browse Services</Link>
            </div>
          </div>
        </section>

        <section className="inner-section inner-shell review-policy-grid">
          <div className="inner-section-heading">
            <span className="page-eyebrow">Review standard</span>
            <h2>What will be checked before a review is displayed</h2>
            <p>This structure is ready for approved Google reviews without presenting placeholders as real customer feedback.</p>
          </div>
          <div className="review-policy-list">
            <article><span>01</span><h3>Source confirmed</h3><p>The review is matched to a verified public source.</p></article>
            <article><span>02</span><h3>Details permitted</h3><p>Customer name and service type appear only where appropriate.</p></article>
            <article><span>03</span><h3>No edited promises</h3><p>Feedback is not rewritten into unsupported service or health claims.</p></article>
          </div>
        </section>

        <section className="inner-shell service-cta-panel">
          <div><span>Need help choosing?</span><h2>Tell us what you would like cleaned</h2></div>
          <div><Link className="light-action" href="/book">Book a Service</Link><a href="https://wa.me/971588754060">WhatsApp Us →</a></div>
        </section>
      </main>
    </SiteFrame>
  );
}

