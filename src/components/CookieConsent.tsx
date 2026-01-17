"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto">
            <div className="bg-dark rounded-xl shadow-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <Cookie className="h-8 w-8 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    We Value Your Privacy
                  </h3>
                  <p className="text-white/70 text-sm">
                    We use cookies to enhance your browsing experience and
                    analyze our traffic. By clicking &quot;Accept All&quot;, you consent
                    to our use of cookies.{" "}
                    <a
                      href="/privacy"
                      className="text-gold hover:underline"
                    >
                      Learn more
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={declineCookies}
                  className="flex-1 md:flex-none px-5 py-2.5 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors min-h-[44px]"
                >
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="flex-1 md:flex-none px-5 py-2.5 bg-gold text-dark font-bold rounded-lg hover:bg-gold-500 transition-colors min-h-[44px]"
                >
                  Accept All
                </button>
                <button
                  onClick={declineCookies}
                  className="text-white/50 hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close cookie banner"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

