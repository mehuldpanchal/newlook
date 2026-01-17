"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scissors, Clock, ArrowRight } from "lucide-react";

const promotions = [
  {
    id: 1,
    title: "20% OFF",
    subtitle: "FIRST TIME CUSTOMERS",
    tagline: "with this coupon",
    description:
      "New to New Look? Get 20% off your first project with us. Driveways, patios, hardscaping & more!",
    validUntil: "Limited Time Offer",
    terms: "Valid for new customers only. Cannot be combined with other offers. Minimum project value $1,000.",
    icon: "paving",
  },
  {
    id: 2,
    title: "20% OFF",
    subtitle: "ALL NEW ROOFS",
    tagline: "with this coupon",
    description:
      "Upgrade your home's protection with a brand new roof. Includes shingle installation, flat roofs & more!",
    validUntil: "Limited Time Offer",
    terms: "Applies to complete roof replacement only. Free inspection included. Cannot be combined with other offers.",
    icon: "roofing",
  },
];

export default function Promotions() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-primary">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Special Offers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
            Exclusive Savings
          </h2>
          <p className="text-lg text-white/80">
            Take advantage of our current promotions and save on your next home
            improvement project.
          </p>
        </motion.div>

        {/* Coupon Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Coupon Top */}
              <div className="relative px-8 py-10 bg-gradient-to-br from-gold-400 to-gold-500">
                {/* Scissors Icon */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    <Scissors className="h-5 w-5 text-gold rotate-90" />
                  </div>
                </div>

                {/* Dashed Border */}
                <div className="absolute inset-4 border-2 border-dashed border-white/40 rounded-lg" />

                <div className="relative text-center">
                  <div className="text-5xl md:text-6xl font-black text-white text-shadow-lg mb-2">
                    {promo.title}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-dark">
                    {promo.subtitle}
                  </div>
                  <div className="text-sm text-dark/70 italic mt-1">
                    {promo.tagline}
                  </div>
                </div>
              </div>

              {/* Perforated Edge Effect */}
              <div className="relative h-4 bg-white">
                <div className="absolute -top-4 left-0 right-0 flex justify-around">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-primary rounded-full"
                    />
                  ))}
                </div>
              </div>

              {/* Coupon Bottom */}
              <div className="px-8 py-8">
                <p className="text-dark-500 mb-6 leading-relaxed">
                  {promo.description}
                </p>

                {/* Coupon Badge */}
                <div className="bg-light rounded-lg p-4 mb-6 text-center border-2 border-dashed border-gold">
                  <div className="flex items-center justify-center gap-2">
                    <Scissors className="h-5 w-5 text-gold" />
                    <span className="text-lg font-bold text-primary uppercase">
                      Present This Coupon
                    </span>
                  </div>
                </div>

                {/* Valid Until */}
                <div className="flex items-center justify-center text-dark-400 text-sm mb-6">
                  <Clock className="h-4 w-4 mr-2" />
                  {promo.validUntil}
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="w-full bg-primary hover:bg-primary-700 text-white font-bold py-4 rounded-lg transition-all hover:shadow-lg flex items-center justify-center min-h-[56px]"
                >
                  Claim Offer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                {/* Terms */}
                <p className="text-xs text-dark-400 mt-4 text-center leading-relaxed">
                  * {promo.terms}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/80 mb-4">
            Have questions about our promotions?
          </p>
          <a
            href="tel:703-725-3110"
            className="inline-flex items-center text-gold hover:text-gold-300 font-bold text-xl transition-colors"
          >
            Call Us: 703-725-3110
          </a>
        </motion.div>
      </div>
    </section>
  );
}

