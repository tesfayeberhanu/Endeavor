export const serviceCategories = [
  "All Services",
  "Air & Water",
  "Furniture & Floors",
  "Property Cleaning",
] as const;

export type ServiceCategory = Exclude<(typeof serviceCategories)[number], "All Services">;

const categorySlugs: Record<ServiceCategory, string> = {
  "Air & Water": "air-water",
  "Furniture & Floors": "furniture-floors",
  "Property Cleaning": "property-cleaning",
};

export function categoryFromSlug(slug: string | undefined): ServiceCategory | undefined {
  return (Object.keys(categorySlugs) as ServiceCategory[]).find((category) => categorySlugs[category] === slug);
}


export type ServicePackage = {
  name: string;
  note: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  category: ServiceCategory;
  summary: string;
  cardCopy: string;
  icon: string;
  image: string;
  priceNote: string;
  quoteOnly: boolean;
  concerns: string[];
  inclusions: string[];
  steps: string[];
  preparation: string;
  duration: string;
  packages?: ServicePackage[];
  faqs: Array<{ question: string; answer: string }>;
};

const sharedFaq = {
  question: "When is my appointment confirmed?",
  answer:
    "Your request is provisional until Endeavor confirms the price, team availability, property access and the requested time.",
};

export const services: Service[] = [
  {
    slug: "ac-cleaning",
    name: "AC Cleaning",
    shortName: "AC Cleaning",
    category: "Air & Water",
    summary: "Choose an AC cleaning level that matches the condition of your unit and the components you want covered.",
    cardCopy: "Clear service levels for vents, filters and deeper internal AC care.",
    icon: "/assets/ac.webp",
    image: "/assets/popular-office-cleaning.jpg",
    priceNote: "Priced per AC unit from the approved Price Book",
    quoteOnly: false,
    concerns: ["Visible dust around vents", "Stale airflow", "Routine unit care", "A deeper system clean"],
    inclusions: [
      "A pre-service review of the selected AC unit",
      "Cleaning tasks listed in the confirmed package",
      "Protection of the immediate work area",
      "A clear handover when the selected work is complete",
    ],
    steps: ["Confirm the unit and access", "Protect the nearby area", "Complete the selected cleaning scope", "Review the result with the customer"],
    preparation: "Provide clear access to each indoor AC unit and tell the team about any known leaks, faults or access restrictions.",
    duration: "Duration depends on package, unit type, quantity and access.",
    packages: [
      { name: "Pure Flow", note: "Approved inclusions and price will be shown before confirmation." },
      { name: "Fresh Air", note: "Approved inclusions and price will be shown before confirmation." },
      { name: "Full-system option", note: "Final package name, inclusions and price are pending approval." },
    ],
    faqs: [
      { question: "Which AC package should I choose?", answer: "Tell us the unit type, quantity and the issue you are noticing. Endeavor will confirm the most suitable approved package before the visit." },
      { question: "Is the price per property or per unit?", answer: "AC cleaning is structured per unit. The confirmed quote will state the package, quantity, VAT status and any access-related charge." },
      sharedFaq,
    ],
  },
  {
    slug: "water-tank-cleaning",
    name: "Water Tank Cleaning",
    shortName: "Water Tank",
    category: "Air & Water",
    summary: "A structured tank-cleaning service planned around tank size, type, location and safe access.",
    cardCopy: "Tank care arranged around capacity, property type and access conditions.",
    icon: "/assets/water.webp",
    image: "/assets/inspection.webp",
    priceNote: "Price confirmed by tank size, type and access",
    quoteOnly: false,
    concerns: ["Scheduled tank maintenance", "Sediment or visible buildup", "A recently occupied property", "Unclear tank condition"],
    inclusions: ["Tank and access review", "Confirmed cleaning scope", "Professional equipment for the agreed tank type", "Completion update after the service"],
    steps: ["Collect tank details", "Confirm access and service scope", "Complete the approved cleaning process", "Share the service outcome"],
    preparation: "Share the tank capacity, tank type, location, access route and recent photographs if available.",
    duration: "Duration is confirmed after tank and access details are reviewed.",
    faqs: [
      { question: "What details are needed for pricing?", answer: "Please provide tank capacity, material or type, property type, location and access conditions." },
      { question: "Can I send tank photographs?", answer: "Yes. Start the request and continue on WhatsApp to attach photographs that help the team confirm access and scope." },
      sharedFaq,
    ],
  },
  {
    slug: "specialized-deep-cleaning",
    name: "Specialized Deep Cleaning",
    shortName: "Deep Cleaning",
    category: "Property Cleaning",
    summary: "A detailed property clean shaped around room count, furnishing, condition and the areas that need extra attention.",
    cardCopy: "A room-by-room reset built around your property and priorities.",
    icon: "/assets/deep-clean.webp",
    image: "/assets/popular-deep-cleaning.jpg",
    priceNote: "Request an exact quote for your property",
    quoteOnly: true,
    concerns: ["Buildup beyond routine cleaning", "Kitchens and bathrooms needing detail", "A property reset", "Hard-to-reach areas"],
    inclusions: ["Property details review", "A confirmed room-by-room scope", "Professional tools and materials for the agreed tasks", "Final walkthrough of completed areas"],
    steps: ["Share property details and photos", "Receive the confirmed scope", "The team completes the agreed checklist", "Review the property at handover"],
    preparation: "Share property type, bedrooms, approximate square footage, furnishing status, location and current photographs.",
    duration: "Duration depends on size, furnishing, condition and confirmed scope.",
    faqs: [
      { question: "Why is an exact quote required?", answer: "The team size, time and equipment depend on the property size, furnishing and current condition." },
      { question: "Can I choose priority rooms?", answer: "Yes. List the rooms and concerns in your request so they can be reflected in the confirmed scope." },
      sharedFaq,
    ],
  },
  {
    slug: "external-window-facade-cleaning",
    name: "External Window & Façade Cleaning",
    shortName: "Window & Façade",
    category: "Property Cleaning",
    summary: "External glass and façade cleaning planned around building height, surface area, access and site conditions.",
    cardCopy: "Clearer exterior surfaces with access requirements reviewed first.",
    icon: "/assets/inspection.webp",
    image: "/assets/hero.webp",
    priceNote: "Site details are required for an exact quote",
    quoteOnly: true,
    concerns: ["Dusty exterior glass", "Weather-marked façades", "High or restricted access", "Handover presentation"],
    inclusions: ["Access and surface review", "A clearly defined external cleaning scope", "Equipment matched to the approved access method", "Site handover after completion"],
    steps: ["Share building and access details", "Complete an inspection if needed", "Approve the final quotation", "Schedule and complete the service"],
    preparation: "Provide façade photographs, approximate height or floor count, access information and any building-management restrictions.",
    duration: "Duration is confirmed after surface area and access are assessed.",
    faqs: [
      { question: "Is an inspection required?", answer: "An inspection may be required when height, access method or site restrictions cannot be confirmed from the information provided." },
      { question: "Can the work be scheduled around business hours?", answer: "Share your preferred working window and any site rules. Availability is confirmed with the quotation." },
      sharedFaq,
    ],
  },
  {
    slug: "sofa-cleaning",
    name: "Sofa Cleaning",
    shortName: "Sofa Cleaning",
    category: "Furniture & Floors",
    summary: "Fabric-aware sofa cleaning arranged around upholstery type, seating capacity, condition and the selected treatment.",
    cardCopy: "Focused upholstery care for everyday marks and embedded buildup.",
    icon: "/assets/sofa.webp",
    image: "/assets/popular-carpet-upholstery.jpg",
    priceNote: "Price confirmed by seating and fabric details",
    quoteOnly: false,
    concerns: ["Everyday fabric buildup", "Visible marks", "A recently moved sofa", "Planned upholstery care"],
    inclusions: ["Fabric and condition review", "Confirmed sofa cleaning method", "Care around adjacent flooring and furniture", "Drying guidance after service"],
    steps: ["Share sofa size and photos", "Confirm the suitable method", "Complete the agreed treatment", "Receive aftercare guidance"],
    preparation: "Remove loose items and share clear photographs of the full sofa, fabric label and any areas of concern.",
    duration: "Duration and drying guidance depend on sofa size, fabric and selected method.",
    faqs: [
      { question: "What photos should I send?", answer: "Send one full-sofa photograph, the fabric-care label if available and close-ups of any marks." },
      { question: "When can the sofa be used again?", answer: "The team will provide drying guidance based on the confirmed method, fabric and ventilation." },
      sharedFaq,
    ],
  },
  {
    slug: "mattress-cleaning",
    name: "Mattress Cleaning",
    shortName: "Mattress Cleaning",
    category: "Furniture & Floors",
    summary: "A mattress-care service matched to mattress size, material, condition and the treatment requested.",
    cardCopy: "Detailed mattress care with the method confirmed before work begins.",
    icon: "/assets/mattress.webp",
    image: "/assets/popular-routine-cleaning.jpg",
    priceNote: "Price confirmed by mattress size and method",
    quoteOnly: false,
    concerns: ["Routine mattress care", "Surface buildup", "A recently moved mattress", "Specific visible areas"],
    inclusions: ["Mattress condition review", "Confirmed treatment for the selected size", "Care for the immediate work area", "Drying or use guidance after service"],
    steps: ["Choose mattress size", "Share condition details", "Confirm the treatment", "Complete and review the service"],
    preparation: "Remove bedding and protect personal items near the mattress before the team arrives.",
    duration: "Service and drying time depend on mattress size, material and treatment.",
    faqs: [
      { question: "Should bedding be removed first?", answer: "Yes. Please remove sheets, covers and personal items so the mattress is fully accessible." },
      { question: "Are all mattress materials treated the same way?", answer: "No. The team reviews the material and condition before confirming the appropriate method." },
      sharedFaq,
    ],
  },
  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    shortName: "Carpet Cleaning",
    category: "Furniture & Floors",
    summary: "Carpet cleaning planned around material, measured area, installation type and the condition of the fibres.",
    cardCopy: "A suitable cleaning method for loose rugs and fitted carpet areas.",
    icon: "/assets/deep-clean.webp",
    image: "/assets/popular-carpet-upholstery.jpg",
    priceNote: "Price confirmed by carpet type and area",
    quoteOnly: false,
    concerns: ["Tracked-in dust", "Visible high-use areas", "A property handover", "Routine carpet care"],
    inclusions: ["Material and area review", "Confirmed cleaning method", "Treatment of the agreed carpet area", "Drying and access guidance"],
    steps: ["Share measurements and photos", "Confirm the cleaning method", "Prepare and clean the area", "Review and follow drying guidance"],
    preparation: "Remove small items from the carpet and identify delicate material, loose edges or pre-existing damage.",
    duration: "Duration and drying time depend on area, material, condition and ventilation.",
    faqs: [
      { question: "Do you need carpet measurements?", answer: "Approximate dimensions and photographs help Endeavor confirm the scope and price before the visit." },
      { question: "Can furniture stay in the room?", answer: "Tell us what furniture is present. The confirmed scope will explain what should be moved before arrival." },
      sharedFaq,
    ],
  },
  {
    slug: "marble-polishing",
    name: "Marble Polishing",
    shortName: "Marble Polishing",
    category: "Furniture & Floors",
    summary: "A floor-finishing service assessed by marble type, current condition, measured area and the finish required.",
    cardCopy: "Condition-led polishing for marble floors and selected surfaces.",
    icon: "/assets/more.webp",
    image: "/assets/popular-office-cleaning.jpg",
    priceNote: "An exact quote follows the surface review",
    quoteOnly: true,
    concerns: ["Dull marble surfaces", "Uneven-looking high-use areas", "Property presentation", "A finish that needs assessment"],
    inclusions: ["Surface and condition assessment", "A confirmed polishing scope", "Professional equipment for the agreed finish", "Final surface review"],
    steps: ["Share area and surface photos", "Arrange an inspection if required", "Approve the method and quotation", "Complete the agreed polishing work"],
    preparation: "Provide approximate measurements, clear photographs and details of any cracks, repairs or coatings already present.",
    duration: "Duration depends on area, condition, access and approved finish.",
    faqs: [
      { question: "Why are photographs important?", answer: "They help identify the surface condition and whether an in-person inspection is needed before quoting." },
      { question: "Are repairs included?", answer: "Repair work is not assumed. Any repair or separately charged preparation must be listed in the confirmed quotation." },
      sharedFaq,
    ],
  },
  {
    slug: "post-construction-cleaning",
    name: "Post-Construction Cleaning",
    shortName: "Post-Construction",
    category: "Property Cleaning",
    summary: "Detailed cleaning for completed renovation or construction spaces, quoted from size, condition and handover requirements.",
    cardCopy: "Prepare a newly completed space for inspection, furnishing or handover.",
    icon: "/assets/contract.webp",
    image: "/assets/popular-move-in-out.jpg",
    priceNote: "Request an exact quote from site details",
    quoteOnly: true,
    concerns: ["Fine construction dust", "Residue on finished surfaces", "Pre-handover preparation", "Rooms awaiting furnishing"],
    inclusions: ["Site information review", "A confirmed post-work checklist", "Cleaning of the agreed completed areas", "Final walkthrough against the scope"],
    steps: ["Share drawings, area and photos", "Confirm completion and access", "Approve the quotation and checklist", "Complete the clean and handover"],
    preparation: "Confirm that major works are complete, remove contractor tools and share property size, access and current photographs.",
    duration: "Duration depends on floor area, remaining dust, furnishing and handover deadline.",
    faqs: [
      { question: "Does construction need to be finished first?", answer: "The quotation and schedule assume the areas being cleaned are released from active construction unless agreed otherwise." },
      { question: "Can you work to a handover date?", answer: "Share the deadline when requesting a quote. Endeavor will confirm whether the required team and time are available." },
      sharedFaq,
    ],
  },
  {
    slug: "move-in-move-out-cleaning",
    name: "Move-In / Move-Out Cleaning",
    shortName: "Move-In / Move-Out",
    category: "Property Cleaning",
    summary: "A property reset arranged around move timing, size, furnishing and the rooms included in the handover.",
    cardCopy: "Prepare a home before arrival or leave it ready for handover.",
    icon: "/assets/more.webp",
    image: "/assets/popular-move-in-out.jpg",
    priceNote: "Request an exact quote for the property",
    quoteOnly: true,
    concerns: ["An upcoming move", "Vacant-property buildup", "Landlord or tenant handover", "Cleaning before furniture arrives"],
    inclusions: ["Property and furnishing review", "A confirmed move-clean checklist", "Cleaning of agreed rooms and surfaces", "Completion walkthrough"],
    steps: ["Share property and move details", "Confirm the exact scope", "Schedule around access and keys", "Complete the clean before handover"],
    preparation: "Share bedroom count, square footage, furnishing status, access timing and photographs of the current condition.",
    duration: "Duration depends on property size, furnishing and current condition.",
    faqs: [
      { question: "Is the service for furnished properties?", answer: "It can be scoped for furnished or unfurnished properties. State the furnishing status in your request." },
      { question: "Can the service happen before key handover?", answer: "Yes, subject to confirmed access, availability and enough time for the approved scope." },
      sharedFaq,
    ],
  },
  {
    slug: "kitchen-duct-cleaning",
    name: "Kitchen Duct Cleaning",
    shortName: "Kitchen Duct",
    category: "Air & Water",
    summary: "Specialist kitchen-extraction cleaning planned from system type, access, usage and the components included.",
    cardCopy: "A defined cleaning scope for kitchen extraction components and access points.",
    icon: "/assets/pest.webp",
    image: "/assets/popular-deep-cleaning.jpg",
    priceNote: "Inspection or system details required for a quote",
    quoteOnly: true,
    concerns: ["Visible grease buildup", "Planned extraction maintenance", "Commercial kitchen scheduling", "Restricted duct access"],
    inclusions: ["System and access review", "A component-specific cleaning scope", "Work scheduled around approved site access", "Completion handover"],
    steps: ["Share system and site details", "Arrange an inspection if needed", "Approve scope and timing", "Complete and document the agreed work"],
    preparation: "Provide extraction-system photographs, kitchen type, operating hours, access points and any site permit requirements.",
    duration: "Duration is confirmed after system size, access and operating constraints are reviewed.",
    faqs: [
      { question: "Can this be scheduled outside operating hours?", answer: "Share the permitted working window. The confirmed quotation will include the agreed schedule." },
      { question: "What components are included?", answer: "Only components listed in the confirmed scope are included. Access work and additional components are stated separately." },
      sharedFaq,
    ],
  },
  {
    slug: "bathroom-deep-cleaning",
    name: "Bathroom Deep Cleaning",
    shortName: "Bathroom Cleaning",
    category: "Property Cleaning",
    summary: "Focused bathroom cleaning for agreed fixtures, surfaces and detailed areas beyond a routine visit.",
    cardCopy: "Detailed attention for the bathroom surfaces and fixtures you identify.",
    icon: "/assets/deep-clean.webp",
    image: "/assets/popular-deep-cleaning.jpg",
    priceNote: "Price confirmed by bathroom count and condition",
    quoteOnly: false,
    concerns: ["Detailed fixture cleaning", "Buildup in high-use areas", "A bathroom handover", "Cleaning beyond a routine visit"],
    inclusions: ["Bathroom condition review", "A confirmed fixture and surface checklist", "Detailed cleaning of agreed areas", "Completion walkthrough"],
    steps: ["Share bathroom count and photos", "Confirm the detailed checklist", "Complete the agreed cleaning", "Review the finished areas"],
    preparation: "Remove personal items from counters, showers and tubs, and point out delicate materials or damaged seals.",
    duration: "Duration depends on bathroom count, size and current condition.",
    faqs: [
      { question: "Can I book one bathroom?", answer: "Share the bathroom count and photographs. Endeavor will confirm the available option and price." },
      { question: "Are repair or re-sealing tasks included?", answer: "No repair is assumed. Any separate work must be confirmed before the visit." },
      sharedFaq,
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const featuredServices = [
  services[0],
  services[1],
  services[2],
  services[8],
  services[6],
];
