"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Paving & Masonry",
    href: "/services",
    children: [
      { name: "Driveways", href: "/services/driveways" },
      { name: "Patios & Walkways", href: "/services/patios" },
      { name: "Retaining Walls", href: "/services/retaining-walls" },
      { name: "Sealing & Cleaning", href: "/services/sealing" },
      { name: "Hardscaping", href: "/services/hardscaping" },
      { name: "Landscape Integration", href: "/services/landscape" },
    ],
  },
  {
    name: "Roofing & Siding",
    href: "/services",
    children: [
      { name: "Roofing", href: "/services/roofing" },
      { name: "Vinyl Siding", href: "/services/siding" },
      { name: "Seamless Gutters", href: "/services/gutters" },
      { name: "Decks & Paint Work", href: "/services/decks" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg p-1.5 shadow-md"
            >
              <Image
                src="/images/gallery/newlook-logo1.png"
                alt="New Look Paving & Masonry"
                width={140}
                height={70}
                className="h-10 md:h-14 lg:h-24 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    className="flex items-center px-4 py-2 text-white hover:text-gold transition-colors font-medium"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="px-4 py-2 text-white hover:text-gold transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <div
                    className="absolute top-full left-0 pt-2"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="bg-white rounded-lg shadow-xl py-2 min-w-[220px]"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-dark hover:bg-light hover:text-primary transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:703-725-3110"
              className="flex items-center text-white hover:text-gold transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-semibold">703-725-3110</span>
            </a>
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-500 text-dark font-bold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:scale-105 min-h-[44px] flex items-center"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.name ? null : item.name
                            )
                          }
                          className="flex items-center justify-between w-full px-4 py-3 text-white hover:text-gold transition-colors font-medium min-h-[44px]"
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              openDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-primary-950 overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block px-8 py-3 text-white/80 hover:text-gold transition-colors min-h-[44px]"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          handleSmoothScroll(e, item.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block px-4 py-3 text-white hover:text-gold transition-colors font-medium min-h-[44px]"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Phone & CTA */}
                <div className="pt-4 space-y-3 border-t border-white/20">
                  <a
                    href="tel:703-725-3110"
                    className="flex items-center px-4 py-3 text-white hover:text-gold transition-colors min-h-[44px]"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    <span className="font-semibold">703-725-3110</span>
                  </a>
                  <div className="px-4">
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block bg-gold hover:bg-gold-500 text-dark font-bold px-5 py-3 rounded-lg text-center transition-all min-h-[44px]"
                    >
                      Get Free Estimate
                    </Link>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

