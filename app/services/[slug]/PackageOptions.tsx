"use client";

import Link from "next/link";
import { useState } from "react";

import type { ServicePackage } from "@/lib/services";

type PackageOptionsProps = {
  packages: ServicePackage[];
  bookingQuery: { service: string; mode: string };
  ctaLabel?: string;
  noFeatured?: boolean;
};

function packageKey(servicePackage: ServicePackage) {
  return servicePackage.id ?? servicePackage.name;
}

export default function PackageOptions({ packages, bookingQuery, ctaLabel, noFeatured }: PackageOptionsProps) {
  const [openPackage, setOpenPackage] = useState<ServicePackage | null>(null);
  const defaultLabel = ctaLabel ?? "Select This Option";

  return (
    <>
      <div className="package-option-grid">
        {packages.map((servicePackage, index) => {
          const isFeatured = !noFeatured && index === packages.length - 1;
          const label = servicePackage.bookLabel ?? defaultLabel;
          return (
            <article className={isFeatured ? "package-option package-option--featured" : "package-option"} key={packageKey(servicePackage)}>
              {servicePackage.image ? (
                <div className="package-option__image"><img src={servicePackage.image} alt="" /></div>
              ) : null}
              <span className="package-option__badge">{isFeatured ? "Best Value" : `Option ${index + 1}`}</span>
              <h3>{servicePackage.name}</h3>
              {servicePackage.subtitle ? <p className="package-option__subtitle">{servicePackage.subtitle}</p> : null}
              {servicePackage.price ? <strong className="package-option__price">{servicePackage.price}</strong> : null}
              <div className="package-option__actions">
                <Link className="package-option__select" href={{ pathname: "/book", query: { ...bookingQuery, package: packageKey(servicePackage) } }}>
                  {label}
                </Link>
                <button type="button" className="package-option__more" onClick={() => setOpenPackage(servicePackage)}>
                  View More <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <div className={`package-panel-overlay ${openPackage ? "package-panel-overlay--open" : ""}`} onClick={() => setOpenPackage(null)} aria-hidden={!openPackage}>
        <aside className="package-panel" onClick={(event) => event.stopPropagation()} aria-hidden={!openPackage}>
          {openPackage ? (
            <>
              <button type="button" className="package-panel__close" onClick={() => setOpenPackage(null)} aria-label="Close details">
                ✕
              </button>
              {openPackage.image ? (
                <div className="package-panel__image"><img src={openPackage.image} alt="" /></div>
              ) : null}
              <h3>{openPackage.name}</h3>
              {openPackage.subtitle ? <p className="package-panel__subtitle">{openPackage.subtitle}</p> : null}
              {openPackage.price ? <strong className="package-panel__price">{openPackage.price}</strong> : null}
              <p>{openPackage.note}</p>
              <Link
                className="package-panel__cta"
                href={{ pathname: "/book", query: { ...bookingQuery, package: packageKey(openPackage) } }}
              >
                {openPackage.bookLabel ?? defaultLabel}
              </Link>
            </>
          ) : null}
        </aside>
      </div>
    </>
  );
}
