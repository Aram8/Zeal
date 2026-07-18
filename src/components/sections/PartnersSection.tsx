"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const countries = [
  "Cyprus", "Armenia", "Georgia", "Kazakhstan", "Uzbekistan", /*"Kyrgyzstan", "Turkmenistan", "Tajikistan"*/
];

// Define your partners per country here. 
// Place your logo image files into the 'public' folder of the project.
// For example, if you place 'sony.png' in public/, use "/sony.png" as the logo path.
const partnersData: Record<string, { name: string, logo: string, url?: string }[]> = {
  "Cyprus": [
    { name: "", logo: "", url: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
  ],
  "Armenia": [
    { name: "ZigZag", logo: "/partners/ZigZag Vector.svg", url: "https://www.zigzag.am" },
    { name: "Audoo", logo: "/partners/Audoo Logo.svg", url: "https://audoo.am" },
    { name: "SAS", logo: "/partners/SAS.png", url: "https://www.sas.am" },
    { name: "C2", logo: "/partners/C2 Vector.svg", url: "https://c-2.am" },
    { name: "MBG", logo: "/partners/MBG.png", url: "https://mbgroup.am" },
  ],
  "Georgia": [
    { name: "Zigie", logo: "/partners/Zigie.png", url: "https://zigie.ge/en" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
    { name: "", logo: "" },
  ]
  // You can add data for the other countries here...
};

export default function PartnersSection() {
  const t = useTranslations("Partners");
  const [activeCountry, setActiveCountry] = useState("Cyprus");
  const [currentPage, setCurrentPage] = useState(0);

  // Reset page when country changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeCountry]);

  const itemsPerPage = 5;
  const currentPartners = partnersData[activeCountry] || [];
  const totalPages = Math.ceil(currentPartners.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const startIndex = currentPage * itemsPerPage;
  const visiblePartners = currentPartners.slice(startIndex, startIndex + itemsPerPage);

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

        {/* Paginated Partners Carousel */}
        <div className="relative w-full py-8">
          
          {totalPages > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}

          <div className="overflow-hidden px-4 md:px-12 py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCountry}-${currentPage}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center items-center gap-6 md:gap-8 w-full min-h-[120px]"
              >
                {visiblePartners.map((partner, idx) => {
                  const content = partner.logo ? (
                    <Image src={partner.logo} alt={partner.name} fill className="object-contain p-4" sizes="160px" />
                  ) : (
                    <span className="text-gray-400 text-sm font-bold uppercase tracking-widest text-center px-2">{partner.name}</span>
                  );

                  const containerClasses = "relative flex items-center justify-center shrink-0 w-40 h-24 rounded-lg bg-gray-50 border border-gray-200 hover:border-black hover:bg-white transition-colors duration-300 shadow-sm overflow-hidden";

                  return partner.url ? (
                    <a
                      key={idx}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={containerClasses}
                      style={{ minWidth: '160px', height: '96px' }}
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={idx}
                      className={containerClasses}
                      style={{ minWidth: '160px', height: '96px' }}
                    >
                      {content}
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentPage ? 'w-8 bg-black' : 'w-2 bg-gray-200 hover:bg-gray-400'}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
