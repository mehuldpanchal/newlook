import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for New Look Paving & Masonry website.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-32 pt-40 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/80">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mb-4">Introduction</h2>
            <p className="text-dark-500 mb-6">
              New Look Paving & Masonry (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your
              privacy and is committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard
              your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Information We Collect
            </h2>
            <p className="text-dark-500 mb-4">
              We may collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-dark-500 mb-6 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Address and property information</li>
              <li>Messages and correspondence you send us</li>
              <li>Service preferences and project details</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              How We Use Your Information
            </h2>
            <p className="text-dark-500 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-dark-500 mb-6 space-y-2">
              <li>Respond to your inquiries and provide estimates</li>
              <li>Communicate with you about our services</li>
              <li>Schedule and complete service appointments</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Information Sharing
            </h2>
            <p className="text-dark-500 mb-6">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              necessary to provide our services or as required by law.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Cookies and Tracking
            </h2>
            <p className="text-dark-500 mb-6">
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience and analyze website traffic. You
              can control cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Data Security
            </h2>
            <p className="text-dark-500 mb-6">
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Your Rights
            </h2>
            <p className="text-dark-500 mb-6">
              You have the right to access, correct, or delete your personal
              information. To exercise these rights, please contact us using the
              information below.
            </p>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Contact Us
            </h2>
            <p className="text-dark-500 mb-6">
              If you have questions about this Privacy Policy or our practices,
              please contact us at:
            </p>
            <div className="bg-light rounded-xl p-6 mb-6">
              <p className="text-dark font-semibold">
                New Look Paving & Masonry
              </p>
              <p className="text-dark-500">2215 Plank Rd</p>
              <p className="text-dark-500">Fredericksburg, VA 22401</p>
              <p className="text-dark-500">Phone: 703-725-3110</p>
              <p className="text-dark-500">Email: newlook7@myyahoo.com</p>
            </div>

            <h2 className="text-2xl font-bold text-dark mb-4 mt-8">
              Changes to This Policy
            </h2>
            <p className="text-dark-500 mb-6">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last updated&quot; date.
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

