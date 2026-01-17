"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Phone, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-light py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/gallery/newlook-logo1.png"
              alt="New Look Paving & Masonry"
              width={200}
              height={100}
              className="h-24 w-auto mx-auto"
            />
          </div>

          {/* 404 Number */}
          <div className="relative">
            <span className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-20 w-20 text-primary" />
            </div>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4 -mt-4">
            Page Not Found
          </h1>
          <p className="text-lg text-dark-500 max-w-md mx-auto mb-10">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
            been moved or doesn&apos;t exist.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-primary hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-lg transition-all hover:shadow-lg flex items-center justify-center min-h-[48px]"
            >
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-lg transition-all flex items-center justify-center min-h-[48px]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-white rounded-xl p-6 max-w-md mx-auto shadow-lg"
          >
            <p className="text-dark-500 mb-4">
              Need help? Contact us directly:
            </p>
            <a
              href="tel:703-725-3110"
              className="inline-flex items-center text-primary hover:text-primary-700 font-semibold text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              703-725-3110
            </a>
          </motion.div>

          {/* Quick Links */}
          <div className="mt-10">
            <p className="text-dark-400 mb-4">Or check out these pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="text-primary hover:text-primary-700 font-medium"
              >
                Our Services
              </Link>
              <Link
                href="/portfolio"
                className="text-primary hover:text-primary-700 font-medium"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-primary hover:text-primary-700 font-medium"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-primary hover:text-primary-700 font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

