"use client";

import { useState, useEffect } from "react";
import GhibliDustBunny from "./GhibliDustBunny";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowConsent(true);
      // Delay showing for smooth animation
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({
        accepted: true,
        timestamp: Date.now(),
      })
    );
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 300);
  };

  const declineCookies = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({
        accepted: false,
        timestamp: Date.now(),
      })
    );
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 300);
  };

  if (!showConsent) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white border-t-4 border-green-500 shadow-2xl p-6 mx-4 mb-4 rounded-t-3xl relative">
        {/* Decorative elements */}
        <GhibliDustBunny
          className="absolute top-2 right-4 opacity-20 animate-float-slow"
          size="small"
        />
        <GhibliDustBunny
          className="absolute top-4 left-6 opacity-15 animate-float-medium"
          size="small"
        />

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-green-800 mb-2 font-serif">
                🍪 Magical Cookies & Forest Spirits
              </h3>
              <p className="text-green-600 text-sm leading-relaxed">
                Like the forest spirits that help Totoro, we use cookies and
                local storage to enhance your experience. This includes
                remembering your chat conversations, personalizing content, and
                analyzing how our magical realm is used. We respect your privacy
                and only use essential cookies for functionality.
              </p>
              <div className="mt-2">
                <button
                  onClick={() => window.open("/privacy", "_blank")}
                  className="text-green-500 hover:text-green-700 text-sm underline"
                >
                  Learn more about our privacy practices
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
              <button
                onClick={acceptCookies}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-300 font-medium text-sm"
              >
                Accept All ✨
              </button>
              <button
                onClick={declineCookies}
                className="border-2 border-green-500 text-green-600 px-6 py-2 rounded-xl hover:bg-green-50 transition-all duration-300 font-medium text-sm"
              >
                Essential Only
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
