import type { Metadata } from "next";
import Link from "next/link";

import SiteFrame from "../_components/SiteFrame";

export const metadata: Metadata = {
  title: "About Endeavor Cleaning | Dubai",
  description: "Learn how Endeavor approaches professional cleaning for homes and businesses in Dubai.",
};

const principles = [
  ["Clear before we begin", "The selected service, scope, access needs and price are confirmed before work starts."],
  ["Care for the space", "The team prepares the immediate work area and follows the agreed service process."],
  ["Useful communication", "Customers can ask questions by phone or WhatsApp before and after a visit."],
  ["Details that can be checked", "Service options state what is included, what is separate and what information is still needed."],
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <main className="inner-page">
        <section className="about-hero">
          <div className="inner-shell about-hero__grid">
            <div>
              <span className="page-eyebrow">About Endeavor</span>
              <h1>Professional cleaning built around clear expectations</h1>
              <p>Endeavor supports homes and businesses across Dubai with focused services, practical communication and a scope agreed before the work begins.</p>
              <div className="page-hero__actions">
                <Link className="solid-action" href="/services">Explore Services</Link>
                <Link className="outline-action" href="/contact">Contact the Team</Link>
              </div>
            </div>
            <img src="/assets/endeavor-hero.png" alt="Endeavor Cleaning team serving a Dubai property" />
          </div>
        </section>

        <section className="inner-section inner-shell">
          <div className="inner-section-heading">
            <span className="page-eyebrow">How we work</span>
            <h2>Simple principles for a smoother service</h2>
          </div>
          <div className="principle-grid">
            {principles.map(([title, copy], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </section>

        <section className="inner-section about-story-section">
          <div className="inner-shell about-story-grid">
            <div><img src="/assets/hero.webp" alt="A bright, professionally cared-for living space" /></div>
            <div>
              <span className="page-eyebrow">Homes and businesses</span>
              <h2>One clear journey, adapted to each service</h2>
              <p>A sofa clean and a façade project should not be booked in the same way. Endeavor’s service journey collects the information each job actually needs—from unit count and fabric type to property size and access.</p>
              <ul>
                <li>Displayed-price services begin with a booking request.</li>
                <li>Variable work begins with an exact-quote request.</li>
                <li>Every request remains provisional until confirmed.</li>
              </ul>
              <Link className="solid-action" href="/book">Start a Request</Link>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}

