import type { Metadata } from "next";
import Link from "next/link";

import SiteFrame from "../_components/SiteFrame";
import SocialLinks from "../_components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact Endeavor Cleaning | Dubai",
  description: "Call, WhatsApp or start a structured booking request with Endeavor Cleaning in Dubai.",
};

const contacts = [
  { label: "Mobile calls", value: "+971 52 959 7778", copy: "Talk through your property, timing and the service that fits best.", href: "tel:+971529597778", action: "Call mobile" },
  { label: "WhatsApp", value: "+971 58 875 4060", copy: "Send property details, photos and questions — fastest for quotes.", href: "https://wa.me/971588754060", action: "Open WhatsApp" },
  { label: "Office", value: "+971 4 250 8515", copy: "Reach the Dubai office directly during business hours.", href: "tel:+97142508515", action: "Call office" },
];

export default function ContactPage() {
  return (
    <SiteFrame>
      <main className="inner-page">
        <section className="contact-hero">
          <div className="inner-shell contact-hero__grid">
            <div>
              <span className="page-eyebrow">Contact Endeavor</span>
              <h1>Let&apos;s get your space looking its best</h1>
              <p>Tell us what needs cleaning and we&apos;ll take it from there. Book online in minutes, or reach the team directly for anything more specific.</p>
            </div>
            <div className="contact-hero__actions">
              <Link className="solid-action" href="/book">Start a Booking</Link>
              <Link className="outline-action" href="/services">Choose a Service</Link>
            </div>
          </div>
        </section>

        <section className="inner-section inner-shell contact-card-grid">
          {contacts.map((contact, index) => (
            <a href={contact.href} key={contact.label}>
              <span>0{index + 1}</span>
              <small>{contact.label}</small>
              <h2>{contact.value}</h2>
              <p>{contact.copy}</p>
              <strong>{contact.action} →</strong>
            </a>
          ))}
        </section>

        <section className="inner-section inner-shell contact-location">
          <div className="contact-location__copy">
            <span className="page-eyebrow">Where we work</span>
            <h2>Serving communities across Dubai</h2>
            <p>Endeavor&apos;s teams are dispatched daily across the city — from Downtown and Business Bay to the Marina, JVC and beyond. Share your community when you book and we&apos;ll confirm access and timing.</p>
            <div className="contact-location__address">
              <strong>Business Bay, Dubai, UAE</strong>
              <span>Exact office location shared once your appointment is confirmed.</span>
            </div>
            <div className="contact-location__social">
              <span>Follow along</span>
              <SocialLinks className="social-row social-row--light" />
            </div>
          </div>
          <div className="contact-location__map">
            <iframe
              src="https://www.google.com/maps?q=Business+Bay,+Dubai,+UAE&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Endeavor Cleaning service area — Business Bay, Dubai"
            />
          </div>
        </section>

        <section className="inner-section inner-shell contact-help-grid">
          <div>
            <span className="page-eyebrow">What to include</span>
            <h2>Help us answer clearly the first time</h2>
          </div>
          <ul>
            <li>Service or cleaning need</li>
            <li>Dubai community or building</li>
            <li>Property type and approximate size</li>
            <li>Quantity, unit count or room count</li>
            <li>Preferred date and time window</li>
            <li>Photographs where access or condition matters</li>
          </ul>
        </section>
      </main>
    </SiteFrame>
  );
}
