"use client";

import { useMemo, useState, type FormEvent } from "react";

import { getService, services } from "@/lib/services";
import type { BookingField } from "@/lib/services";

type BookingFormProps = {
  initialService: string;
  initialPackage: string;
  initialMode: "booking" | "quote";
};

function packageKey(option: { id?: string; name: string }) {
  return option.id ?? option.name;
}

export default function BookingForm({ initialService, initialPackage, initialMode }: BookingFormProps) {
  const [serviceSlug, setServiceSlug] = useState(initialService);
  const [packageKeyValue, setPackageKeyValue] = useState(initialPackage);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  const selectedService = useMemo(() => getService(serviceSlug), [serviceSlug]);
  const isQuote = initialMode === "quote" || selectedService?.quoteOnly;
  const activeFields: BookingField[] =
    (selectedService?.villaBookingFields && isQuote ? selectedService.villaBookingFields : selectedService?.bookingFields) ?? [];
  const selectedPackage = selectedService?.packages?.find((option) => packageKey(option) === packageKeyValue);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedName = selectedService?.name ?? String(formData.get("service") ?? "General enquiry");
    const packageLabel = selectedPackage ? `${selectedPackage.name}${selectedPackage.subtitle ? ` — ${selectedPackage.subtitle}` : ""}` : "Please advise";
    const lines = [
      "Hello Endeavor Cleaning,",
      "",
      `Request type: ${isQuote ? "Exact quote" : "Booking request"}`,
      `Service: ${selectedName}`,
      `Package: ${packageLabel}`,
      `Quantity / units: ${String(formData.get("quantity") || "Not specified")}`,
      ...activeFields.map((field) => `${field.label}: ${String(formData.get(field.name) || "Not specified")}`),
      `Name: ${String(formData.get("name") || "")}`,
      `Mobile: ${String(formData.get("mobile") || "")}`,
      `Email: ${String(formData.get("email") || "Not provided")}`,
      `Dubai area: ${String(formData.get("location") || "")}`,
      `Property type: ${String(formData.get("propertyType") || "")}`,
      `Preferred date: ${String(formData.get("date") || "")}`,
      `Preferred time: ${String(formData.get("time") || "")}`,
      `Notes: ${String(formData.get("notes") || "None")}`,
      "",
      "I understand this request is provisional until price, availability and access are confirmed.",
    ];
    const nextUrl = `https://wa.me/971588754060?text=${encodeURIComponent(lines.join("\n"))}`;
    setWhatsAppUrl(nextUrl);
    window.open(nextUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__heading">
        <div><span>Request details</span><h2>{isQuote ? "Request an exact quote" : "Book a service"}</h2></div>
        <small>Fields marked * are required</small>
      </div>

      <div className="booking-form-grid">
        <label>
          Service *
          <select
            name="service"
            value={serviceSlug}
            required
            onChange={(event) => {
              setServiceSlug(event.target.value);
              setPackageKeyValue("");
              setWhatsAppUrl("");
            }}
          >
            <option value="" disabled>Select a service</option>
            {services.map((service) => <option value={service.slug} key={service.slug}>{service.name}</option>)}
          </select>
        </label>

        <label>
          Service option
          <select name="package" value={packageKeyValue} onChange={(event) => setPackageKeyValue(event.target.value)}>
            <option value="">Please advise me</option>
            {selectedService?.packages?.map((servicePackage) => (
              <option value={packageKey(servicePackage)} key={packageKey(servicePackage)}>
                {servicePackage.name}{servicePackage.subtitle ? ` — ${servicePackage.subtitle}` : ""}
              </option>
            ))}
          </select>
        </label>

        <label>Quantity / number of units<input name="quantity" type="number" min="1" placeholder="e.g. 2" /></label>
        <label>
          Property type *
          <select name="propertyType" defaultValue="" required>
            <option value="" disabled>Select property type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Office</option>
            <option>Retail / commercial</option>
            <option>Other</option>
          </select>
        </label>

        {activeFields.map((field) => (
          <label key={`${serviceSlug}-${isQuote ? "quote" : "book"}-${field.name}`}>
            {field.label}{field.required ? " *" : ""}
            {field.type === "select" ? (
              <select name={field.name} defaultValue="" required={field.required}>
                <option value="" disabled>Select an option</option>
                {field.options?.map((option) => <option key={option}>{option}</option>)}
              </select>
            ) : (
              <input name={field.name} type={field.type === "number" ? "number" : "text"} min={field.type === "number" ? 0 : undefined} required={field.required} />
            )}
          </label>
        ))}

        <label>Customer name *<input name="name" type="text" autoComplete="name" required placeholder="Full name" /></label>
        <label>Mobile number *<input name="mobile" type="tel" autoComplete="tel" required placeholder="+971" /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" placeholder="name@example.com" /></label>
        <label>Dubai location / community *<input name="location" type="text" autoComplete="address-level2" required placeholder="Community or building" /></label>
        <label>Preferred date *<input name="date" type="date" required /></label>
        <label>
          Preferred time *
          <select name="time" defaultValue="" required>
            <option value="" disabled>Select a time window</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </label>
      </div>

      <label className="booking-form__full">Additional notes<textarea name="notes" rows={5} placeholder="Tell us about size, condition, access or any area that needs special attention." /></label>
      <p className="booking-photo-note">Have useful photos? Continue on WhatsApp and attach them to the prepared request.</p>
      <label className="booking-terms"><input type="checkbox" required /><span>I agree to send these details to Endeavor and understand that price, availability and access must be confirmed before the service is final.</span></label>
      <button className="booking-submit" type="submit">{isQuote ? "Continue to Exact Quote" : "Continue to Booking"}<span aria-hidden="true">→</span></button>

      <div className="booking-form__status" aria-live="polite">
        {whatsAppUrl ? <p>Your request is ready. If WhatsApp did not open, <a href={whatsAppUrl}>continue here</a>.</p> : <p>Submitting prepares a structured WhatsApp message. You review it before sending.</p>}
      </div>
    </form>
  );
}
