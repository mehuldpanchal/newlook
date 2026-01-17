import { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our gallery of completed paving, masonry, roofing, and siding projects. See the quality of our work.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 pt-40 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Explore our gallery of completed projects. Each project showcases
            our commitment to quality and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-500 text-dark font-bold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-xl flex items-center justify-center min-h-[56px]"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:703-725-3110"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-lg text-lg transition-all flex items-center justify-center min-h-[56px]"
            >
              <Phone className="mr-2 h-5 w-5" />
              703-725-3110
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Love What You See?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let us create something beautiful for your property. Contact us
            today for a free estimate on your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white hover:bg-light text-accent font-bold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-xl min-h-[56px]"
          >
            Get Free Estimate
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

