import type { Metadata } from "next";

import { getService } from "@/lib/services";
import SiteFrame from "../_components/SiteFrame";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Book a Cleaning Service | Endeavor Cleaning",
  description: "Start an Endeavor cleaning service booking or request an exact quote for your Dubai property.",
};

type BookingPageProps = {
  searchParams: Promise<{ service?: string | string[]; package?: string | string[]; mode?: string | string[] }>;
};

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const query = await searchParams;
  const requestedService = firstValue(query.service);
  const selectedService = getService(requestedService);
  const initialService = selectedService?.slug ?? "";
  const requestedPackage = firstValue(query.package);
  const initialPackage = selectedService?.packages?.some((option) => option.name === requestedPackage) ? requestedPackage : "";
  const initialMode = firstValue(query.mode) === "quote" ? "quote" : "booking";

  return (
    <SiteFrame>
      <main className="inner-page booking-page">
        <section className="inner-shell booking-layout">
          <aside className="booking-intro">
            <span className="page-eyebrow">Book with Endeavor</span>
            <h1>Share the details once, then confirm directly with our team</h1>
            <p>Select a service, property and preferred time. We prepare a structured WhatsApp request so the Endeavor team receives the information needed to respond.</p>
            <ol>
              <li><span>1</span><div><strong>Choose the service</strong><p>Your selection is carried in from the service page.</p></div></li>
              <li><span>2</span><div><strong>Add property details</strong><p>Include size, quantity, location and access notes.</p></div></li>
              <li><span>3</span><div><strong>Review and send</strong><p>WhatsApp opens with your request ready for approval.</p></div></li>
            </ol>
            <div className="booking-help">
              <strong>Prefer to speak now?</strong>
              <a href="tel:+971529597778">Call +971 52 959 7778</a>
              <a href="https://wa.me/971588754060">WhatsApp +971 58 875 4060</a>
            </div>
          </aside>

          <BookingForm initialService={initialService} initialPackage={initialPackage} initialMode={initialMode} />
        </section>
      </main>
    </SiteFrame>
  );
}
