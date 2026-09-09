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
  price?: string;
  image?: string;
};

export type ComparisonRow = {
  label: string;
  values: string[];
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
  trustPoints?: string[];
  concerns: string[];
  limitations?: string;
  inclusions: string[];
  exclusions?: string[];
  steps: string[];
  preparation: string;
  duration: string;
  packages?: ServicePackage[];
  optionsNote?: string;
  optionsCtaLabel?: string;
  comparisonRows?: ComparisonRow[];
  seoTitle?: string;
  seoDescription?: string;
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
    summary: "Cleaner AC components can support better airflow, fresher indoor spaces and more efficient cooling. Choose the level of cleaning that matches your AC system’s condition and your property’s needs.",
    cardCopy: "Clear service levels for vents, filters and deeper internal AC care.",
    icon: "/assets/ac.webp",
    image: "/assets/service-ac-cleaning.jpg",
    priceNote: "Starting from AED 150 per AC unit",
    quoteOnly: false,
    trustPoints: [
      "Four options",
      "Clear per-unit pricing",
      "Professional equipment",
      "Residential and commercial properties",
      "Dubai-wide service",
    ],
    concerns: [
      "Dust around vents",
      "Dirty filters",
      "Musty odours",
      "Recurring dust",
      "Reduced or uneven airflow",
      "Visible coil buildup",
      "Long periods without cleaning",
      "Renovation dust",
    ],
    limitations: "Cleaning may remove buildup and support airflow through cleaned components. It does not repair refrigerant problems, damaged parts, leaks, electrical faults or other mechanical defects.",
    inclusions: [
      "A pre-service review of the selected AC unit",
      "Cleaning tasks listed in the confirmed option",
      "Protection of the immediate work area",
      "A clear handover when the selected work is complete",
    ],
    steps: [
      "Arrival and option confirmation",
      "Accessible-component inspection",
      "Protection of nearby property",
      "Cleaning of confirmed components",
      "Reinstallation and final check",
      "Handover with photographs where applicable",
    ],
    preparation: "Confirm the unit count and locations, provide access to grills and panels, move fragile items, disclose high ceilings or access restrictions and known faults, arrange building access and parking, and keep children and pets away during the visit.",
    duration: "Duration depends on the option, unit count, AC type, accessibility and buildup. Confirm duration during booking.",
    packages: [
      {
        name: "Pure Flow — Grill and Filter Cleaning",
        price: "AED 150 per unit",
        note: "Routine cleaning of accessible AC grills and washable filters. Recommended for light visible dust, regularly maintained systems and customers who do not require duct or coil cleaning.",
      },
      {
        name: "Fresh Air — AC Duct Cleaning",
        price: "AED 450 per unit",
        note: "Cleaning of grills, washable filters and accessible duct sections. Recommended when dust returns quickly, buildup is visible around vents or duct cleaning has not been completed recently. Duct disinfection is included only when confirmed under the approved method.",
      },
      {
        name: "Coil Care — AC Coil Cleaning",
        price: "AED 500 per unit",
        note: "A standalone service focused on safely cleaning an accessible AC coil. Recommended for visible coil buildup or when coil cleaning is required without duct cleaning.",
      },
      {
        name: "Full AC Cleaning With Coil",
        price: "AED 700 per unit",
        note: "Endeavor’s most comprehensive AC cleaning option, combining accessible duct cleaning, coil cleaning, grills, washable filters and other approved internal components.",
      },
    ],
    comparisonRows: [
      { label: "Price per unit", values: ["AED 150", "AED 450", "AED 500", "AED 700"] },
      { label: "Grills and washable filters", values: ["Included", "Included", "Not included", "Included"] },
      { label: "Accessible ducts", values: ["Not included", "Included", "Not included", "Included"] },
      { label: "Coil", values: ["Not included", "Not included", "Included", "Included"] },
      { label: "Photographs", values: ["Where applicable", "Where applicable", "Where applicable", "Where applicable"] },
    ],
    seoTitle: "AC Cleaning Services in Dubai | Options From AED 150 | Endeavor",
    seoDescription: "Choose from four professional AC cleaning options in Dubai, including grill and filter, duct, coil-only and full AC cleaning. View options and prices before booking.",
    faqs: [
      { question: "Which AC package should I choose?", answer: "Pure Flow suits light visible dust and regularly maintained systems. Fresh Air adds duct cleaning if dust keeps returning quickly. Coil Care targets visible coil buildup on its own. Full AC Cleaning With Coil combines ducts, coil, grills and filters for the most complete clean." },
      { question: "Is the price per property or per unit?", answer: "AC cleaning is priced per unit. The confirmed quote will state the option, quantity, VAT status and any access-related charge." },
      sharedFaq,
    ],
  },
  {
    slug: "water-tank-cleaning",
    name: "Water Tank Cleaning",
    shortName: "Water Tank",
    category: "Air & Water",
    summary: "Remove accumulated sediment, dirt and residue from your water-storage tank with professional cleaning and disinfection for residential and commercial properties.",
    cardCopy: "Tank care arranged around capacity, property type and access conditions.",
    icon: "/assets/water.webp",
    image: "/assets/service-water-tank.jpg",
    priceNote: "Starting from AED 450",
    quoteOnly: false,
    concerns: [
      "Visible sediment",
      "Cloudy or discoloured water",
      "Unusual taste or odour",
      "Residue around the opening",
      "Sludge or debris",
      "Insects",
      "A damaged cover",
      "An extended period without cleaning",
      "Recent plumbing work",
      "A change of occupancy",
    ],
    limitations: "The service improves storage-tank cleanliness and can remove accumulated debris. It does not certify drinking-water quality. Laboratory testing is required to confirm chemical or microbiological water quality.",
    inclusions: [
      "Capacity and access confirmation",
      "Initial inspection",
      "Isolation where possible",
      "Safe draining",
      "Sediment and sludge removal",
      "Manual scrubbing of accessible walls and floors",
      "Rinsing",
      "Application of an approved disinfectant",
      "Tank-cover cleaning",
      "Final inspection",
      "Photographs where practical",
      "Work-area cleaning",
      "Coordination for return to service",
    ],
    exclusions: [
      "Laboratory testing",
      "Plumbing, pump or float-valve repairs",
      "Tank replacement",
      "Crack sealing, waterproofing or coating",
      "Pipeline cleaning or disinfection",
      "Filter replacement",
      "Inaccessible contamination",
      "Specialist confined-space entry",
      "Scaffolding or cranes",
      "Unusual waste disposal",
      "Refill-water charges",
      "Additional unbooked tanks",
    ],
    steps: [
      "Confirmation and inspection",
      "Isolation and draining",
      "Sediment removal",
      "Internal scrubbing",
      "Rinsing and disinfection",
      "Final inspection and photographs",
      "Preparation for refilling and handover",
    ],
    preparation: "Confirm the tank count and capacity, provide label and access photographs, identify the tank location and drainage point, arrange building approval, parking and permits, inform occupants of the water interruption, stop automatic refill when instructed, disclose leaks or damage and keep people away from the work area. Customers must not enter the tank.",
    duration: "Duration depends on tank size, count, type, stored-water volume, condition, drainage and access.",
    packages: [
      {
        name: "Small",
        price: "AED 450",
        note: "Up to 500 USG — suited to apartments and small residential tanks. Removes accessible sediment, sludge, dirt and residue and disinfects accessible internal surfaces.",
      },
      {
        name: "Medium",
        price: "AED 750",
        note: "550–1,000 USG — suited to villas and medium residential tanks. Removes accessible sediment, sludge, dirt and residue and disinfects accessible internal surfaces.",
      },
      {
        name: "Large",
        price: "AED 1,100",
        note: "1,100–4,000 USG — suited to large villas and buildings. Removes accessible sediment, sludge, dirt and residue and disinfects accessible internal surfaces.",
      },
      {
        name: "Extra Large",
        price: "AED 1,300",
        note: "4,100–10,000 USG — suited to buildings, commercial sites and facilities. Removes accessible sediment, sludge, dirt and residue and disinfects accessible internal surfaces.",
      },
    ],
    optionsNote: "Final pricing can change for multiple tanks, restricted access, heavy contamination, unusual construction, specialist equipment or extra work.",
    optionsCtaLabel: "View Service Options",
    seoTitle: "Water Tank Cleaning Dubai | From AED 450 | Endeavor",
    seoDescription: "Professional water tank cleaning and disinfection in Dubai for tanks up to 10,000 USG. Prices start from AED 450. Request a booking today.",
    faqs: [
      { question: "Which tank-size option should I choose?", answer: "Choose the option that matches your tank's capacity in US gallons (USG): Small (up to 500), Medium (550–1,000), Large (1,100–4,000) or Extra Large (4,100–10,000). Share your tank label or capacity if you're unsure." },
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
    image: "/assets/service-window-facade.jpg",
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
    image: "/assets/service-sofa.jpg",
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
    image: "/assets/service-mattress.jpg",
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
    name: "Carpet Shampooing",
    shortName: "Carpet Shampooing",
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
    image: "/assets/service-marble.jpg",
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
    image: "/assets/service-post-construction.jpg",
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
    image: "/assets/service-kitchen-duct.jpg",
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
    image: "/assets/service-bathroom.jpg",
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
