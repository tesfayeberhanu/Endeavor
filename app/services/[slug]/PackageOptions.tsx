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

export default function PackageOptions({ packages, bookingQuery, ctaLabel, noFeatured }: PackageOptionsProps) {
  const [openPackage, setOpenPackage] = useState<ServicePackage | null>(null);
  const selectLabel = ctaLabel ?? "Select This Option";

  return (
    <>
      <div className="package-option-grid">
        {packages.map((servicePackage, index) => {
          const isFeatured = !noFeatured && index === packages.length - 1;
          return (
            <article className={isFeatured ? "package-option package-option--featured" : "package-option"} key={servicePackage.name}>
              {servicePackage.image ? (
                <div className="package-option__image"><img src={servicePackage.image} alt="" /></div>
              ) : null}
              <span className="package-option__badge">{isFeatured ? "Best Value" : `Option ${index + 1}`}</span>
              <h3>{servicePackage.name}</h3>
              {servicePackage.price ? <strong className="package-option__price">{servicePackage.price}</strong> : null}
              <p className="package-option__note">{servicePackage.note}</p>
              <div className="package-option__actions">
                <Link className="package-option__select" href={{ pathname: "/book", query: { ...bookingQuery, package: servicePackage.name } }}>
                  {selectLabel}
                </Link>
                <button type="button" className="package-option__more" onClick={() => setOpenPackage(servicePackage)}>
                  View full details <span aria-hidden="true">→</span>
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
              {openPackage.price ? <strong className="package-panel__price">{openPackage.price}</strong> : null}
              <p>{openPackage.note}</p>
              <Link
                className="package-panel__cta"
                href={{ pathname: "/book", query: { ...bookingQuery, package: openPackage.name } }}
              >
                {selectLabel}
              </Link>
            </>
          ) : null}
        </aside>
      </div>
    </>
  );
}
