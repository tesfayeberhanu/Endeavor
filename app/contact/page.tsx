import type { Metadata } from "next";
import Link from "next/link";

import SiteFrame from "../_components/SiteFrame";

export const metadata: Metadata = {
  title: "Contact Endeavor Cleaning | Dubai",
  description: "Call, WhatsApp or start a structured booking request with Endeavor Cleaning in Dubai.",
};

const contacts = [
  { label: "Mobile calls", value: "+971 52 959 7778", copy: "Speak with the customer team about a service or an existing request.", href: "tel:+971529597778", action: "Call mobile" },
  { label: "WhatsApp", value: "+971 58 875 4060", copy: "Share service details, property information and useful photographs.", href: "https://wa.me/971588754060", action: "Open WhatsApp" },
  { label: "Office", value: "+971 4 250 8515", copy: "Contact the Dubai office during confirmed business hours.", href: "tel:+97142508515", action: "Call office" },
];

export default function ContactPage() {
  return (
    <SiteFrame>
      <main className="inner-page">
        <section className="contact-hero">
          <div className="inner-shell contact-hero__grid">
            <div>
              <span className="page-eyebrow">Contact Endeavor</span>
              <h1>Choose the quickest way to reach the team</h1>
              <p>For a new service, the booking form prepares all the details in one message. For immediate help, call or use WhatsApp.</p>
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
