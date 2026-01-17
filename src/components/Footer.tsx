"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const services = [
  { name: "Driveways", href: "/services/driveways" },
  { name: "Patios & Walkways", href: "/services/patios" },
  { name: "Sealing & Cleaning", href: "/services/sealing" },
  { name: "Hardscaping", href: "/services/hardscaping" },
  { name: "Roofing", href: "/services/roofing" },
  { name: "Vinyl Siding", href: "/services/siding" },
  { name: "Gutters & Guards", href: "/services/gutters" },
  { name: "Decks & Paint Work", href: "/services/decks" },
];

const serviceAreas = [
  "Fredericksburg",
  "Stafford",
  "Spotsylvania",
  "King George",
  "Caroline County",
  "Orange County",
  "Culpeper",
  "Manassas",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Free Estimate Banner */}
      <div className="bg-gold py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-dark font-bold text-lg md:text-xl">
            🏠 FREE ESTIMATES - Call Today!{" "}
            <a
              href="tel:703-725-3110"
              className="underline hover:no-underline"
            >
              703-725-3110
            </a>
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/gallery/newlook-logo1.png"
                alt="New Look Paving & Masonry"
                width={180}
                height={90}
                className="h-20 w-auto bg-white rounded-lg p-2"
                priority
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming exteriors with quality craftsmanship since 2005.
              Licensed and insured professionals serving Fredericksburg, VA and
              surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gold hover:text-dark p-3 rounded-lg transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gold hover:text-dark p-3 rounded-lg transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors inline-block min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/80 hover:text-gold transition-colors inline-block min-h-[44px] flex items-center"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:703-725-3110"
                  className="flex items-start text-white/80 hover:text-gold transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>703-725-3110</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:newlook7@myyahoo.com"
                  className="flex items-start text-white/80 hover:text-gold transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>newlook7@myyahoo.com</span>
                </a>
              </li>
              <li className="flex items-start text-white/80">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  2215 Plank Rd
                  <br />
                  Fredericksburg, VA 22401
                </span>
              </li>
              <li className="flex items-start text-white/80">
                <Clock className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  Mon-Fri: 7AM - 6PM
                  <br />
                  Sat: 8AM - 4PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <h3 className="text-lg font-bold mb-4 text-gold">Service Areas</h3>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/80"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary-950 py-4">
        <div className="container mx-auto px-4 text-center text-white/60 text-sm">
          <p>
            © {currentYear} New Look Paving & Masonry. All rights reserved.
          </p>
          <p className="mt-1">
            Licensed & Insured | Serving Virginia Since 2005
          </p>
        </div>
      </div>
    </footer>
  );
}

