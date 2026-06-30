"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const countries = [
  "Cyprus", "Armenia", "Georgia", "Kazakhstan", "Uzbekistan", "Kyrgyzstan", "Turkmenistan", "Tajikistan"
];

// Define your partners per country here. 
// Place your logo image files into the 'public' folder of the project.
// For example, if you place 'sony.png' in public/, use "/sony.png" as the logo path.
const partnersData: Record<string, { name: string, logo: string }[]> = {
  "Cyprus": [
    { name: "Partner 1", logo: "" },
    { name: "Partner 2", logo: "" },
    { name: "Partner 3", logo: "" },
    { name: "Partner 4", logo: "" }
  ],
  "Armenia": [
    { name: "Partner 1", logo: "/partners/ZigZag.png" },
    { name: "Partner 2", logo: "/partners/ZigZag.png" },
    { name: "Partner 3", logo: "/partners/SAS.png" },
    { name: "Partner 4", logo: "/partners/SAS FC.png" }
  ],
  // You can add data for the other countries here...
};

export default function PartnersSection() {
  const t = useTranslations("Partners");
  const [activeCountry, setActiveCountry] = useState("Cyprus");

  return (
    <section id="partners" className="py-24 px-6 bg-white overflow-hidden scroll-mt-16 border-t-2 border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">{t("title")}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Country Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {countries.map(country => (
            <button
              key={country}
              onClick={() => setActiveCountry(country)}
              className={`px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${activeCountry === country
                ? "bg-black text-white border-black shadow-lg translate-y-[-2px]"
                : "bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black"
                }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* Scrolling Partners Carousel */}
        <div className="relative w-full flex overflow-x-hidden py-8">
          {/* Fading edges */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
            {[...(partnersData[activeCountry] || []), ...(partnersData[activeCountry] || [])].map((partner, idx) => (
              <div
                key={`${activeCountry}-${idx}`}
                className="relative flex items-center justify-center w-40 h-24 rounded-lg bg-gray-50 border border-gray-200 hover:border-black hover:bg-white transition-colors duration-300 shrink-0 shadow-sm overflow-hidden"
              >
                {partner.logo ? (
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain p-4" />
                ) : (
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
