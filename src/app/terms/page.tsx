import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for New Look Paving & Masonry.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-32 pt-40 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-white/80">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mb-4">
              Agreement to Terms
            </h2>
            <p className="text-dark-500 mb-6">
              By accessing or using the New Look Paving & Masonry website and
              services, you agree to be bound by these Terms of Service. If you
              do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Services Description
            </h2>
            <p className="text-dark-500 mb-6">
              New Look Paving & Masonry provides paving, masonry, roofing, and
              siding services for residential and commercial properties. All
              services are subject to a written contract or agreement specifying
              the scope of work, pricing, and timeline.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Estimates and Pricing
            </h2>
            <p className="text-dark-500 mb-6">
              Estimates provided are based on our assessment of the work
              required. Final pricing may vary based on actual conditions
              discovered during the project. Any changes to the scope of work
              will be discussed and agreed upon before proceeding.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Payment Terms
            </h2>
            <p className="text-dark-500 mb-4">
              Payment terms will be specified in the project contract. Generally:
            </p>
            <ul className="list-disc pl-6 text-dark-500 mb-6 space-y-2">
              <li>A deposit may be required before work begins</li>
              <li>Progress payments may be required for larger projects</li>
              <li>Final payment is due upon completion of the project</li>
              <li>Accepted payment methods will be specified in the contract</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Warranty
            </h2>
            <p className="text-dark-500 mb-6">
              We stand behind our work and offer warranties on our services.
              Specific warranty terms and conditions will be outlined in your
              project contract. Warranties may be void if the work is modified
              or damaged by others.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Limitation of Liability
            </h2>
            <p className="text-dark-500 mb-6">
              New Look Paving & Masonry shall not be liable for any indirect,
              incidental, special, or consequential damages arising out of or in
              connection with our services. Our liability is limited to the
              amount paid for the services in question.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Property Access
            </h2>
            <p className="text-dark-500 mb-6">
              By engaging our services, you grant us permission to access your
              property as necessary to complete the agreed-upon work. You are
              responsible for ensuring clear access to the work area.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Cancellation Policy
            </h2>
            <p className="text-dark-500 mb-6">
              Cancellation policies will be specified in your project contract.
              Cancellations may be subject to fees to cover materials ordered or
              work already completed.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Website Use
            </h2>
            <p className="text-dark-500 mb-6">
              The content on our website is for informational purposes only.
              While we strive for accuracy, we make no guarantees about the
              completeness or reliability of any information on our site.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Intellectual Property
            </h2>
            <p className="text-dark-500 mb-6">
              All content on this website, including text, images, and logos, is
              the property of New Look Paving & Masonry and is protected by
              applicable copyright and trademark laws.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Governing Law
            </h2>
            <p className="text-dark-500 mb-6">
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the Commonwealth of Virginia.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Contact Information
            </h2>
            <p className="text-dark-500 mb-6">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-light rounded-xl p-6 mb-6">
              <p className="text-dark font-semibold">
                New Look Paving & Masonry
              </p>
              <p className="text-dark-500">2215 Plank Rd</p>
              <p className="text-dark-500">Fredericksburg, VA 22401</p>
              <p className="text-dark-500">Phone: 703-725-3110</p>
              <p className="text-dark-500">Email: contact.newlookpavingandmasonry@gmail.com</p>
            </div>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Changes to Terms
            </h2>
            <p className="text-dark-500 mb-6">
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to our website.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="text-primary hover:text-primary-700 font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

