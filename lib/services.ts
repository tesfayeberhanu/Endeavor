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
  heroHeading?: string;
  secondaryHeroCta?: { label: string; href: string };
  trustPoints?: string[];
  concerns: string[];
  limitations?: string;
  quotationFactors?: string[];
  inclusions: string[];
  exclusions?: string[];
  steps: string[];
  preparation: string;
  duration: string;
  packages?: ServicePackage[];
  optionsHeading?: string;
  optionsNote?: string;
  optionsCtaLabel?: string;
  packageCtaLabel?: string;
  noFeaturedOption?: boolean;
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
    heroHeading: "Professional AC Cleaning Services in Dubai",
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
    heroHeading: "Professional Water Tank Cleaning in Dubai",
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
    heroHeading: "Specialized Deep Cleaning Services in Dubai",
    summary: "Give your property a detailed clean that reaches the surfaces and areas routine cleaning often misses. Select the option that matches the property size, furnishing and condition.",
    cardCopy: "A room-by-room reset built around your property and priorities.",
    icon: "/assets/deep-clean.webp",
    image: "/assets/popular-deep-cleaning.jpg",
    priceNote: "Apartment prices from AED 700. Villas and non-standard conditions require assessment.",
    quoteOnly: false,
    secondaryHeroCta: { label: "Request a Villa Assessment", href: "/book?service=specialized-deep-cleaning&mode=quote" },
    concerns: [
      "Properties needing more than routine cleaning",
      "Occupied or vacant apartments",
      "Accumulated dust and grease",
      "Cleaning before guests or important events",
      "Periodic detailed cleaning",
      "Areas that have not been cleaned recently",
    ],
    limitations: "Inside appliances, inside cabinets, high-level areas, external windows, upholstery, mattresses and specialist stain treatment must be expressly selected or quoted.",
    inclusions: [
      "Dusting and wiping accessible surfaces",
      "Floors and skirting",
      "Doors, frames, switches and handles",
      "Accessible cupboards and wardrobes when empty",
      "Kitchen worktops, cabinet exteriors, sink and accessible appliance exteriors",
      "Bathroom fixtures, tiles and glass",
      "Accessible internal windows",
      "Balconies where confirmed",
      "Removal of ordinary loose dirt",
      "Final work-area check",
    ],
    exclusions: [
      "Post-construction residue",
      "Paint, cement, adhesive or silicone removal",
      "Pest treatment",
      "Hazardous or biological waste",
      "Mould remediation",
      "Repairs",
      "Moving heavy furniture",
      "Inaccessible exterior glass",
      "Façade access",
      "Permanent stain removal",
      "Restoration of damaged surfaces",
    ],
    steps: [
      "Scope confirmation",
      "Condition inspection and photographs",
      "Protection and work sequencing",
      "Room-by-room cleaning",
      "Supervisor check",
      "Customer handover",
    ],
    preparation: "Confirm the furnishing status and apartment size, identify priority areas, send photographs for heavy conditions, remove personal items and valuables, empty cabinets if interiors are included, provide water and electricity, arrange access, parking and permits, and secure pets.",
    duration: "Studio or 1-bedroom apartments normally take 4–5 hours with two technicians; 2–3 bedroom apartments normally take 6–8 hours with three technicians, subject to condition.",
    packages: [
      { name: "Studio — Unfurnished", price: "AED 700", note: "Standard deep-cleaning scope for a studio apartment in confirmed standard condition, unfurnished." },
      { name: "Studio — Furnished", price: "AED 900", note: "Standard deep-cleaning scope for a studio apartment in confirmed standard condition, furnished." },
      { name: "1 Bedroom — Unfurnished", price: "AED 900", note: "Standard deep-cleaning scope for a 1-bedroom apartment in confirmed standard condition, unfurnished." },
      { name: "1 Bedroom — Furnished", price: "AED 950", note: "Standard deep-cleaning scope for a 1-bedroom apartment in confirmed standard condition, furnished." },
      { name: "2 Bedroom — Unfurnished", price: "AED 1,600", note: "Standard deep-cleaning scope for a 2-bedroom apartment in confirmed standard condition, unfurnished." },
      { name: "2 Bedroom — Furnished", price: "AED 1,850", note: "Standard deep-cleaning scope for a 2-bedroom apartment in confirmed standard condition, furnished." },
      { name: "3 Bedroom — Unfurnished", price: "AED 2,100", note: "Standard deep-cleaning scope for a 3-bedroom apartment in confirmed standard condition, unfurnished." },
      { name: "3 Bedroom — Furnished", price: "AED 2,150", note: "Standard deep-cleaning scope for a 3-bedroom apartment in confirmed standard condition, furnished." },
    ],
    optionsNote: "Prices apply only to apartments in standard deep-cleaning condition and the confirmed standard scope. Villas, properties above three bedrooms, post-construction conditions, heavy grease, pest contamination and unusual residue require photographs, assessment and quotation.",
    optionsCtaLabel: "View Apartment Options",
    seoTitle: "Specialized Deep Cleaning Dubai | Apartment Prices | Endeavor",
    seoDescription: "Detailed furnished and unfurnished apartment deep cleaning in Dubai. View standard apartment prices or request a villa assessment.",
    faqs: [
      { question: "What if I have a villa or a property above three bedrooms?", answer: "Request a Villa Assessment. Villas, properties above three bedrooms and non-standard conditions are quoted after photographs and an assessment." },
      { question: "Are appliance and cabinet interiors included?", answer: "No. Inside appliances, inside cabinets, high-level areas, external windows, upholstery, mattresses and specialist stain treatment must be expressly selected or quoted." },
      sharedFaq,
    ],
  },
  {
    slug: "external-window-facade-cleaning",
    name: "External Window & Façade Cleaning",
    shortName: "Window & Façade",
    category: "Property Cleaning",
    heroHeading: "External Window & Façade Cleaning in Dubai",
    summary: "Improve the appearance of exterior glass and accessible building surfaces with a cleaning plan based on the property, height, access method and surface condition.",
    cardCopy: "Clearer exterior surfaces with access requirements reviewed first.",
    icon: "/assets/inspection.webp",
    image: "/assets/service-window-facade.jpg",
    priceNote: "Site assessment and quotation",
    quoteOnly: true,
    concerns: [
      "Villas and townhouses",
      "Low-rise buildings",
      "Shops and offices",
      "Managed properties",
      "Exterior glass with dust or water marks",
      "Façade surfaces requiring planned cleaning",
      "One-time or periodic projects",
    ],
    limitations: "No price is shown until the access method and scope are approved.",
    quotationFactors: [
      "Building type and height",
      "Glass or façade area",
      "Surface material",
      "Level of soil and staining",
      "Safe access from inside or outside",
      "Ladders, platforms, rope access, scaffolding or lifting equipment",
      "Water access",
      "Permits and building-management approval",
      "Operating hours",
      "Parking, traffic or pedestrian control",
    ],
    inclusions: [
      "Site and access review",
      "Confirmation of surfaces",
      "Protection of the immediate area",
      "Removal of loose dust",
      "Washing of accessible exterior glass or approved façade surfaces",
      "Cleaning of frames and sills when quoted",
      "Spot check",
      "Work-area cleanup",
      "Photographs where practical",
    ],
    exclusions: [
      "Rope access, scaffolding, cranes or lifting equipment unless quoted",
      "Sealant or façade repair",
      "Scratch removal",
      "Glass restoration",
      "Paint, cement or adhesive removal unless assessed",
      "Work near unsafe electrical or structural conditions",
      "Unrestricted access to neighbouring property",
      "Permanent mineral etching",
      "Interior window cleaning unless included",
    ],
    steps: [
      "Photo review",
      "Site assessment",
      "Access and safety plan",
      "Quotation approval",
      "Area protection",
      "Cleaning",
      "Quality check",
      "Handover",
    ],
    preparation: "Provide building and elevation photographs, the approximate height and number of windows, arrange authorised access and permits, identify water and power availability, disclose restricted areas, advise occupants and remove items from balconies and window areas.",
    duration: "Duration is project-specific and confirmed after the site assessment.",
    packages: [
      { name: "Accessible Exterior Windows", note: "Cleaning of exterior windows that can be safely reached from inside or with standard access, without specialist equipment." },
      { name: "Villa Windows and Glass", note: "Exterior window and glass cleaning planned around villa height, layout and accessible surfaces." },
      { name: "Low-Rise Façade Cleaning", note: "Façade cleaning for low-rise buildings, assessed for surface material, soil level and safe access." },
      { name: "Commercial or High-Access Façade Projects", note: "Larger or higher-access façade projects assessed for building height, access method, permits and safety requirements." },
    ],
    optionsHeading: "Choose the type of access your property needs",
    optionsNote: "Each option opens a side panel explaining access requirements. No price is shown until the access method and scope are approved.",
    optionsCtaLabel: "Request an Assessment",
    packageCtaLabel: "Request Assessment",
    noFeaturedOption: true,
    seoTitle: "External Window and Facade Cleaning Dubai | Endeavor",
    seoDescription: "Professional external window and facade cleaning in Dubai. Request a site assessment and quotation based on height, access and surface condition.",
    faqs: [
      { question: "Why isn't a fixed price shown?", answer: "Pricing depends on building height, access method, surface area and safety requirements. No price is shown until the access method and scope are approved after assessment." },
      { question: "What if my building needs rope access, scaffolding or a lift?", answer: "Specialist access equipment is only included when it has been assessed and quoted. Share your building height and access details so this can be reviewed." },
      sharedFaq,
    ],
  },
  {
    slug: "sofa-cleaning",
    name: "Sofa Cleaning",
    shortName: "Sofa Cleaning",
    category: "Furniture & Floors",
    heroHeading: "Professional Sofa Cleaning in Dubai",
    summary: "Refresh upholstered seating by removing accessible dust, everyday dirt and treatable marks using a method selected for the fabric and condition.",
    cardCopy: "Focused upholstery care for everyday marks and embedded buildup.",
    icon: "/assets/sofa.webp",
    image: "/assets/service-sofa.jpg",
    priceNote: "Prices from AED 100",
    quoteOnly: false,
    secondaryHeroCta: {
      label: "Send Photos on WhatsApp",
      href: "https://wa.me/971588754060?text=Hello%20Endeavor%2C%20I%20have%20photos%20of%20my%20sofa%20for%20a%20cleaning%20quote.",
    },
    concerns: [
      "Accumulated dust",
      "Everyday dirt",
      "Food or drink marks",
      "Pet hair",
      "Mild odours",
      "Periodic upholstery care",
      "Refreshing furniture before guests or after moving",
    ],
    limitations: "Results depend on the material, age, previous treatment and stain type.",
    inclusions: [
      "Photo and fabric review",
      "Inspection and colourfastness check where appropriate",
      "Dry removal of loose dust and debris",
      "Treatment using the confirmed upholstery method",
      "Attention to accessible seating, back and arms",
      "Cleaning of removable cushions when included",
      "Extraction or controlled drying where appropriate",
      "Final inspection",
    ],
    exclusions: [
      "Fabric repair",
      "Reupholstery",
      "Structural repair",
      "Removal of permanent stains, dye transfer, fading, burns or damage",
      "Guaranteed odour removal",
      "Specialist leather restoration",
      "Pest treatment",
      "Biological or hazardous contamination unless separately assessed",
    ],
    steps: [
      "Confirmation",
      "Inspection",
      "Testing",
      "Property protection",
      "Cleaning",
      "Extraction or rinsing as appropriate",
      "Final check",
      "Drying guidance",
    ],
    preparation: "Send full-sofa and close-up photographs, confirm the number of seats or pieces and material, remove personal items, provide access and ventilation, disclose previous treatments or delicate fabric, and keep children and pets away until advised.",
    duration: "Duration and drying time depend on sofa size, fabric, method, ventilation and condition.",
    packages: [
      { name: "1 Seat", price: "AED 100", note: "Standard cleaning for a single-seat sofa or armchair in typical condition." },
      { name: "2 Seats", price: "AED 200", note: "Standard cleaning for a 2-seat sofa in typical condition." },
      { name: "3 Seats", price: "AED 300", note: "Standard cleaning for a 3-seat sofa in typical condition." },
    ],
    optionsNote: "L-shaped sofas, recliners, sofa beds, loose cushions, unusual materials and more than three seats require photographs and confirmation. Prices are conditional on fabric, pieces, condition and forecast service time.",
    optionsCtaLabel: "View Sofa Options",
    seoTitle: "Sofa Cleaning Dubai | Prices From AED 100 | Endeavor",
    seoDescription: "Professional sofa cleaning in Dubai for upholstered seating. View per-seat prices and send photographs for service confirmation.",
    faqs: [
      { question: "What if I have an L-shaped sofa, recliner or sofa bed?", answer: "Send photographs so the team can confirm the price. L-shaped sofas, recliners, sofa beds, loose cushions, unusual materials and sofas with more than three seats require confirmation before booking." },
      { question: "Can you remove all stains and odours?", answer: "Results depend on the material, age, previous treatment and stain type. Guaranteed removal of permanent stains, dye transfer, fading, burns or odours cannot be promised." },
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
