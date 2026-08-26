"use client";

import { useState } from "react";

type MenuName = "residential" | "commercial" | null;

const residentialServices = [
  "Routine Home Cleaning",
  "Deep Cleaning",
  "Move-In & Move-Out Cleaning",
  "Kitchen & Bathroom Cleaning",
  "Carpet & Upholstery Care",
  "Recurring Cleaning Plans",
];

const commercialServices = [
  "Office Cleaning",
  "Retail Cleaning",
  "Facility Care",
  "Post-Construction Cleaning",
  "Floor Care",
  "Custom Cleaning Plans",
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

function Chevron({ down = false }: { down?: boolean }) {
  return <span className={down ? "chevron chevron--down" : "chevron"} aria-hidden="true" />;
}

function Dropdown({ items, kind }: { items: string[]; kind: "residential" | "commercial" }) {
  return (
    <div className={`service-menu service-menu--${kind}`} role="menu">
      {items.map((item, index) => (
        <a className="service-menu__item" href="#services" role="menuitem" key={item}>
          <span>{item}</span>
          {index !== items.length - 1 ? <Chevron /> : null}
        </a>
      ))}
    </div>
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

export default function Home() {
  const [openMenu, setOpenMenu] = useState<MenuName>("residential");
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menu: Exclude<MenuName, null>) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  return (
    <main className="site-frame">
      <header className="site-header">
        <div className="header-shell">
          <a className="brand" href="#" aria-label="Endeavor Cleaning home">
            <img src="/assets/endeavor-logo-v1.png" alt="Endeavor — A Tradition of Quality Cleaning" />
          </a>

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
            <div className="nav-service">
              <button
                className={`nav-link nav-link--service ${openMenu === "residential" ? "nav-link--active" : ""}`}
                type="button"
                aria-haspopup="menu"
                aria-expanded={openMenu === "residential"}
                onMouseEnter={() => setOpenMenu("residential")}
                onFocus={() => setOpenMenu("residential")}
                onClick={() => toggleMenu("residential")}
              >
                Residential <Chevron down />
              </button>
              {openMenu === "residential" ? <Dropdown items={residentialServices} kind="residential" /> : null}
            </div>

            <div className="nav-service">
              <button
                className={`nav-link nav-link--service ${openMenu === "commercial" ? "nav-link--active" : ""}`}
                type="button"
                aria-haspopup="menu"
                aria-expanded={openMenu === "commercial"}
                onMouseEnter={() => setOpenMenu("commercial")}
                onFocus={() => setOpenMenu("commercial")}
                onClick={() => toggleMenu("commercial")}
              >
                Commercial <Chevron down />
              </button>
              {openMenu === "commercial" ? <Dropdown items={commercialServices} kind="commercial" /> : null}
            </div>

            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#contact">Contact Us</a>
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
            <h1>A tradition of quality cleaning</h1>
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

        <section className="service-grid" id="services" aria-label="Endeavor cleaning services">
          {serviceCards.map((service) => (
            <a className="service-card" href="#contact" key={service.name}>
              <img src={service.image} alt="" />
              <span>{service.name}</span>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
