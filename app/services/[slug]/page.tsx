import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import SiteFrame from "@/app/_components/SiteFrame";
import { getService, services } from "@/lib/services";
import PackageOptions from "./PackageOptions";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return {
    title: service.seoTitle ?? `${service.name} Dubai | Endeavor Cleaning`,
    description: service.seoDescription ?? service.summary,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const bookingQuery = { service: service.slug, mode: service.quoteOnly ? "quote" : "booking" };
  const relatedServices = services.filter((item) => item.slug !== service.slug && item.category === service.category).slice(0, 3);

  return (
    <SiteFrame>
      <main className="inner-page">
        <div className="inner-shell breadcrumbs">
          <Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><strong>{service.name}</strong>
        </div>

        <section className="inner-shell service-hero">
          <div className="service-hero__copy">
            <span className="page-eyebrow">{service.category}</span>
            <h1>{service.name}</h1>
            <p>{service.summary}</p>
            <div className="service-price-box">
              <small>Pricing approach</small>
              <strong>{service.priceNote}</strong>
              <span>Final confirmation states the scope and VAT status.</span>
            </div>
            <div className="page-hero__actions">
              {service.packages ? (
                <a className="solid-action" href="#options">View Cleaning Options</a>
              ) : (
                <Link className="solid-action" href={{ pathname: "/book", query: bookingQuery }}>
                  {service.quoteOnly ? "Request an Exact Quote" : "Start Booking"}
                </Link>
              )}
              <a className="outline-action" href={`https://wa.me/971588754060?text=${encodeURIComponent(`Hello Endeavor, I need help choosing an option for ${service.name}.`)}`}>
                Ask Us on WhatsApp
              </a>
            </div>
            <p className="provisional-note">Requests remain provisional until price, availability and access are confirmed.</p>
            {service.trustPoints ? (
              <ul className="service-trust-points">
                {service.trustPoints.map((point) => (
                  <li key={point}><span aria-hidden="true">✓</span>{point}</li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="service-hero__media">
            <img src={service.image} alt={`${service.name} service by Endeavor Cleaning`} />
            <div className="service-hero__icon"><img src={service.icon} alt="" /></div>
          </div>
        </section>

        <section className="service-concerns-band" aria-label={`Reasons to consider ${service.name}`}>
          <div className="inner-shell">
            {service.concerns.map((concern, index) => (
              <div key={concern}><span>0{index + 1}</span><strong>{concern}</strong></div>
            ))}
          </div>
          {service.limitations ? <p className="inner-shell service-limitations-note">{service.limitations}</p> : null}
        </section>

        {service.packages ? (
          <section className="inner-section inner-shell" id="options">
            <div className="inner-section-heading">
              <span className="page-eyebrow">Service options</span>
              <h2>Compare Endeavor’s {service.shortName} options</h2>
            </div>
            <PackageOptions packages={service.packages} bookingQuery={bookingQuery} />
          </section>
        ) : null}

        {service.comparisonRows && service.packages ? (
          <section className="inner-section inner-shell">
            <div className="inner-section-heading">
              <span className="page-eyebrow">Comparison</span>
              <h2>What each option includes</h2>
            </div>
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    {service.packages.map((servicePackage) => <th scope="col" key={servicePackage.name}>{servicePackage.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {service.comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      {row.values.map((value, index) => <td key={index}>{value}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        <section className="inner-section inner-shell service-detail-grid">
          <div>
            <div className="inner-section-heading">
              <span className="page-eyebrow">What is included</span>
              <h2>A clear scope before work begins</h2>
            </div>
            <ul className="included-list">
              {service.inclusions.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
            </ul>
          </div>

          <aside className="service-fact-panel">
            <div><small>Estimated duration</small><strong>{service.duration}</strong></div>
            <div><small>Customer preparation</small><strong>{service.preparation}</strong></div>
            <div><small>Need clarification?</small><a href="tel:+971529597778">Call +971 52 959 7778 →</a></div>
          </aside>
        </section>

        <section className="inner-section service-process-section">
          <div className="inner-shell">
            <div className="inner-section-heading">
              <span className="page-eyebrow">How the service works</span>
              <h2>{service.steps.length} steps from request to handover</h2>
            </div>
            <ol className="service-process-grid">
              {service.steps.map((step, index) => (
                <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step}</h3></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="inner-section inner-shell faq-section">
          <div className="inner-section-heading">
            <span className="page-eyebrow">Frequently asked questions</span>
            <h2>Useful details before you request a visit</h2>
          </div>
          <div className="faq-list">
            {service.faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="inner-shell service-cta-panel">
          <div><span>Ready to continue?</span><h2>{service.quoteOnly ? "Tell us what the property needs" : `Request your ${service.shortName} appointment`}</h2></div>
          <div>
            <Link className="light-action" href={{ pathname: "/book", query: bookingQuery }}>
              {service.quoteOnly ? "Request an Exact Quote" : "Book Now"}
            </Link>
            <a href="https://wa.me/971588754060">WhatsApp Us →</a>
          </div>
        </section>

        {relatedServices.length ? (
          <section className="inner-section inner-shell related-services">
            <div className="inner-section-heading"><span className="page-eyebrow">Related services</span><h2>You may also need</h2></div>
            <div className="related-service-grid">
              {relatedServices.map((item) => (
                <Link href={`/services/${item.slug}`} key={item.slug}>
                  <span><img src={item.icon} alt="" /></span>
                  <div><h3>{item.shortName}</h3><p>View service details →</p></div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </SiteFrame>
  );
}
