"use client";

import { useState } from "react";
import Link from "next/link";

const primaryNavLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const serviceCards = [
  { name: "Routine Cleaning", image: "/assets/ac.webp" },
  { name: "Bedroom Cleaning", image: "/assets/mattress.webp" },
  { name: "Furniture Cleaning", image: "/assets/sofa.webp" },
  { name: "Deep Cleaning", image: "/assets/deep-clean.webp" },
  { name: "Sanitization", image: "/assets/pest.webp" },
  { name: "Property Care", image: "/assets/inspection.webp" },
  { name: "Commercial Cleaning", image: "/assets/water.webp" },
  { name: "Custom Plans", image: "/assets/contract.webp" },
  { name: "More Services", image: "/assets/more.webp" },
];

const partnerColumns = [
  {
    name: "Residential Cleaning",
    copy: "From routine tidy-ups to deep cleans, we care for every room in your home.",
    image: "/assets/endeavor-hero.png",
  },
  {
    name: "Commercial Cleaning",
    copy: "Reliable cleaning programs that keep offices, retail spaces, and facilities spotless.",
    image: "/assets/hero.webp",
  },
  {
    name: "Specialty Care",
    copy: "Move-in and move-out cleans, carpets, upholstery, and plans custom-built around you.",
    image: "/assets/forest.webp",
  },
];

const popularServices = [
  {
    name: "Deep Cleaning",
    copy: "A thorough, top-to-bottom clean for kitchens, bathrooms, and every corner in between.",
  },
  {
    name: "Routine Home Cleaning",
    copy: "Regular visits that keep your home consistently fresh, on a schedule that suits you.",
  },
  {
    name: "Move-In & Move-Out Cleaning",
    copy: "Start fresh in a spotless space, whether you're arriving or handing over the keys.",
  },
  {
    name: "Office & Commercial Cleaning",
    copy: "Cleaning programs built around your business hours and your standards.",
  },
  {
    name: "Carpet & Upholstery Care",
    copy: "Deep cleaning for carpets, sofas, and mattresses that everyday vacuuming can't reach.",
  },
];

const trustPoints = [
  {
    title: "Vetted & Trained Cleaners",
    copy: "Every member of our team is background-checked and trained to our standards.",
    icon: "shield",
  },
  {
    title: "Flexible Scheduling",
    copy: "Book one-time visits or recurring plans that fit your routine.",
    icon: "clock",
  },
  {
    title: "Eco-Conscious Products",
    copy: "We use cleaning products chosen with your family and pets in mind.",
    icon: "leaf",
  },
  {
    title: "Satisfaction Follow-Up",
    copy: "Not happy with a spot? Tell us and we'll make it right.",
    icon: "check",
  },
] as const;

const testimonials = [
  {
    quote:
      "Booking was simple and the team left our apartment looking brand new. They were careful with every detail.",
    attribution: "Homeowner, Dubai",
  },
  {
    quote:
      "We switched our office cleaning to Endeavor and haven't looked back. Consistent, professional, and always on time.",
    attribution: "Office Manager, Business Bay",
  },
  {
    quote:
      "The move-out clean saved us so much stress. Everything was spotless for the handover inspection.",
    attribution: "Tenant, Abu Dhabi",
  },
] as const;

const footerServiceLinks = [
  "Routine Home Cleaning",
  "Deep Cleaning",
  "Office Cleaning",
  "Move-In & Move-Out Cleaning",
  "Carpet & Upholstery Care",
];

const footerCompanyLinks = ["About Us", "Careers", "Reviews", "Blog"];

const footerSupportLinks = ["Contact Us", "FAQs", "Get a Quote", "Service Areas"];

function Chevron({ down = false, open = false }: { down?: boolean; open?: boolean }) {
  return (
    <span
      className={`chevron ${down ? "chevron--down" : ""} ${open ? "chevron--open" : ""}`}
      aria-hidden="true"
    />
  );
}

function CallIcon() {
  return (
    <svg viewBox="0 0 37 37" aria-hidden="true">
      <path d="M10 14.3c0-1.1.4-2.1 1.1-2.9.7-.8 1.7-1.3 2.7-1.4.2 0 .4.1.5.3l2 4.5c.1.2.1.4 0 .5l-2 2.3-.4.5.3.6c.8 1.6 2.5 3.3 4.2 4.1l.6.3.5-.4 2.3-2c.1-.1.3-.1.5 0l4.5 2c.2.1.3.3.3.5-.1 1-.7 2-1.4 2.7-.8.7-1.8 1.1-2.9 1.1C15.7 27 10 21.3 10 14.3Z" />
      <circle cx="18.5" cy="18.5" r="17.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 43 43" aria-hidden="true">
      <path d="M33.9 8.7A17.4 17.4 0 0 0 21.4 3.6 17.6 17.6 0 0 0 6.1 30l-2.5 9.1 9.4-2.5a17.6 17.6 0 0 0 26-15.4c0-4.7-1.8-9.1-5.1-12.5Zm-12.5 27c-2.7 0-5.2-.7-7.5-2l-.5-.3-5.6 1.5 1.5-5.4-.3-.6a14.6 14.6 0 0 1 12.4-22.4c3.9 0 7.6 1.5 10.3 4.3A14.6 14.6 0 0 1 21.4 35.7Zm8-10.8c-.4-.2-2.6-1.3-3-1.5-.4-.1-.7-.2-1 .2l-1.4 1.7c-.2.3-.5.3-.9.1-2.6-1.1-4.5-2.9-6-5.3-.2-.4 0-.7.2-.9l1.1-1.5c.1-.3.1-.6 0-.8l-1.4-3.3c-.4-.9-.8-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-.4.4-1.5 1.5-1.5 3.7 0 2.1 1.6 4.2 1.8 4.5.2.3 3.1 4.8 7.5 6.7 1 .5 1.8.7 2.5.9 1 .3 2 .3 2.8.2.9-.1 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1-.2-.2-.5-.3-.9-.5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 37 37" aria-hidden="true">
      <rect x="3" y="8" width="31" height="21" rx="3" />
      <path d="M5 10.5 18.5 20 32 10.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrustIcon({ kind }: { kind: (typeof trustPoints)[number]["icon"] }) {
  if (kind === "shield") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 4 34 9v10c0 9-6 15-14 17C12 34 6 28 6 19V9Z" fill="currentColor" />
        <path d="M13.5 20 18 24.5 27 15" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "clock") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="16" fill="currentColor" />
        <path d="M20 11v9l6.5 4" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "leaf") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M9 31c-1-11 5-20 22-22 2 17-7 23-22 22Z" fill="currentColor" />
        <path d="M12 30c4-6 9-10 16-13" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="16" fill="currentColor" />
      <path d="M13 20.5 18 25.5 27.5 14.5" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openService, setOpenService] = useState<string | null>(popularServices[0].name);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const toggleService = (name: string) => {
    setOpenService((current) => (current === name ? null : name));
  };

  return (
    <main className="site-frame">
      <header className="site-header">
        <div className="header-shell">
          <Link className="brand" href="/" aria-label="Endeavor Cleaning home">
            <img src="/assets/endeavor-logo-v1.png" alt="Endeavor — A Tradition of Quality Cleaning" />
          </Link>

          <button
            className="mobile-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`primary-nav ${mobileOpen ? "primary-nav--open" : ""}`} aria-label="Main navigation">
            {primaryNavLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a className="nav-link" href={link.href} key={link.label}>{link.label}</a>
              ) : (
                <Link className="nav-link" href={link.href} key={link.label}>{link.label}</Link>
              )
            )}
          </nav>

          <div className="nav-actions">
            <a className="book-button" href="#contact" aria-label="Request a cleaning quote">
              <span className="calendar-icon" aria-hidden="true">□</span>
              Get a Quote
            </a>
            <a className="contact-icon contact-icon--call" href="#contact" aria-label="Contact Endeavor Cleaning">
              <CallIcon />
            </a>
            <a className="contact-icon contact-icon--whatsapp" href="#contact" aria-label="Message Endeavor Cleaning">
              <WhatsAppIcon />
            </a>
          </div>

          <div className="brand-note"><span aria-hidden="true" />Quality First</div>
        </div>
      </header>

      <div className="content-shell">
        <section className="hero-grid" aria-label="Endeavor Cleaning overview">
          <div className="hero-banner">
            <img src="/assets/endeavor-hero.png" alt="An Endeavor cleaning professional caring for a modern living room" />
            <div className="hero-content">
              <div className="hero-blob">
                <h1>A tradition of quality cleaning</h1>
                <p>We make your home spotless so you can enjoy the things that matter.</p>
                <a className="hero-cta" href="#contact">Get a Quote</a>
              </div>
            </div>
            <div className="stats-panel">
              <div><strong>Quality</strong><span>First, Every Time</span></div>
              <div><strong>Flexible</strong><span>Cleaning Plans</span></div>
              <div><strong>Detailed</strong><span>Care for Every Space</span></div>
              <div><strong>Home & Business</strong><span>Cleaning Services</span></div>
            </div>
          </div>

          <aside className="side-panels" aria-label="Endeavor service information">
            <a className="air-card" href="#services">
              <div className="panel-title-row">
                <h2>What can we clean for you?</h2>
                <span className="north-east" aria-hidden="true">↗</span>
              </div>
              <div className="air-details">
                <div className="air-gauge"><span>✓</span></div>
                <div className="air-copy">
                  <strong>Homes & Workplaces</strong>
                  <p>Dependable cleaning tailored to your space and schedule.</p>
                </div>
              </div>
            </a>

            <a className="forest-card" href="#contact" id="contact">
              <img src="/assets/endeavor-hero.png" alt="A bright, professionally cleaned living room" />
              <div className="forest-copy">
                <span className="plant-badge" aria-hidden="true">✦</span>
                <div><strong>Care in every detail</strong><span>Request your personalized cleaning quote</span></div>
              </div>
            </a>
          </aside>
        </section>

        <section className="service-grid-section" id="services" aria-label="Endeavor cleaning services">
          <h2 className="section-heading">Our Cleaning Services</h2>
          <div className="service-grid">
            {serviceCards.map((service) => (
              <a className="service-card" href="#contact" key={service.name}>
                <img src={service.image} alt="" />
                <span>{service.name}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="partner-section" aria-label="Endeavor cleaning categories">
          <h2 className="section-heading">Your Partner in a Healthier Home</h2>
          <div className="partner-grid">
            {partnerColumns.map((column) => (
              <div className="partner-card" key={column.name}>
                <div className="partner-card__image">
                  <img src={column.image} alt="" />
                </div>
                <h3>{column.name}</h3>
                <p>{column.copy}</p>
                <a className="partner-card__cta" href="#contact">Get a Quote</a>
              </div>
            ))}
          </div>
        </section>

        <section className="popular-section" aria-label="Popular cleaning services">
          <h2 className="section-heading">Popular Services</h2>
          <div className="popular-list">
            {popularServices.map((service) => {
              const isOpen = openService === service.name;
              return (
                <div className={`popular-item ${isOpen ? "popular-item--open" : ""}`} key={service.name}>
                  <button
                    className="popular-item__header"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleService(service.name)}
                  >
                    <span>{service.name}</span>
                    <Chevron down open={isOpen} />
                  </button>
                  {isOpen ? (
                    <div className="popular-item__body">
                      <p>{service.copy}</p>
                      <a className="popular-item__cta" href="#contact">Get a Quote</a>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <section className="trust-band" aria-label="Why choose Endeavor">
        <div className="content-shell trust-bar">
          {trustPoints.map((point) => (
            <div className="trust-item" key={point.title}>
              <span className="trust-item__icon"><TrustIcon kind={point.icon} /></span>
              <strong>{point.title}</strong>
              <p>{point.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="content-shell">
        <section className="testimonial-section" id="testimonials" aria-label="Customer testimonials">
          <h2 className="section-heading">What Our Customers Say</h2>
          <div className="testimonial-track">
            <blockquote className="testimonial-card">
              <p>“{testimonials[activeTestimonial].quote}”</p>
              <cite>{testimonials[activeTestimonial].attribution}</cite>
            </blockquote>
          </div>
          <div className="testimonial-dots" role="tablist" aria-label="Choose a testimonial">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.attribution}
                type="button"
                role="tab"
                aria-label={`Show testimonial ${index + 1}`}
                aria-selected={activeTestimonial === index}
                className={`testimonial-dot ${activeTestimonial === index ? "testimonial-dot--active" : ""}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </section>
      </div>

      <section className="promo-band" aria-label="Book online">
        <div className="content-shell promo-banner">
          <div>
            <h2>Book online in minutes</h2>
            <p>Choose your service, pick a time, and let our team take it from there.</p>
          </div>
          <a className="promo-banner__cta" href="#contact">Get a Quote</a>
        </div>
      </section>

      <div className="content-shell">
        <section className="contact-section" aria-label="Get in touch">
          <h2 className="section-heading">We are here to help you!</h2>
          <div className="contact-grid">
            <a className="contact-card" href="#contact" aria-label="Call Endeavor Cleaning">
              <span className="contact-card__icon contact-card__icon--call"><CallIcon /></span>
              <strong>Call Us</strong>
              <p>Speak with our team about your cleaning needs.</p>
            </a>
            <a className="contact-card" href="#contact" aria-label="Message Endeavor Cleaning on WhatsApp">
              <span className="contact-card__icon contact-card__icon--whatsapp"><WhatsAppIcon /></span>
              <strong>WhatsApp</strong>
              <p>Message us for a fast, no-obligation quote.</p>
            </a>
            <a className="contact-card" href="#contact" aria-label="Email Endeavor Cleaning">
              <span className="contact-card__icon contact-card__icon--mail"><MailIcon /></span>
              <strong>Email</strong>
              <p>Send us the details and we&rsquo;ll get back to you.</p>
            </a>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="content-shell footer-grid">
          <div className="footer-brand">
            <img src="/assets/endeavor-logo-v1.png" alt="Endeavor — A Tradition of Quality Cleaning" />
            <p>A tradition of quality cleaning for homes and businesses.</p>
            <div className="social-row" aria-label="Endeavor on social media">
              <a href="#contact" aria-label="Endeavor on Facebook">f</a>
              <a href="#contact" aria-label="Endeavor on Instagram">◎</a>
              <a href="#contact" aria-label="Endeavor on LinkedIn">in</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {footerServiceLinks.map((link) => (
                <li key={link}><a href="#services">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {footerCompanyLinks.map((link) => (
                <li key={link}><a href="#contact">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              {footerSupportLinks.map((link) => (
                <li key={link}><a href="#contact">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="content-shell footer-bottom">
          <span>© 2026 Endeavor Cleaning. All rights reserved.</span>
          <div className="footer-bottom__links">
            <a href="#contact">Terms</a>
            <a href="#contact">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
