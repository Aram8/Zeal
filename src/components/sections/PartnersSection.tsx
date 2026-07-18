"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // use - 1 to handle subpixel rounding
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 1);
    }
  };

  // Re-check scroll buttons when country changes
  useEffect(() => {
    // Reset scroll position on country change
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0 });
    }
    // slight delay to let DOM paint new items before calculating width
    const timeout = setTimeout(checkScroll, 50);
    window.addEventListener("resize", checkScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", checkScroll);
    };
  }, [activeCountry]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

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

        {/* Manual Partners Carousel */}
        <div className="relative w-full py-8 group">
          {/* Fading edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Navigation Arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex items-center gap-8 overflow-x-auto scroll-smooth px-12 md:px-24 py-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {(partnersData[activeCountry] || []).map((partner, idx) => {
              const content = partner.logo ? (
                <Image src={partner.logo} alt={partner.name} fill className="object-contain p-4" />
              ) : (
                <span className="text-gray-400 text-sm font-bold uppercase tracking-widest text-center px-2">{partner.name}</span>
              );

              const className = "relative flex items-center justify-center w-40 h-24 rounded-lg bg-gray-50 border border-gray-200 hover:border-black hover:bg-white transition-colors duration-300 shrink-0 shadow-sm overflow-hidden snap-center";

              return partner.url ? (
                <a
                  key={`${activeCountry}-${idx}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <div
                  key={`${activeCountry}-${idx}`}
                  className={className}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
