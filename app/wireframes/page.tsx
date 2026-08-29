import type { Metadata } from "next";
import Link from "next/link";

import WireframeShell from "./_components/WireframeShell";
import styles from "./wireframe.module.css";

export const metadata: Metadata = {
  title: "Homepage Wireframe | Endeavor Cleaning",
  description: "Review wireframe for the proposed Endeavor Cleaning homepage.",
};

const services = [
  { name: "AC Cleaning", code: "AC", copy: "Cleaner AC components for fresher indoor air.", priority: true, href: "/wireframes/ac-cleaning", cta: "View options" },
  { name: "Water Tank Cleaning", code: "WT", copy: "Professional care for household water storage.", priority: true, href: "#book", cta: "View options" },
  { name: "Specialized Deep Cleaning", code: "DC", copy: "Detailed cleaning shaped around your property.", href: "#book", cta: "Request quote" },
  { name: "External Window & Façade", code: "WF", copy: "Clearer glass and a cleaner building exterior.", href: "#book", cta: "Request quote" },
  { name: "Sofa Cleaning", code: "SF", copy: "Targeted care for everyday upholstery build-up.", href: "#book", cta: "View options" },
  { name: "Mattress Cleaning", code: "MT", copy: "A deeper clean for where you rest.", href: "#book", cta: "View options" },
  { name: "Carpet Cleaning", code: "CP", copy: "Lift embedded dirt from fitted and loose carpets.", href: "#book", cta: "View options" },
  { name: "Marble Polishing", code: "MP", copy: "Restore clarity and shine to marble surfaces.", href: "#book", cta: "Request quote" },
  { name: "Post-Construction Cleaning", code: "PC", copy: "Prepare newly completed spaces for handover.", href: "#book", cta: "Request quote" },
  { name: "Move-In / Move-Out", code: "MI", copy: "A thorough reset before or after a move.", href: "#book", cta: "Request quote" },
  { name: "Kitchen Duct Cleaning", code: "KD", copy: "Specialist cleaning for kitchen extraction systems.", href: "#book", cta: "Request quote" },
  { name: "Bathroom Deep Cleaning", code: "BD", copy: "Focused cleaning for high-use bathroom areas.", href: "#book", cta: "View options" },
];

const reasons = [
  ["01", "Established Dubai experience", "Operating since 2014 — verify before publication."],
  ["02", "Trained, insured technicians", "Training and insurance wording to be verified."],
  ["03", "Professional materials & equipment", "Approval and certification language to be verified."],
  ["04", "Clear options and pricing", "Show inclusions, exclusions, duration and VAT status."],
  ["05", "Documented service results", "Before-and-after reporting where applicable."],
  ["06", "Responsive customer support", "Direct help by phone and WhatsApp."],
];

const popularOptions = [
  ["AC Cleaning", "Pure Flow", "AED —", "/wireframes/ac-cleaning"],
  ["AC Cleaning", "Fresh Air", "AED —", "/wireframes/ac-cleaning"],
  ["Water Tank Cleaning", "By tank size / property", "AED —", "#book"],
  ["Deep Cleaning", "Exact quote by property", "From AED —", "#book"],
];

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className={styles.sectionHeading}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
export default function HomepageWireframe() {
  return (
    <WireframeShell pageLabel="01 · Homepage">
      <section className={`${styles.shell} ${styles.homeHero}`}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Professional cleaning · Dubai</span>
          <h1>Professional Cleaning Services for Healthier Homes and Businesses in Dubai</h1>
          <p>Trusted specialists in AC cleaning, water tank cleaning, deep cleaning and other professional cleaning services.</p>
          <div className={styles.buttonRow}>
            <a className={styles.primaryButton} href="#services">View Services <span aria-hidden="true">↓</span></a>
            <a className={styles.secondaryButton} href="#book">Book a Service <span aria-hidden="true">→</span></a>
          </div>
          <div className={styles.heroProof} aria-label="Trust information to verify">
            <div><strong>Google rating</strong><span>Verify rating + count</span></div>
            <div><strong>Since 2014</strong><span>Verify experience claim</span></div>
            <div><strong>Certified team</strong><span>Verify credentials</span></div>
            <div><strong>Dubai-wide</strong><span>Confirm coverage</span></div>
          </div>
        </div>
        <div className={styles.heroMedia} aria-label="Proposed Endeavor team image placement">
          <span className={styles.mediaLabel}>Authentic Endeavor team / equipment image</span>
          <div className={styles.mediaSketch} aria-hidden="true">
            <span /><span /><span />
          </div>
          <div className={styles.heroHelp}>
            <span className={styles.helpIcon}>?</span>
            <div><strong>Not sure which service?</strong><a href="https://wa.me/971588754060">Ask us on WhatsApp →</a></div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="services">
        <div className={styles.shell}>
          <div className={styles.headingRow}>
            <SectionHeading
              eyebrow="Find your service"
              title="What would you like us to clean?"
              copy="Priority services appear first. Swipe or scroll to see every active service."
            />
            <span className={styles.scrollHint}>← Drag to explore →</span>
          </div>
          <div className={styles.serviceRail}>
            {services.map((service) => (
              <Link className={styles.serviceCard} href={service.href} key={service.name}>
                <div className={styles.serviceVisual}>
                  <span>{service.code}</span>
                  {service.priority ? <em>Priority</em> : null}
                  <small>Service image</small>
                </div>
                <div className={styles.serviceCardBody}>
                  <h3>{service.name}</h3>
                  <p>{service.copy}</p>
                  <span className={styles.priceLine}>Starting from AED — <i>Price Book</i></span>
                  <span className={styles.cardCta}>{service.cta} <b aria-hidden="true">→</b></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`} id="why">
        <div className={`${styles.shell} ${styles.reasonLayout}`}>
          <SectionHeading
            eyebrow="Why Endeavor"
            title="A professional team, with every detail made clear"
            copy="Short, proof-led reasons to choose Endeavor. Every factual claim remains subject to verification."
          />
          <div className={styles.reasonGrid}>
            {reasons.map(([number, title, copy]) => (
              <article className={styles.reasonCard} key={title}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <SectionHeading eyebrow="How it works" title="From choosing to cleaning in three clear steps" />
          <ol className={styles.stepGrid}>
            <li><span>1</span><div><h3>Choose your service</h3><p>Compare the right service and package for your space.</p></div></li>
            <li><span>2</span><div><h3>Select an option and time</h3><p>Share the details Endeavor needs to confirm the visit.</p></div></li>
            <li><span>3</span><div><h3>We confirm and complete</h3><p>Inspection-based work receives a confirmed quotation before it begins.</p></div></li>
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.shell}>
          <div className={styles.headingRow}>
            <SectionHeading
              eyebrow="Popular options"
              title="Common choices, ready to compare"
              copy="Each option leads to its matching service page, not a generic contact form."
            />
            <span className={styles.verifyTag}>All prices + VAT status to verify</span>
          </div>
          <div className={styles.popularGrid}>
            {popularOptions.map(([service, option, price, href], index) => (
              <Link href={href} className={styles.popularCard} key={`${service}-${option}`}>
                <span className={styles.popularIndex}>0{index + 1}</span>
                <small>{service}</small>
                <h3>{option}</h3>
                <strong>{price}</strong>
                <span>See package details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="reviews">
        <div className={`${styles.shell} ${styles.resultsLayout}`}>
          <div>
            <SectionHeading
              eyebrow="Results & reviews"
              title="Real work. Genuine customer feedback."
              copy="Only approved Endeavor photography and verified Google reviews will be published here."
            />
            <div className={styles.beforeAfter}>
              <div><span>Before</span><small>Verified service photo</small></div>
              <div><span>After</span><small>Matching result photo</small></div>
            </div>
          </div>
          <div className={styles.reviewCard}>
            <div className={styles.reviewStars}>☆ ☆ ☆ ☆ ☆</div>
            <blockquote>Verified review excerpt will appear here after approval.</blockquote>
            <p>Customer name · Service type · Permission confirmed</p>
            <a className={styles.textLink} href="#reviews">Read our Google Reviews <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.finalCta}`} id="book">
        <div>
          <span>Need a hand choosing?</span>
          <h2>Ready for a cleaner, healthier space?</h2>
          <p>Choose a service to book, or speak with the team for help and exact-quote services.</p>
        </div>
        <div className={styles.finalActions}>
          <Link className={styles.lightButton} href="/wireframes/ac-cleaning">Book a Service</Link>
          <a className={styles.outlineLightButton} href="https://wa.me/971588754060">WhatsApp Us</a>
          <a className={styles.textLightButton} href="tel:+971529597778">Call Us →</a>
        </div>
      </section>
    </WireframeShell>
  );
}
