import type { Metadata } from "next";
import Link from "next/link";

import WireframeShell from "../_components/WireframeShell";
import styles from "../wireframe.module.css";

export const metadata: Metadata = {
  title: "AC Cleaning Wireframe | Endeavor Cleaning",
  description: "Review wireframe for the proposed Endeavor AC Cleaning service page.",
};

const comparisonRows = [
  ["Price per AC unit", "AED —", "AED —", "AED —"],
  ["Core components included", "Price Book", "Price Book", "Price Book"],
  ["Components excluded", "Confirm", "Confirm", "Confirm"],
  ["Recommended use", "Confirm", "Confirm", "Confirm"],
  ["Approximate duration", "— mins", "— mins", "— mins"],
  ["VAT status", "Confirm", "Confirm", "Confirm"],
];

const processSteps = [
  ["01", "Confirm access", "The technician reviews unit type, access and the selected package."],
  ["02", "Protect the area", "Nearby surfaces and furnishings are prepared before work starts."],
  ["03", "Complete the clean", "The approved package scope is completed with professional equipment."],
  ["04", "Document & hand over", "Results are checked and service documentation is shared where applicable."],
];

const faqItems = [
  "Which AC cleaning package is right for my unit?",
  "How long does AC cleaning take?",
  "Do I need to switch off the AC before the team arrives?",
  "What is included—and what may cost extra?",
  "How often should AC units be professionally cleaned?",
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
export default function AcCleaningWireframe() {
  return (
    <WireframeShell pageLabel="02 · AC Cleaning">
      <div className={`${styles.shell} ${styles.breadcrumbs}`}>
        <Link href="/wireframes">Home</Link><span>/</span><Link href="/wireframes#services">Services</Link><span>/</span><strong>AC Cleaning</strong>
      </div>

      <section className={`${styles.shell} ${styles.acHero}`}>
        <div className={styles.acHeroCopy}>
          <span className={styles.eyebrow}>AC cleaning · Dubai</span>
          <h1>A clearer AC cleaning choice for fresher indoor air</h1>
          <p>Compare three service levels, see exactly what each includes, then request your preferred time without leaving this page.</p>
          <div className={styles.acPriceLine}>
            <div><small>Starting from</small><strong>AED — <em>/ unit</em></strong></div>
            <span>VAT status to be confirmed</span>
          </div>
          <div className={styles.buttonRow}>
            <a className={styles.primaryButton} href="#packages">Compare packages <span aria-hidden="true">↓</span></a>
            <a className={styles.secondaryButton} href="#book">Book AC cleaning <span aria-hidden="true">→</span></a>
          </div>
          <div className={styles.acTrustRow}>
            <span>✓ Dubai coverage · confirm</span>
            <span>✓ Team credentials · verify</span>
            <span>✓ Service documentation · confirm</span>
          </div>
        </div>

        <form className={styles.quickBook} id="book">
          <div className={styles.formHeading}>
            <span>Start your booking</span>
            <small>Step 1 of 2</small>
          </div>
          <label>Service<input type="text" value="AC Cleaning" readOnly /></label>
          <div className={styles.formTwoCol}>
            <label>Package<select defaultValue=""><option value="" disabled>Select package</option><option>Pure Flow</option><option>Fresh Air</option><option>Full AC & Coil Clean — name pending</option></select></label>
            <label>Number of units<input type="number" min="1" placeholder="e.g. 2" /></label>
          </div>
          <label>Dubai location / community<input type="text" placeholder="Enter your area" /></label>
          <button type="button">Continue to date & details <span aria-hidden="true">→</span></button>
          <p>Booking is provisional until Endeavor confirms price, availability and access requirements.</p>
        </form>
      </section>

      <section className={styles.problemBand}>
        <div className={`${styles.shell} ${styles.problemGrid}`}>
          <div><span>01</span><strong>Dust around vents</strong></div>
          <div><span>02</span><strong>Stale or unpleasant airflow</strong></div>
          <div><span>03</span><strong>Reduced airflow</strong></div>
          <div><span>04</span><strong>Routine AC hygiene</strong></div>
        </div>
      </section>

      <section className={styles.section} id="packages">
        <div className={styles.shell}>
          <div className={styles.headingRow}>
            <SectionHeading
              eyebrow="Compare AC packages"
              title="Choose the level of cleaning your AC needs"
              copy="Approved Price Book data will replace every verification marker before publication."
            />
            <a className={styles.textLink} href="https://wa.me/971588754060">Ask us on WhatsApp →</a>
          </div>

          <div className={styles.packageCards}>
            <article>
              <span>Essential option</span><h3>Pure Flow</h3><strong>AED — <small>/ unit</small></strong><p>Package positioning to be confirmed.</p><a href="#book">Select Pure Flow</a>
            </article>
            <article className={styles.featuredPackage}>
              <span>Highlighted option · confirm</span><h3>Fresh Air</h3><strong>AED — <small>/ unit</small></strong><p>Package positioning to be confirmed.</p><a href="#book">Select Fresh Air</a>
            </article>
            <article>
              <span>Most comprehensive</span><h3>Full AC & Coil Clean</h3><em>Final name pending approval</em><strong>AED — <small>/ unit</small></strong><p>Package positioning to be confirmed.</p><a href="#book">Select full clean</a>
            </article>
          </div>

          <div className={styles.comparisonWrap}>
            <table className={styles.comparisonTable}>
              <caption>Detailed package comparison</caption>
              <thead><tr><th>Compare</th><th>Pure Flow</th><th>Fresh Air</th><th>Full clean · name pending</th></tr></thead>
              <tbody>
                {comparisonRows.map(([label, ...values]) => (
                  <tr key={label}><th>{label}</th>{values.map((value, index) => <td key={`${label}-${index}`}>{value}</td>)}</tr>
                ))}
                <tr className={styles.tableActions}><th>Next step</th><td><a href="#book">Book Now</a></td><td><a href="#book">Book Now</a></td><td><a href="#book">Book Now</a></td></tr>
              </tbody>
            </table>
          </div>
          <div className={styles.exclusionNote}><strong>What may be charged separately</strong><p>Access equipment, repairs, replacement parts and any package-specific exclusions will be listed here after Price Book confirmation.</p></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={`${styles.shell} ${styles.processLayout}`}>
          <div>
            <SectionHeading eyebrow="The service process" title="Know what happens before the team arrives" />
            <div className={styles.serviceMedia}>
              <span>Authentic AC cleaning image or short process diagram</span>
              <div aria-hidden="true"><i /><i /><i /></div>
            </div>
          </div>
          <ol className={styles.processList}>
            {processSteps.map(([number, title, copy]) => (
              <li key={title}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.shell} ${styles.detailGrid}`}>
          <article><span>Estimated duration</span><h3>Package + unit dependent</h3><p>Show the approved time per unit and any access factors that can change it.</p></article>
          <article><span>Recommended frequency</span><h3>Guidance to be approved</h3><p>Keep the recommendation service-specific and avoid unverified health claims.</p></article>
          <article><span>Customer preparation</span><h3>Clear the area around the unit</h3><p>Final preparation checklist to reflect access, furniture protection and power requirements.</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={`${styles.shell} ${styles.resultsLayout}`}>
          <div>
            <SectionHeading eyebrow="Before & after" title="Show the work, not stock promises" copy="Use a matching, verified Endeavor image pair with the package and AC type identified." />
            <div className={styles.beforeAfter}>
              <div><span>Before</span><small>Verified AC photo</small></div>
              <div><span>After</span><small>Matching AC result</small></div>
            </div>
          </div>
          <div className={styles.reviewCard}>
            <div className={styles.reviewStars}>☆ ☆ ☆ ☆ ☆</div>
            <blockquote>Approved AC-cleaning review excerpt appears here.</blockquote>
            <p>Customer name · AC Cleaning · Permission confirmed</p>
            <a className={styles.textLink} href="#reviews">Read our Google Reviews ↗</a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.shell} ${styles.faqLayout}`}>
          <SectionHeading eyebrow="Frequently asked questions" title="Answers before customers need to ask" copy="Concise, service-specific answers will be added after operational review." />
          <div className={styles.faqList}>
            {faqItems.map((item, index) => (
              <details key={item} open={index === 0}>
                <summary>{item}<span aria-hidden="true">+</span></summary>
                <p>Approved answer placeholder. Include package differences, exclusions and the correct next action.</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.bookingSection}`}>
        <div className={`${styles.shell} ${styles.bookingLayout}`}>
          <div>
            <SectionHeading eyebrow="Book AC cleaning" title="Send one structured request" copy="The chosen package and service are carried into the form automatically in the production flow." />
            <ul className={styles.bookingChecklist}>
              <li>Clear confirmation message</li>
              <li>Customer confirmation notification</li>
              <li>Structured Customer Growth lead</li>
              <li>Thank-you page for measurement</li>
            </ul>
          </div>
          <form className={styles.fullForm}>
            <div className={styles.formTwoCol}>
              <label>Selected service<input type="text" value="AC Cleaning" readOnly /></label>
              <label>Selected package<select defaultValue=""><option value="" disabled>Choose package</option><option>Pure Flow</option><option>Fresh Air</option><option>Full AC & Coil Clean — name pending</option></select></label>
              <label>Number of units<input type="number" min="1" placeholder="e.g. 2" /></label>
              <label>Property type<select defaultValue=""><option value="" disabled>Select property</option><option>Apartment</option><option>Villa</option><option>Office / business</option></select></label>
              <label>Customer name<input type="text" placeholder="Full name" /></label>
              <label>Mobile number<input type="tel" placeholder="+971" /></label>
              <label>Email (if required)<input type="email" placeholder="name@example.com" /></label>
              <label>Dubai location<input type="text" placeholder="Community / building" /></label>
              <label>Preferred date<input type="date" /></label>
              <label>Preferred time<select defaultValue=""><option value="" disabled>Select a window</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
            </div>
            <label>Additional notes<textarea rows={4} placeholder="Unit type, access notes or anything the team should know" /></label>
            <label className={styles.uploadField}>Photos (optional)<input type="file" multiple /><span>Upload useful AC or access photos</span></label>
            <label className={styles.checkboxField}><input type="checkbox" /> <span>I agree to the booking terms and understand this request is provisional until confirmed.</span></label>
            <button type="button">Submit booking request <span aria-hidden="true">→</span></button>
          </form>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <SectionHeading eyebrow="Related services" title="Often booked for a healthier property" />
          <div className={styles.relatedGrid}>
            {[["Water Tank Cleaning", "WT"], ["Specialized Deep Cleaning", "DC"], ["Sofa Cleaning", "SF"]].map(([name, code]) => (
              <Link href="/wireframes#services" key={name}><span>{code}</span><div><h3>{name}</h3><p>View service options and pricing →</p></div></Link>
            ))}
          </div>
        </div>
      </section>
    </WireframeShell>
  );
}
