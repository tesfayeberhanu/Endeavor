"use client";

import { useState } from "react";

type MenuName = "home" | "personal" | null;

const homeServices = [
  "Packages & Contracts",
  "AC Services",
  "Furniture Cleaning Services",
  "Water & Pipeline Services",
  "Home Deep Cleaning Services",
  "Pest Control Services",
  "Mold Removal",
  "Painting & Moving",
  "Indoor Environmental Testing Services",
  "Maid Services",
  "Home Improvement",
  "Other Home Services & Products",
];

const personalServices = [
  "Pet Care Services",
  "Mom & Baby",
  "Healthcare At Home",
  "Spa & Beauty At Home",
  "Health & Nutrition",
  "Laundry Services",
  "Other Personal Services & Products",
];

const serviceCards = [
  { name: "AC Cleaning", image: "/assets/ac.webp" },
  { name: "Mattress Cleaning", image: "/assets/mattress.webp" },
  { name: "Furniture Cleaning", image: "/assets/sofa.webp" },
  { name: "Home Deep Cleaning", image: "/assets/deep-clean.webp" },
  { name: "Pest Control", image: "/assets/pest.webp" },
  { name: "Home Inspection", image: "/assets/inspection.webp" },
  { name: "Water Tank Cleaning", image: "/assets/water.webp" },
  { name: "Contract & Packages", image: "/assets/contract.webp" },
  { name: "More services", image: "/assets/more.webp" },
];

function Chevron({ down = false }: { down?: boolean }) {
  return <span className={down ? "chevron chevron--down" : "chevron"} aria-hidden="true" />;
}

function Dropdown({ items, kind }: { items: string[]; kind: "home" | "personal" }) {
  return (
    <div className={`service-menu service-menu--${kind}`} role="menu">
      {items.map((item, index) => (
        <a className="service-menu__item" href="https://thehealthyhome.me/en/ae/services" role="menuitem" key={item}>
          <span>{item}</span>
          {kind === "home" || index !== 5 ? <Chevron /> : null}
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
  const [openMenu, setOpenMenu] = useState<MenuName>("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menu: Exclude<MenuName, null>) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  return (
    <main className="site-frame">
      <header className="site-header">
        <div className="header-shell">
          <a className="brand" href="https://thehealthyhome.me/en/ae" aria-label="The Healthy Home">
            <img src="/assets/logo.svg" alt="The Healthy Home" />
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
                className={`nav-link nav-link--service ${openMenu === "home" ? "nav-link--active" : ""}`}
                type="button"
                aria-haspopup="menu"
                aria-expanded={openMenu === "home"}
                onMouseEnter={() => setOpenMenu("home")}
                onFocus={() => setOpenMenu("home")}
                onClick={() => toggleMenu("home")}
              >
                Home Services <Chevron down />
              </button>
              {openMenu === "home" ? <Dropdown items={homeServices} kind="home" /> : null}
            </div>

            <div className="nav-service">
              <button
                className={`nav-link nav-link--service ${openMenu === "personal" ? "nav-link--active" : ""}`}
                type="button"
                aria-haspopup="menu"
                aria-expanded={openMenu === "personal"}
                onMouseEnter={() => setOpenMenu("personal")}
                onFocus={() => setOpenMenu("personal")}
                onClick={() => toggleMenu("personal")}
              >
                Personal Services <Chevron down />
              </button>
              {openMenu === "personal" ? <Dropdown items={personalServices} kind="personal" /> : null}
            </div>

            <a className="nav-link" href="https://shop.thehealthyhome.me/">Shop</a>
            <a className="nav-link" href="https://thehealthyhome.me/en/ae/contact-us">Contact Us</a>
          </nav>

          <div className="nav-actions">
            <a className="book-button" href="https://service.thehealthyhome.me/en/ae" aria-label="Book a service now">
              <span className="calendar-icon" aria-hidden="true">□</span>
              Book Now
            </a>
            <a className="contact-icon contact-icon--call" href="tel:80072648493" aria-label="Call us">
              <CallIcon />
            </a>
            <a className="contact-icon contact-icon--whatsapp" href="https://takecontrol.thehealthyhome.me/talk-to-an-expert" aria-label="Contact us on WhatsApp">
              <WhatsAppIcon />
            </a>
          </div>

          <a className="language" href="https://thehealthyhome.me/ar/ae" aria-label="Switch to Arabic">
            <img src="/assets/uae.webp" alt="UAE flag" />
            <span lang="ar" dir="rtl">العربية</span>
          </a>
        </div>
      </header>

      <div className="content-shell">
        <section className="hero-grid" aria-label="The Healthy Home overview">
          <div className="hero-banner">
            <img src="/assets/hero.webp" alt="A bright, healthy family living room" />
            <h1>A world of wellness for your family</h1>
            <div className="stats-panel">
              <div><strong>61,000+</strong><span>Happy Customers</span></div>
              <div><strong>4.9/5*</strong><span>Google Rating</span></div>
              <div><strong>7,000+</strong><span>Customer Reviews</span></div>
              <div><strong>12+ Years</strong><span>of Healthy Living</span></div>
            </div>
          </div>

          <aside className="side-panels" aria-label="Health and sustainability information">
            <a className="air-card" href="https://thehealthyhome.me/en/ae/air-quality-index-dubai">
              <div className="panel-title-row">
                <h2>What is your air quality today?</h2>
                <span className="north-east" aria-hidden="true">↗</span>
              </div>
              <div className="air-details">
                <div className="air-gauge"><span>124</span></div>
                <div className="air-copy">
                  <strong>Unhealthy for Sensitive Groups</strong>
                  <p>Air quality is unhealthy for sensitive groups.</p>
                </div>
              </div>
            </a>

            <a className="forest-card" href="https://thehealthyhome.me/en/ae/sustainability">
              <img src="/assets/forest.webp" alt="Hands planting a young tree" />
              <div className="forest-copy">
                <span className="plant-badge" aria-hidden="true">🌱</span>
                <div><strong>11,811+ Trees planted</strong><span>View The Healthy Home® Forest</span></div>
              </div>
            </a>
          </aside>
        </section>

        <section className="service-grid" aria-label="Popular home services">
          {serviceCards.map((service) => (
            <a className="service-card" href="https://thehealthyhome.me/en/ae/services" key={service.name}>
              <img src={service.image} alt="" />
              <span>{service.name}</span>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
