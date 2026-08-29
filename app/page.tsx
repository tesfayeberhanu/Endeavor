"use client";

import { useState } from "react";
import Link from "next/link";

const primaryNavLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
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
    image: "/assets/popular-deep-cleaning.jpg",
    icon: "spray",
  },
  {
    name: "Routine Home Cleaning",
    copy: "Regular visits that keep your home consistently fresh, on a schedule that suits you.",
    image: "/assets/popular-routine-cleaning.jpg",
    icon: "broom",
  },
  {
    name: "Move-In & Move-Out Cleaning",
    copy: "Start fresh in a spotless space, whether you're arriving or handing over the keys.",
    image: "/assets/popular-move-in-out.jpg",
    icon: "box",
  },
  {
    name: "Office & Commercial Cleaning",
    copy: "Cleaning programs built around your business hours and your standards.",
    image: "/assets/popular-office-cleaning.jpg",
    icon: "building",
  },
  {
    name: "Carpet & Upholstery Care",
    copy: "Deep cleaning for carpets, sofas, and mattresses that everyday vacuuming can't reach.",
    image: "/assets/popular-carpet-upholstery.jpg",
    icon: "sofa",
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

function PopularIcon({ kind }: { kind: (typeof popularServices)[number]["icon"] }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (kind === "spray") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M15 15h8v18a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z" />
        <path {...common} d="M17 15v-3h4v3" />
        <path {...common} d="M25 12h4l-2 3h3l-6 6" />
      </svg>
    );
  }
  if (kind === "broom") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M27 8 15 24" />
        <path {...common} d="M15 24 9 32l5 2 4-7" />
        <path {...common} d="M9 32 20 22" />
        <path {...common} d="M13 27 22 20" />
      </svg>
    );
  }
  if (kind === "box") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M8 14 20 8l12 6-12 6Z" />
        <path {...common} d="M8 14v13l12 6 12-6V14" />
        <path {...common} d="M20 20v13" />
      </svg>
    );
  }
  if (kind === "building") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M11 32V9h18v23" />
        <path {...common} d="M8 32h24" />
        <path {...common} d="M16 15h2M22 15h2M16 21h2M22 21h2M16 27h2M22 27h2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path {...common} d="M9 24v-4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v4" />
      <path {...common} d="M7 24h26v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z" />
      <path {...common} d="M9 29v3M31 29v3" />
    </svg>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

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

            <a className="forest-card" href="#contact">
              <img src="/assets/endeavor-hero.png" alt="A bright, professionally cleaned living room" />
              <div className="forest-copy">
                <span className="plant-badge" aria-hidden="true">✦</span>
                <div><strong>Care in every detail</strong><span>Request your personalized cleaning quote</span></div>
              </div>
            </a>
          </aside>
        </section>

        <section className="partner-section" id="services" aria-label="Endeavor cleaning categories">
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
          <div className="popular-grid">
            {popularServices.map((service) => (
              <div className="popular-card" key={service.name}>
                <div className="popular-card__image">
                  <img src={service.image} alt="" />
                  <span className="popular-card__icon" aria-hidden="true">
                    <PopularIcon kind={service.icon} />
                  </span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.copy}</p>
                <a className="popular-card__cta" href="#contact">
                  Learn more
                  <Chevron />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="site-footer" id="contact">
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
