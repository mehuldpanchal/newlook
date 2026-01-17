"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Phone,
  ArrowRight,
  Home,
} from "lucide-react";

interface ServicePageContentProps {
  service: {
    slug: string;
    title: string;
    description: string;
    heroImage: string;
    features: string[];
    benefits: Array<{ title: string; description: string }>;
    process: Array<{ step: number; title: string; description: string }>;
    faqs: Array<{ question: string; answer: string }>;
    category: string;
  };
  relatedServices: Array<{
    slug: string;
    title: string;
    description: string;
    image: string;
  }>;
}

function FAQAccordion({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left min-h-[64px]"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-dark pr-4">{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-dark-500 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default function ServicePageContent({
  service,
  relatedServices,
}: ServicePageContentProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32 pt-40">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center text-white/80 text-sm mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-gold flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/services" className="hover:text-gold">
              Services
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gold">{service.title}</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-lg"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mb-8"
          >
            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-500 text-dark font-bold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-xl flex items-center justify-center min-h-[56px]"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:703-725-3110"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-lg text-lg transition-all flex items-center justify-center min-h-[56px]"
            >
              <Phone className="mr-2 h-5 w-5" />
              703-725-3110
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-dark mb-8">
                What We Offer
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                  >
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-dark font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-dark mb-8">
                Key Benefits
              </h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary"
                  >
                    <h3 className="text-lg font-bold text-dark mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-dark-500">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              How We Work
            </h2>
            <p className="text-lg text-dark-500">
              From initial consultation to project completion, here&apos;s what to
              expect when you work with us.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2" />

            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Number */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-primary rounded-full items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  {step.step}
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-20" : "md:pl-20"
                  }`}
                >
                  <div className="bg-light p-6 rounded-xl">
                    <div className="md:hidden flex items-center mb-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-bold text-dark">
                        {step.title}
                      </h3>
                    </div>
                    <h3 className="hidden md:block text-xl font-bold text-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-dark-500">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Contact us today for a free estimate. Our team is ready to help
              transform your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-500 text-dark font-bold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-xl flex items-center justify-center min-h-[56px]"
              >
                Get Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:703-725-3110"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-lg text-lg transition-all flex items-center justify-center min-h-[56px]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-dark">Related Services</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedServices.map((related, index) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/services/${related.slug}`}
                    className="group block bg-light rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="relative h-48">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors mb-2">
                        {related.title}
                      </h3>
                      <p className="text-dark-500 text-sm line-clamp-2">
                        {related.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

