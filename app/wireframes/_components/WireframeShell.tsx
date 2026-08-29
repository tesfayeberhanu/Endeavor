import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import styles from "../wireframe.module.css";

const serviceLinks = [
  "AC Cleaning",
  "Water Tank Cleaning",
  "Specialized Deep Cleaning",
  "External Window & Façade Cleaning",
  "Sofa Cleaning",
  "Mattress Cleaning",
  "Carpet Cleaning",
  "Marble Polishing",
  "Post-Construction Cleaning",
  "Move-In / Move-Out Cleaning",
  "Kitchen Duct Cleaning",
  "Bathroom Deep Cleaning",
];

type WireframeShellProps = {
  children: ReactNode;
  pageLabel: string;
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 3.8 4.6 5.9c-.8.7-.9 1.8-.4 2.7 2.8 5.4 6.1 8.7 11.5 11.5.9.5 2 .3 2.7-.4l2.1-2.6-4.2-3-2 2c-2.8-1.4-5.1-3.7-6.5-6.5l2-2-2.6-3.8Z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.2-4.3A8.5 8.5 0 1 1 20.5 11.8Zm-5 1.7c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.2l-.8 1c-.1.2-.3.2-.5.1-1.5-.6-2.6-1.7-3.4-3-.1-.2 0-.4.1-.5l.6-.9c.1-.1.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.8.9-.8 2.1s.9 2.4 1 2.6c.1.2 1.8 2.7 4.3 3.8 1.6.7 2.6.7 3.5.5.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.2 0-.6 0-1-.1Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3v3m12-3v3M4 9h16M5.5 5h13A1.5 1.5 0 0 1 20 6.5v13A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5v-13A1.5 1.5 0 0 1 5.5 5Z" />
    </svg>
  );
}

export default function WireframeShell({ children, pageLabel }: WireframeShellProps) {
  return (
    <main className={styles.wireframe}>
      <div className={styles.reviewStrip}>
        <div className={styles.shell}>
          <span><strong>Review wireframe</strong> · Structure and customer journey only</span>
          <span className={styles.reviewPage}>{pageLabel}</span>
        </div>
      </div>

      <header className={styles.header}>
        <div className={`${styles.shell} ${styles.headerInner}`}>
          <Link className={styles.logo} href="/wireframes" aria-label="Endeavor wireframe homepage">
            <Image
              src="/assets/endeavor-logo-v1.png"
              alt="Endeavor — A Tradition of Quality Cleaning"
              width={2172}
              height={724}
              priority
            />
          </Link>

          <nav className={styles.desktopNav} aria-label="Main navigation">
            <Link href="/wireframes">Home</Link>
            <details className={styles.serviceMenu}>
              <summary>Services <span aria-hidden="true">⌄</span></summary>
              <div className={styles.serviceMenuPanel}>
                <strong>Professional cleaning services</strong>
                <div className={styles.serviceMenuGrid}>
                  {serviceLinks.map((service, index) => (
                    <Link
                      href={index === 0 ? "/wireframes/ac-cleaning" : "/wireframes#services"}
                      key={service}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </details>
            <Link href="/wireframes#why">About Us</Link>
            <Link href="/wireframes#reviews">Reviews</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <Link className={styles.headerBook} href="#book">
            Book a Service <span aria-hidden="true">→</span>
          </Link>

          <details className={styles.mobileMenu}>
            <summary aria-label="Open navigation"><span /><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <Link href="/wireframes">Home</Link>
              <Link href="/wireframes#services">Services</Link>
              <Link href="/wireframes#why">About Us</Link>
              <Link href="/wireframes#reviews">Reviews</Link>
              <Link href="#contact">Contact</Link>
              <Link href="#book">Book a Service</Link>
            </nav>
          </details>
        </div>
      </header>

      {children}

      <footer className={styles.footer} id="contact">
        <div className={`${styles.shell} ${styles.footerGrid}`}>
          <div className={styles.footerBrand}>
            <Image
              src="/assets/endeavor-logo-v1.png"
              alt="Endeavor Cleaning"
              width={2172}
              height={724}
            />
            <p>Professional cleaning for healthier homes and businesses across Dubai.</p>
            <span className={styles.verifyTag}>Service statement for approval</span>
          </div>
          <div>
            <h2>Priority services</h2>
            <Link href="/wireframes/ac-cleaning">AC Cleaning</Link>
            <Link href="/wireframes#services">Water Tank Cleaning</Link>
            <Link href="/wireframes#services">Specialized Deep Cleaning</Link>
            <Link href="/wireframes#services">View all services</Link>
          </div>
          <div>
            <h2>Contact</h2>
            <a href="tel:+971529597778">Mobile · +971 52 959 7778</a>
            <a href="tel:+97142508515">Office · +971 4 250 8515</a>
            <a href="https://wa.me/971588754060">WhatsApp · +971 58 875 4060</a>
          </div>
          <div>
            <h2>Information</h2>
            <Link href="/wireframes#why">About Us</Link>
            <Link href="/wireframes#reviews">Reviews</Link>
            <Link href="#book">Booking terms</Link>
            <Link href="#contact">Privacy policy</Link>
          </div>
        </div>
        <div className={`${styles.shell} ${styles.footerBase}`}>
          <span>© Endeavor Cleaning Services</span>
          <span>Dubai, United Arab Emirates</span>
        </div>
      </footer>

      <nav className={styles.mobileDock} aria-label="Quick contact">
        <a href="tel:+971529597778"><PhoneIcon /><span>Call</span></a>
        <a href="https://wa.me/971588754060"><WhatsAppIcon /><span>WhatsApp</span></a>
        <a href="#book"><CalendarIcon /><span>Book Now</span></a>
      </nav>
    </main>
  );
}
