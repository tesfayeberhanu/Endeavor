import Link from "next/link";

import { services } from "@/lib/services";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="content-shell footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="Endeavor Cleaning home">
            <img src="/assets/endeavor-logo-v1.png" alt="Endeavor — A Tradition of Quality Cleaning" />
          </Link>
          <p>Professional cleaning for homes and businesses across Dubai.</p>
          <div className="footer-contact-quick">
            <a href="tel:+971529597778">+971 52 959 7778</a>
            <a href="https://wa.me/971588754060">WhatsApp us</a>
          </div>
        </div>

        <div className="footer-col">
          <h2>Popular services</h2>
          <ul>
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.shortName}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2>Company</h2>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/services">All Services</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h2>Book & contact</h2>
          <ul>
            <li><Link href="/book">Book a Service</Link></li>
            <li><a href="https://wa.me/971588754060">WhatsApp · +971 58 875 4060</a></li>
            <li><a href="tel:+971529597778">Mobile · +971 52 959 7778</a></li>
            <li><a href="tel:+97142508515">Office · +971 4 250 8515</a></li>
          </ul>
        </div>
      </div>

      <div className="content-shell footer-bottom">
        <span>© 2026 Endeavor Cleaning. All rights reserved.</span>
        <span>Dubai, United Arab Emirates</span>
      </div>
    </footer>
  );
}

