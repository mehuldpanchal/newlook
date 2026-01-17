import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageContent from "@/components/ServicePageContent";
import { placeholders } from "@/lib/placeholders";

// Service data
const services = {
  driveways: {
    title: "Driveway Installation & Repair",
    description:
      "Transform your home's curb appeal with a professionally installed driveway. We offer asphalt, concrete, and paver options.",
    heroImage: placeholders.services.driveways,
    features: [
      "Custom design consultation",
      "Premium material options",
      "Expert installation",
      "Long-lasting results",
      "Drainage integration",
      "Warranty included",
    ],
    benefits: [
      {
        title: "Increased Property Value",
        description:
          "A new driveway can increase your home's value by up to 10%.",
      },
      {
        title: "Enhanced Curb Appeal",
        description:
          "Make a great first impression with a beautiful, well-maintained driveway.",
      },
      {
        title: "Improved Safety",
        description:
          "Eliminate cracks, potholes, and uneven surfaces that can cause trips and falls.",
      },
      {
        title: "Low Maintenance",
        description:
          "Our quality materials and installation mean less maintenance for years to come.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Free Consultation",
        description:
          "We visit your property, assess your needs, and provide a detailed estimate.",
      },
      {
        step: 2,
        title: "Design & Planning",
        description:
          "Our team creates a custom design that fits your style and budget.",
      },
      {
        step: 3,
        title: "Preparation",
        description:
          "We prepare the site, ensuring proper grading and drainage.",
      },
      {
        step: 4,
        title: "Installation",
        description:
          "Expert installation using premium materials and techniques.",
      },
      {
        step: 5,
        title: "Final Inspection",
        description:
          "We walk through the project with you to ensure complete satisfaction.",
      },
    ],
    faqs: [
      {
        question: "How long does a driveway installation take?",
        answer:
          "Most residential driveway installations take 2-5 days, depending on the size and complexity of the project.",
      },
      {
        question: "What type of driveway is best for my home?",
        answer:
          "The best choice depends on your budget, aesthetic preferences, and local climate. We offer asphalt, concrete, and paver options.",
      },
      {
        question: "How long will my new driveway last?",
        answer:
          "With proper maintenance, asphalt driveways last 15-20 years, concrete 25-30 years, and pavers 25-50 years.",
      },
      {
        question: "Do you offer warranties?",
        answer:
          "Yes, we offer comprehensive warranties on all our driveway installations. Ask about specific coverage during your consultation.",
      },
    ],
    relatedServices: ["patios", "retaining-walls", "drainage"],
    category: "paving",
  },
  patios: {
    title: "Patios & Walkways",
    description:
      "Create the perfect outdoor living space with custom patios and walkways designed for beauty and durability.",
    heroImage: placeholders.services.patios,
    features: [
      "Custom design options",
      "Stone, brick & paver materials",
      "Outdoor kitchen integration",
      "Fire pit installations",
      "Built-in seating",
      "Lighting options",
    ],
    benefits: [
      {
        title: "Extended Living Space",
        description:
          "Add functional outdoor space for entertaining and relaxation.",
      },
      {
        title: "Increased Home Value",
        description:
          "Quality patios provide excellent ROI and buyer appeal.",
      },
      {
        title: "Low Maintenance",
        description:
          "Durable materials require minimal upkeep for years of enjoyment.",
      },
      {
        title: "Customized Design",
        description:
          "Tailored to your lifestyle, preferences, and property layout.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Design Consultation",
        description:
          "We discuss your vision and assess your outdoor space.",
      },
      {
        step: 2,
        title: "Material Selection",
        description:
          "Choose from a wide range of premium stones, pavers, and finishes.",
      },
      {
        step: 3,
        title: "Site Preparation",
        description:
          "Proper excavation and base preparation for lasting results.",
      },
      {
        step: 4,
        title: "Installation",
        description:
          "Expert craftsmanship brings your patio design to life.",
      },
      {
        step: 5,
        title: "Finishing Touches",
        description:
          "Final details and walkthrough to ensure your satisfaction.",
      },
    ],
    faqs: [
      {
        question: "What materials are best for patios?",
        answer:
          "Popular options include natural stone, concrete pavers, and brick. The best choice depends on your style, budget, and maintenance preferences.",
      },
      {
        question: "Can you add features like fire pits or outdoor kitchens?",
        answer:
          "Absolutely! We specialize in complete outdoor living spaces including fire pits, outdoor kitchens, seating walls, and more.",
      },
      {
        question: "How do you handle drainage?",
        answer:
          "Proper drainage is essential. We design patios with appropriate slope and integrate drainage systems as needed.",
      },
      {
        question: "What is the timeline for a patio project?",
        answer:
          "Most patio projects take 1-3 weeks depending on size and complexity.",
      },
    ],
    relatedServices: ["driveways", "retaining-walls", "hardscaping"],
    category: "paving",
  },
  "retaining-walls": {
    title: "Retaining Walls",
    description:
      "Functional and beautiful retaining walls that solve drainage issues and add stunning visual appeal to your landscape.",
    heroImage: placeholders.services.retainingWalls,
    features: [
      "Erosion prevention",
      "Decorative options",
      "Multiple materials",
      "Tiered designs",
      "Drainage integration",
      "Structural engineering",
    ],
    benefits: [
      {
        title: "Erosion Control",
        description:
          "Prevent soil erosion and protect your property from water damage.",
      },
      {
        title: "Usable Space",
        description:
          "Create level areas on sloped properties for gardens, patios, or lawns.",
      },
      {
        title: "Visual Appeal",
        description:
          "Add architectural interest and define outdoor spaces beautifully.",
      },
      {
        title: "Property Protection",
        description:
          "Protect foundations and structures from soil movement.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Assessment",
        description:
          "Evaluate slope, soil conditions, and drainage requirements.",
      },
      {
        step: 2,
        title: "Engineering Design",
        description:
          "Create a structurally sound design that meets your needs.",
      },
      {
        step: 3,
        title: "Excavation",
        description:
          "Prepare the site with proper excavation and base materials.",
      },
      {
        step: 4,
        title: "Construction",
        description:
          "Build the wall with quality materials and drainage systems.",
      },
      {
        step: 5,
        title: "Finishing & Landscaping",
        description:
          "Complete the project with backfill, caps, and landscaping.",
      },
    ],
    faqs: [
      {
        question: "Do I need a permit for a retaining wall?",
        answer:
          "Walls over 4 feet typically require a permit. We handle all permitting requirements for you.",
      },
      {
        question: "What materials do you use?",
        answer:
          "We work with segmental block, natural stone, poured concrete, and timber based on your needs and preferences.",
      },
      {
        question: "How long do retaining walls last?",
        answer:
          "Properly built retaining walls can last 50+ years with minimal maintenance.",
      },
      {
        question: "Can you build walls on steep slopes?",
        answer:
          "Yes, we specialize in challenging terrain and can design tiered wall systems for steep slopes.",
      },
    ],
    relatedServices: ["drainage", "hardscaping", "patios"],
    category: "paving",
  },
  drainage: {
    title: "Drainage Solutions",
    description:
      "Comprehensive drainage systems to protect your property from water damage and foundation issues.",
    heroImage: placeholders.services.drainage,
    features: [
      "French drains",
      "Channel drains",
      "Dry wells",
      "Grading solutions",
      "Downspout extensions",
      "Sump pump systems",
    ],
    benefits: [
      {
        title: "Foundation Protection",
        description:
          "Prevent costly foundation damage from water accumulation.",
      },
      {
        title: "Landscape Preservation",
        description:
          "Protect your landscaping from erosion and water damage.",
      },
      {
        title: "Basement Waterproofing",
        description:
          "Keep your basement dry and prevent mold and mildew.",
      },
      {
        title: "Property Value",
        description:
          "Proper drainage protects your investment and maintains value.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Problem Assessment",
        description:
          "Identify water flow patterns and problem areas.",
      },
      {
        step: 2,
        title: "Solution Design",
        description:
          "Create a custom drainage plan for your property.",
      },
      {
        step: 3,
        title: "Installation",
        description:
          "Expert installation of drainage systems and grading.",
      },
      {
        step: 4,
        title: "Testing",
        description:
          "Verify proper water flow and system function.",
      },
    ],
    faqs: [
      {
        question: "How do I know if I need drainage work?",
        answer:
          "Signs include standing water, soggy areas, basement moisture, or erosion problems.",
      },
      {
        question: "What is a French drain?",
        answer:
          "A French drain is a gravel-filled trench with a perforated pipe that redirects water away from problem areas.",
      },
      {
        question: "Can you fix existing drainage problems?",
        answer:
          "Yes, we can repair, upgrade, or replace existing drainage systems.",
      },
      {
        question: "How long does drainage installation take?",
        answer:
          "Most residential drainage projects take 1-3 days depending on scope.",
      },
    ],
    relatedServices: ["retaining-walls", "driveways", "hardscaping"],
    category: "paving",
  },
  hardscaping: {
    title: "Hardscaping",
    description:
      "Complete hardscape design including outdoor kitchens, fire pits, and decorative stone features.",
    heroImage: placeholders.services.hardscaping,
    features: [
      "Outdoor kitchens",
      "Fire pits & fireplaces",
      "Seating walls",
      "Water features",
      "Pergolas & arbors",
      "Stone steps",
    ],
    benefits: [
      {
        title: "Outdoor Living",
        description:
          "Create functional outdoor spaces for cooking, dining, and entertaining.",
      },
      {
        title: "Year-Round Enjoyment",
        description:
          "Fire features extend outdoor living into cooler months.",
      },
      {
        title: "Low Maintenance",
        description:
          "Hardscape elements require less upkeep than lawn and gardens.",
      },
      {
        title: "Personalization",
        description:
          "Custom designs that reflect your style and lifestyle.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Vision Discussion",
        description:
          "Share your outdoor living goals and preferences.",
      },
      {
        step: 2,
        title: "Design Development",
        description:
          "Create detailed plans and 3D renderings.",
      },
      {
        step: 3,
        title: "Material Selection",
        description:
          "Choose from premium stone, brick, and paver options.",
      },
      {
        step: 4,
        title: "Construction",
        description:
          "Expert craftsmen bring your vision to life.",
      },
      {
        step: 5,
        title: "Finishing",
        description:
          "Final details, lighting, and landscaping integration.",
      },
    ],
    faqs: [
      {
        question: "What is included in hardscaping?",
        answer:
          "Hardscaping includes any non-living outdoor elements: patios, walls, fire pits, outdoor kitchens, water features, and more.",
      },
      {
        question: "Can you design custom outdoor kitchens?",
        answer:
          "Yes, we design and build complete outdoor kitchens with grills, countertops, storage, and seating.",
      },
      {
        question: "Do you handle permits and inspections?",
        answer:
          "We manage all necessary permits and ensure projects meet local codes.",
      },
      {
        question: "How do I maintain hardscape features?",
        answer:
          "Most hardscape requires minimal maintenance—occasional cleaning and sealing every few years.",
      },
    ],
    relatedServices: ["patios", "retaining-walls", "drainage"],
    category: "paving",
  },
  roofing: {
    title: "Roof Installation & Repair",
    description:
      "Expert roof installation, replacement, and repair using top-quality materials for lasting protection.",
    heroImage: placeholders.services.roofing,
    features: [
      "Shingle roofing",
      "Metal roofing",
      "Flat roofing",
      "Roof repairs",
      "Inspections",
      "Storm damage repair",
    ],
    benefits: [
      {
        title: "Home Protection",
        description:
          "A quality roof is your home's first defense against the elements.",
      },
      {
        title: "Energy Efficiency",
        description:
          "Modern roofing materials improve insulation and reduce energy costs.",
      },
      {
        title: "Curb Appeal",
        description:
          "A new roof dramatically improves your home's appearance.",
      },
      {
        title: "Warranty Coverage",
        description:
          "Our installations include manufacturer and workmanship warranties.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Free Inspection",
        description:
          "Thorough assessment of your current roof condition.",
      },
      {
        step: 2,
        title: "Recommendation",
        description:
          "Detailed proposal with material options and pricing.",
      },
      {
        step: 3,
        title: "Preparation",
        description:
          "Protect your property and remove old roofing materials.",
      },
      {
        step: 4,
        title: "Installation",
        description:
          "Expert installation with attention to every detail.",
      },
      {
        step: 5,
        title: "Cleanup & Inspection",
        description:
          "Complete cleanup and final quality inspection.",
      },
    ],
    faqs: [
      {
        question: "How do I know if I need a new roof?",
        answer:
          "Signs include missing shingles, leaks, sagging, granules in gutters, and roofs over 20 years old.",
      },
      {
        question: "What roofing materials do you offer?",
        answer:
          "We install asphalt shingles, metal roofing, and flat roofing systems.",
      },
      {
        question: "How long does a roof replacement take?",
        answer:
          "Most residential roof replacements are completed in 1-3 days.",
      },
      {
        question: "Do you help with insurance claims?",
        answer:
          "Yes, we work with insurance companies and can help document damage for claims.",
      },
    ],
    relatedServices: ["siding", "gutters"],
    category: "roofing",
  },
  siding: {
    title: "Vinyl Siding Installation",
    description:
      "High-quality vinyl siding that enhances curb appeal and provides superior weather protection.",
    heroImage: placeholders.services.siding,
    features: [
      "Vinyl siding",
      "Fiber cement siding",
      "Insulated siding",
      "Color options",
      "Trim & accents",
      "Repairs",
    ],
    benefits: [
      {
        title: "Weather Protection",
        description:
          "Shield your home from rain, wind, and temperature extremes.",
      },
      {
        title: "Low Maintenance",
        description:
          "No painting required—just occasional cleaning.",
      },
      {
        title: "Energy Efficiency",
        description:
          "Insulated siding options improve your home's energy performance.",
      },
      {
        title: "Curb Appeal",
        description:
          "Instantly update your home's appearance with fresh siding.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description:
          "Discuss your goals and explore material options.",
      },
      {
        step: 2,
        title: "Measurement",
        description:
          "Precise measurements for accurate material ordering.",
      },
      {
        step: 3,
        title: "Preparation",
        description:
          "Remove old siding and prepare the surface.",
      },
      {
        step: 4,
        title: "Installation",
        description:
          "Expert installation with proper insulation and moisture barriers.",
      },
      {
        step: 5,
        title: "Finishing",
        description:
          "Trim, caulking, and final inspection.",
      },
    ],
    faqs: [
      {
        question: "How long does vinyl siding last?",
        answer:
          "Quality vinyl siding can last 30-50 years with minimal maintenance.",
      },
      {
        question: "Can siding be installed over existing siding?",
        answer:
          "In some cases, yes. We'll assess your situation and recommend the best approach.",
      },
      {
        question: "What colors are available?",
        answer:
          "We offer a wide range of colors and styles to match any home aesthetic.",
      },
      {
        question: "Does new siding require painting?",
        answer:
          "No, vinyl siding is color-through and never needs painting.",
      },
    ],
    relatedServices: ["roofing", "gutters"],
    category: "roofing",
  },
  gutters: {
    title: "Seamless Gutters & Gutter Guards",
    description:
      "Custom-fitted seamless gutters and leaf guards that protect your home with minimal maintenance.",
    heroImage: placeholders.services.gutters,
    features: [
      "Seamless gutters",
      "Gutter guards",
      "Downspout installation",
      "Gutter repairs",
      "Color options",
      "Heavy-duty options",
    ],
    benefits: [
      {
        title: "Foundation Protection",
        description:
          "Direct water away from your foundation to prevent damage.",
      },
      {
        title: "Low Maintenance",
        description:
          "Gutter guards eliminate the need for frequent cleaning.",
      },
      {
        title: "Custom Fit",
        description:
          "Seamless gutters are fabricated on-site for a perfect fit.",
      },
      {
        title: "No Leaks",
        description:
          "Seamless design eliminates joints where leaks commonly occur.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description:
          "Evaluate your roofline and drainage needs.",
      },
      {
        step: 2,
        title: "Color Selection",
        description:
          "Choose colors that complement your home.",
      },
      {
        step: 3,
        title: "Fabrication",
        description:
          "Custom fabricate gutters on-site for perfect fit.",
      },
      {
        step: 4,
        title: "Installation",
        description:
          "Secure installation with proper pitch for drainage.",
      },
    ],
    faqs: [
      {
        question: "What are seamless gutters?",
        answer:
          "Seamless gutters are custom-made on-site in one continuous piece, eliminating leak-prone seams.",
      },
      {
        question: "Do gutter guards really work?",
        answer:
          "Yes, quality gutter guards significantly reduce debris buildup and cleaning frequency.",
      },
      {
        question: "How often should gutters be replaced?",
        answer:
          "Aluminum gutters typically last 20-30 years; copper can last 50+ years.",
      },
      {
        question: "Can you match my existing gutter color?",
        answer:
          "We offer a wide range of colors to match or complement your home's exterior.",
      },
    ],
    relatedServices: ["roofing", "siding"],
    category: "roofing",
  },
  sealing: {
    title: "Sealing & Cleaning Services",
    description:
      "Professional sealing and cleaning services to maintain, protect, and extend the life of your driveways, patios, and walkways.",
    heroImage: placeholders.services.driveways,
    features: [
      "Asphalt sealing",
      "Paver sealing",
      "Concrete sealing",
      "Pressure washing",
      "Stain removal",
      "Preventive maintenance",
    ],
    benefits: [
      {
        title: "Extended Lifespan",
        description:
          "Regular sealing extends the life of your surfaces by 50% or more.",
      },
      {
        title: "Weather Protection",
        description:
          "Shield against UV rays, water damage, and freeze-thaw cycles.",
      },
      {
        title: "Enhanced Appearance",
        description:
          "Restore the rich, dark color of asphalt and enhance paver colors.",
      },
      {
        title: "Cost Savings",
        description:
          "Prevent costly repairs and replacements with regular maintenance.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description:
          "Evaluate the condition of your surfaces and recommend treatment.",
      },
      {
        step: 2,
        title: "Cleaning",
        description:
          "Thorough pressure washing and stain removal.",
      },
      {
        step: 3,
        title: "Repairs",
        description:
          "Fill cracks and repair minor damage before sealing.",
      },
      {
        step: 4,
        title: "Sealing",
        description:
          "Apply premium sealant for lasting protection.",
      },
    ],
    faqs: [
      {
        question: "How often should I seal my driveway?",
        answer:
          "Asphalt driveways should be sealed every 2-3 years; pavers every 3-5 years.",
      },
      {
        question: "Can you remove oil stains?",
        answer:
          "Yes, we use specialized treatments to remove oil, grease, and other stains.",
      },
      {
        question: "How long before I can use my driveway after sealing?",
        answer:
          "Typically 24-48 hours for foot traffic and 48-72 hours for vehicles.",
      },
      {
        question: "Do you offer maintenance packages?",
        answer:
          "Yes, we offer annual maintenance packages for regular sealing and cleaning.",
      },
    ],
    relatedServices: ["driveways", "patios", "hardscaping"],
    category: "paving",
  },
  landscape: {
    title: "Landscape Integration",
    description:
      "Seamless integration of hardscaping with your existing landscape for a cohesive, beautiful outdoor design.",
    heroImage: placeholders.services.patios,
    features: [
      "Design coordination",
      "Plant bed integration",
      "Lighting design",
      "Grading & drainage",
      "Irrigation planning",
      "Softscape integration",
    ],
    benefits: [
      {
        title: "Cohesive Design",
        description:
          "Blend hardscape and landscape elements for a unified look.",
      },
      {
        title: "Increased Value",
        description:
          "Integrated outdoor spaces significantly boost property value.",
      },
      {
        title: "Functional Spaces",
        description:
          "Create outdoor living areas that flow naturally with your landscape.",
      },
      {
        title: "Year-Round Beauty",
        description:
          "Designs that look great in every season.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Analysis",
        description:
          "Evaluate existing landscape and discuss your vision.",
      },
      {
        step: 2,
        title: "Design Planning",
        description:
          "Create integrated design plans for hardscape and landscape.",
      },
      {
        step: 3,
        title: "Hardscape Installation",
        description:
          "Install patios, walkways, walls, and other hardscape elements.",
      },
      {
        step: 4,
        title: "Landscape Integration",
        description:
          "Add plantings, lighting, and finishing touches.",
      },
    ],
    faqs: [
      {
        question: "Do you do the landscaping too?",
        answer:
          "We focus on hardscaping but coordinate closely with landscapers for seamless integration.",
      },
      {
        question: "Can you work around existing plants?",
        answer:
          "Absolutely, we take care to protect and incorporate existing landscape elements.",
      },
      {
        question: "Do you install outdoor lighting?",
        answer:
          "Yes, we install landscape lighting as part of our integrated design services.",
      },
      {
        question: "What about irrigation?",
        answer:
          "We plan for irrigation during design and can coordinate installation.",
      },
    ],
    relatedServices: ["patios", "hardscaping", "retaining-walls"],
    category: "paving",
  },
  decks: {
    title: "New Decks & Paint Work",
    description:
      "Custom deck construction and professional exterior paint work to enhance your home's beauty and outdoor living space.",
    heroImage: placeholders.services.siding,
    features: [
      "Wood deck construction",
      "Composite decking",
      "Deck repairs",
      "Exterior painting",
      "Staining & finishing",
      "Railing installation",
    ],
    benefits: [
      {
        title: "Outdoor Living",
        description:
          "Expand your living space with a beautiful new deck.",
      },
      {
        title: "Curb Appeal",
        description:
          "Fresh paint and staining dramatically improve appearance.",
      },
      {
        title: "Durability",
        description:
          "Quality materials and construction for years of enjoyment.",
      },
      {
        title: "Low Maintenance",
        description:
          "Composite options require minimal upkeep.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Design Consultation",
        description:
          "Discuss your vision, needs, and material preferences.",
      },
      {
        step: 2,
        title: "Planning & Permits",
        description:
          "Create detailed plans and obtain necessary permits.",
      },
      {
        step: 3,
        title: "Construction",
        description:
          "Expert construction with quality materials.",
      },
      {
        step: 4,
        title: "Finishing",
        description:
          "Staining, painting, and final touches.",
      },
    ],
    faqs: [
      {
        question: "Wood or composite deck—which is better?",
        answer:
          "Both have advantages. Wood is more affordable; composite lasts longer with less maintenance.",
      },
      {
        question: "Do you handle permits?",
        answer:
          "Yes, we manage all necessary permits and inspections.",
      },
      {
        question: "Can you refinish an existing deck?",
        answer:
          "Yes, we offer deck restoration including sanding, staining, and sealing.",
      },
      {
        question: "What paint brands do you use?",
        answer:
          "We use premium exterior paints from trusted brands for lasting results.",
      },
    ],
    relatedServices: ["siding", "roofing", "gutters"],
    category: "roofing",
  },
};

type ServiceSlug = keyof typeof services;

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | New Look Paving & Masonry`,
      description: service.description,
      images: [service.heroImage],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  // Get related service data
  const relatedServicesData = service.relatedServices
    .map((relatedSlug) => {
      const relatedService = services[relatedSlug as ServiceSlug];
      if (relatedService) {
        return {
          slug: relatedSlug,
          title: relatedService.title,
          description: relatedService.description,
          image: relatedService.heroImage,
        };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <ServicePageContent
      service={{
        ...service,
        slug,
      }}
      relatedServices={relatedServicesData as Array<{
        slug: string;
        title: string;
        description: string;
        image: string;
      }>}
    />
  );
}

