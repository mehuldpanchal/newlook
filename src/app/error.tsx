"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, RefreshCw, Phone, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

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
              width={180}
              height={90}
              className="h-20 w-auto mx-auto"
            />
          </div>

          {/* Error Icon */}
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg text-dark-500 max-w-md mx-auto mb-10">
            We&apos;re sorry, but something unexpected happened. Please try again or
            contact us if the problem persists.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="bg-primary hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-lg transition-all hover:shadow-lg flex items-center justify-center min-h-[48px]"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </button>
            <Link
              href="/"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-lg transition-all flex items-center justify-center min-h-[48px]"
            >
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Link>
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
        </motion.div>
      </div>
    </main>
  );
}

