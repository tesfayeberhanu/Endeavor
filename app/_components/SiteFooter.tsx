import Link from "next/link";

import SocialLinks from "./SocialLinks";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="content-shell footer-simple">
        <Link href="/" aria-label="Endeavor Cleaning home" className="footer-simple__logo">
          <img src="/assets/endeavor-logo-v1.png" alt="Endeavor — A Tradition of Quality Cleaning" />
        </Link>

        <p>Professional cleaning for homes and businesses across Dubai.</p>

        <SocialLinks />

        <nav className="footer-simple__links" aria-label="Footer">
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/book">Book a Service</Link>
        </nav>

        <div className="footer-contact-quick">
          <a href="tel:+971529597778">+971 52 959 7778</a>
          <a href="https://wa.me/971588754060">WhatsApp us</a>
        </div>
      </div>

      <div className="content-shell footer-bottom">
        <span>© 2026 Endeavor Cleaning. All rights reserved.</span>
        <span>Dubai, United Arab Emirates</span>
      </div>
    </footer>
  );
}
