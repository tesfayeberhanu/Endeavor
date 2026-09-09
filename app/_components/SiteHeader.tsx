"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { services } from "@/lib/services";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact" },
];

function Chevron() {
  return <span className="chevron" aria-hidden="true" />;
}

function CallIcon() {
  return (
    <svg viewBox="0 0 37 37" aria-hidden="true">
      <circle cx="18.5" cy="18.5" r="17.5" />
      <path d="M10 14.3c0-1.1.4-2.1 1.1-2.9.7-.8 1.7-1.3 2.7-1.4.2 0 .4.1.5.3l2 4.5c.1.2.1.4 0 .5l-2 2.3-.4.5.3.6c.8 1.6 2.5 3.3 4.2 4.1l.6.3.5-.4 2.3-2c.1-.1.3-.1.5 0l4.5 2c.2.1.3.3.3.5-.1 1-.7 2-1.4 2.7-.8.7-1.8 1.1-2.9 1.1C15.7 27 10 21.3 10 14.3Z" className="call-glyph" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 43 43" aria-hidden="true">
      <circle cx="21.5" cy="21.5" r="20.5" />
      <path d="M33.9 8.7A17.4 17.4 0 0 0 21.4 3.6 17.6 17.6 0 0 0 6.1 30l-2.5 9.1 9.4-2.5a17.6 17.6 0 0 0 26-15.4c0-4.7-1.8-9.1-5.1-12.5Zm-12.5 27c-2.7 0-5.2-.7-7.5-2l-.5-.3-5.6 1.5 1.5-5.4-.3-.6a14.6 14.6 0 0 1 12.4-22.4c3.9 0 7.6 1.5 10.3 4.3A14.6 14.6 0 0 1 21.4 35.7Zm8-10.8c-.4-.2-2.6-1.3-3-1.5-.4-.1-.7-.2-1 .2l-1.4 1.7c-.2.3-.5.3-.9.1-2.6-1.1-4.5-2.9-6-5.3-.2-.4 0-.7.2-.9l1.1-1.5c.1-.3.1-.6 0-.8l-1.4-3.3c-.4-.9-.8-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-.4.4-1.5 1.5-1.5 3.7 0 2.1 1.6 4.2 1.8 4.5.2.3 3.1 4.8 7.5 6.7 1 .5 1.8.7 2.5.9 1 .3 2 .3 2.8.2.9-.1 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1-.2-.2-.5-.3-.9-.5Z" className="whatsapp-glyph" />
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesActive = pathname.startsWith("/services");

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header site-header--shared">
      <div className="header-shell">
        <Link className="brand" href="/" aria-label="Endeavor Cleaning home" onClick={() => setMobileOpen(false)}>
          <img src="/assets/endeavor-logo-v1.png" alt="Endeavor — A Tradition of Quality Cleaning" />
        </Link>

        <button
          className="mobile-toggle"
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`primary-nav ${mobileOpen ? "primary-nav--open" : ""}`} aria-label="Main navigation">
          <Link className={`nav-link ${pathname === "/" ? "nav-link--active" : ""}`} href="/" onClick={() => setMobileOpen(false)}>Home</Link>

          <div
            className="nav-services-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`nav-link nav-link--service ${servicesActive ? "nav-link--active" : ""}`}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services <span aria-hidden="true">⌄</span>
            </button>
            {servicesOpen ? (
              <div className="nav-services-panel">
                <Link className="nav-services-all" href="/services" onClick={closeMenus}>Explore all services <span>→</span></Link>
                <div className="nav-services-categories">
                  {services.map((service) => (
                    <div className="nav-services-category" key={service.slug}>
                      <Link href={`/services/${service.slug}`} onClick={closeMenus}>
                        <span>{service.name}</span>
                        <Chevron />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              className={`nav-link ${pathname === link.href ? "nav-link--active" : ""}`}
              href={link.href}
              key={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link className="book-button" href="/book">
            <span className="calendar-icon" aria-hidden="true" />
            Book Now
          </Link>
          <a className="contact-icon contact-icon--call" href="tel:+971529597778" aria-label="Call Endeavor Cleaning on +971 52 959 7778">
            <CallIcon />
          </a>
          <a className="contact-icon contact-icon--whatsapp" href="https://wa.me/971588754060" aria-label="Message Endeavor Cleaning on WhatsApp">
            <WhatsAppIcon />
          </a>
        </div>

        <div className="brand-note"><span aria-hidden="true" />Dubai service</div>
      </div>
    </header>
  );
}

