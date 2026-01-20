"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"), // Spam protection
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Driveway Installation",
  "Driveway Repair",
  "Patio & Walkway",
  "Retaining Wall",
  "Drainage Solutions",
  "Hardscaping",
  "Roof Installation",
  "Roof Repair",
  "Vinyl Siding",
  "Gutters",
  "Other",
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-5">
            Contact Us
          </h2>
          <p className="text-lg text-dark-500">
            Ready to transform your property? Contact us today for a free
            estimate. We&apos;re here to help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-dark mb-6">
              Request a Free Estimate
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot Field (hidden) */}
              <input
                type="text"
                {...register("honeypot")}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark-600 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-dark-200 focus:ring-primary"
                  } focus:outline-none focus:ring-2 transition-all`}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark-600 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-dark-200 focus:ring-primary"
                  } focus:outline-none focus:ring-2 transition-all`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-dark-600 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  onChange={(e) => {
                    e.target.value = formatPhoneNumber(e.target.value);
                  }}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-dark-200 focus:ring-primary"
                  } focus:outline-none focus:ring-2 transition-all`}
                  placeholder="(703) 555-1234"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Service Interest */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-dark-600 mb-2"
                >
                  Service Interest *
                </label>
                <select
                  id="service"
                  {...register("service")}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.service
                      ? "border-red-500 focus:ring-red-500"
                      : "border-dark-200 focus:ring-primary"
                  } focus:outline-none focus:ring-2 transition-all bg-white`}
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark-600 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-dark-200 focus:ring-primary"
                  } focus:outline-none focus:ring-2 transition-all resize-none`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-700 disabled:bg-primary-300 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center min-h-[56px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center bg-accent/10 text-accent p-4 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <p>
                    Thank you for your message! We&apos;ll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center bg-red-50 text-red-600 p-4 rounded-lg"
                >
                  <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <p>
                    Something went wrong. Please try again or call us directly.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Card */}
            <div className="bg-primary rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="tel:703-725-3110"
                  className="flex items-start hover:text-gold transition-colors"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Phone</p>
                    <p className="text-lg font-semibold">703-725-3110</p>
                  </div>
                </a>

                <a
                  href="mailto:contact.newlookpavingandmasonry@gmail.com"
                  className="flex items-start hover:text-gold transition-colors"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Email</p>
                    <p className="text-lg font-semibold">contact.newlookpavingandmasonry@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Address</p>
                    <p className="text-lg font-semibold">
                      2215 Plank Rd
                      <br />
                      Fredericksburg, VA 22401
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Business Hours</p>
                    <p className="font-semibold">
                      Monday - Friday: 7:00 AM - 6:00 PM
                    </p>
                    <p className="font-semibold">Saturday: 8:00 AM - 4:00 PM</p>
                    <p className="text-white/70">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.826456!2d-77.4605!3d38.3032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6c1f0d7f5a9b5%3A0x1234567890abcdef!2s2215%20Plank%20Rd%2C%20Fredericksburg%2C%20VA%2022401!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="New Look Paving & Masonry Location"
                />
              </div>
              <div className="p-4 bg-light">
                <a
                  href="https://maps.google.com/?q=2215+Plank+Rd,+Fredericksburg,+VA+22401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-700 font-semibold text-center block"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

