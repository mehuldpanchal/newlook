"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl shadow-xl p-8 text-white h-fit"
          >
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
                  <p className="text-lg font-semibold break-all">contact.newlookpavingandmasonry@gmail.com</p>
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
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-xl overflow-hidden h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.826456!2d-77.4605!3d38.3032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6c1f0d7f5a9b5%3A0x1234567890abcdef!2s2215%20Plank%20Rd%2C%20Fredericksburg%2C%20VA%2022401!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="New Look Paving & Masonry Location"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

