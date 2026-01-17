"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Hammer,
  Droplets,
  Layers,
  Shield,
  Wrench,
  ArrowRight,
  Building,
  Fence,
  Paintbrush,
  Sparkles,
  TreePine,
  CircleDot,
} from "lucide-react";

const pavingServices = [
  {
    icon: Home,
    title: "Driveways",
    description:
      "Custom driveway design, installation, and repair using asphalt, concrete, and pavers. Commercial & residential.",
    href: "/services/driveways",
  },
  {
    icon: Building,
    title: "Patios & Walkways",
    description:
      "Beautiful outdoor living spaces with custom stone, brick, and paver patios designed to enhance your property.",
    href: "/services/patios",
  },
  {
    icon: Fence,
    title: "Retaining Walls",
    description:
      "Functional and decorative retaining walls that prevent erosion and add stunning visual appeal to your landscape.",
    href: "/services/retaining-walls",
  },
  {
    icon: Sparkles,
    title: "Sealing & Cleaning",
    description:
      "Professional sealing and cleaning services to maintain and protect your driveways, patios, and walkways.",
    href: "/services/sealing",
  },
  {
    icon: Layers,
    title: "Hardscaping",
    description:
      "Complete hardscape design including outdoor kitchens, fire pits, and decorative stone features.",
    href: "/services/hardscaping",
  },
  {
    icon: TreePine,
    title: "Landscape Integration",
    description:
      "Seamless integration of hardscaping with your existing landscape for a cohesive outdoor design.",
    href: "/services/landscape",
  },
];

const roofingServices = [
  {
    icon: Shield,
    title: "Shingle Roof Installation",
    description:
      "Expert shingle roof installation and replacement for residential and commercial properties.",
    href: "/services/roofing",
  },
  {
    icon: Wrench,
    title: "Roof Inspections & Repairs",
    description:
      "Thorough inspections and reliable repairs to extend the life of your roof and prevent costly damage.",
    href: "/services/roofing",
  },
  {
    icon: CircleDot,
    title: "Flat Roof Systems",
    description:
      "Professional flat roof installation and repair for commercial and residential buildings.",
    href: "/services/roofing",
  },
  {
    icon: Hammer,
    title: "Vinyl Siding Installation",
    description:
      "High-quality vinyl siding that enhances curb appeal and provides superior weather protection.",
    href: "/services/siding",
  },
  {
    icon: Droplets,
    title: "Seamless Gutters & Guards",
    description:
      "Custom-fitted seamless gutters and leaf gutter guards to protect your home from water damage.",
    href: "/services/gutters",
  },
  {
    icon: Paintbrush,
    title: "New Decks & Paint Work",
    description:
      "Custom deck construction and professional exterior paint work to enhance your home's beauty.",
    href: "/services/decks",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  accentColor: "blue" | "green";
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  accentColor,
}: ServiceCardProps) {
  const colorClasses = {
    blue: {
      bg: "bg-primary/10",
      icon: "text-primary",
      hover: "group-hover:bg-primary group-hover:text-white",
      link: "text-primary hover:text-primary-700",
    },
    green: {
      bg: "bg-accent/10",
      icon: "text-accent",
      hover: "group-hover:bg-accent group-hover:text-white",
      link: "text-accent hover:text-accent-700",
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <motion.div
      variants={cardVariants}
      className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-light-300"
    >
      <div
        className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${colors.hover}`}
      >
        <Icon className={`h-7 w-7 ${colors.icon} group-hover:text-white transition-colors`} />
      </div>

      <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>

      <p className="text-dark-500 mb-5 leading-relaxed">{description}</p>

      <Link
        href={href}
        className={`inline-flex items-center font-semibold ${colors.link} transition-colors min-h-[44px]`}
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-5">
            Our Professional Services
          </h2>
          <p className="text-lg text-dark-500 leading-relaxed">
            From stunning driveways to complete roof replacements, we provide
            comprehensive exterior services with unmatched quality and
            craftsmanship.
          </p>
        </motion.div>

        {/* Paving & Masonry Services */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
              <Hammer className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark">
              Paving & Masonry Services
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pavingServices.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                accentColor="blue"
              />
            ))}
          </motion.div>
        </div>

        {/* Roofing & Siding Services */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark">
              Roofing & Siding Services
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {roofingServices.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                accentColor="green"
              />
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center bg-primary hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-lg min-h-[56px]"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

