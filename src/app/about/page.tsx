import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Users, Shield, Phone, ArrowRight } from "lucide-react";
import { placeholders } from "@/lib/placeholders";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about New Look Paving & Masonry - over 20 years of experience providing quality craftsmanship in Fredericksburg, VA.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We believe in honest, transparent communication and fair pricing. No hidden fees, no surprises.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We use only premium materials and proven techniques to ensure lasting results you can be proud of.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Your satisfaction is our priority. We work closely with you to bring your vision to life.",
  },
];

const credentials = [
  "Licensed & Insured",
  "20+ Years Experience",
  "Premium Materials Only",
  "Expert Craftsmanship",
  "Residential & Commercial",
  "100% Satisfaction Guarantee",
  "Free Detailed Estimates",
  "Flexible Financing Options",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 pt-40 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={placeholders.aboutHero}
            alt="New Look Paving team"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About New Look
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Over 20 years of transforming properties with quality craftsmanship
            and dedication to excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={placeholders.aboutTeam}
                  alt="New Look Paving & Masonry team"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-gold">20+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>

            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-6">
                Building Trust, One Project at a Time
              </h2>
              <div className="space-y-4 text-dark-500 leading-relaxed">
                <p>
                  New Look Paving & Masonry was founded with a simple mission: to
                  provide homeowners and businesses with exceptional exterior
                  improvement services at fair prices. What started as a small
                  family operation has grown into one of Fredericksburg&apos;s most
                  trusted contractors.
                </p>
                <p>
                  Over the past two decades, we&apos;ve completed hundreds of projects
                  ranging from simple driveway repairs to complete property
                  transformations. Our commitment to quality workmanship and
                  customer satisfaction has earned us a reputation that we&apos;re
                  proud of.
                </p>
                <p>
                  Today, we continue to uphold the values that built our
                  company: integrity, quality, and a genuine care for every
                  customer we serve. When you work with New Look, you&apos;re not just
                  hiring a contractor – you&apos;re partnering with a team that treats
                  your property as if it were our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-dark-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-8">
                The New Look Difference
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((credential) => (
                  <div key={credential} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-dark font-medium">{credential}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-lg transition-all hover:shadow-lg flex items-center justify-center min-h-[48px]"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:703-725-3110"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-lg transition-all flex items-center justify-center min-h-[48px]"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={placeholders.gallery.driveway1}
                  alt="Completed driveway project"
                  width={280}
                  height={200}
                  className="rounded-xl shadow-lg object-cover w-full h-48"
                />
                <Image
                  src={placeholders.gallery.patio1}
                  alt="Completed patio project"
                  width={280}
                  height={200}
                  className="rounded-xl shadow-lg object-cover w-full h-48 mt-8"
                />
                <Image
                  src={placeholders.gallery.roofing1}
                  alt="Completed roofing project"
                  width={280}
                  height={200}
                  className="rounded-xl shadow-lg object-cover w-full h-48"
                />
                <Image
                  src={placeholders.gallery.siding1}
                  alt="Completed siding project"
                  width={280}
                  height={200}
                  className="rounded-xl shadow-lg object-cover w-full h-48 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today for a free estimate. We&apos;re excited to help bring
            your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-500 text-dark font-bold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-xl flex items-center justify-center min-h-[56px]"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-lg text-lg transition-all flex items-center justify-center min-h-[56px]"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

