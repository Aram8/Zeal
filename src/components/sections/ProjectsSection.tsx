"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { applicationKeys, projectsData } from "@/data/projects";
import type { AppKey } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection() {
  const t = useTranslations("Projects");

  const [filter, setFilter] = useState<AppKey>("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = filter === "all" ? projectsData : projectsData.filter(p => p.appKey === filter);
  const currentProject = filteredProjects[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="py-10 md:py-14 px-6 bg-gradient-to-b from-gray-50 to-gray-100 border-t-2 border-black scroll-mt-16 relative overflow-hidden">
      {/* Decorative dots pattern and shapes */}
      <div className="absolute -left-20 top-40 w-96 h-96 bg-black/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-24 w-32 h-32 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(black 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">{t("title")}</h2>

        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {applicationKeys.map(appKey => (
            <button
              key={appKey}
              onClick={() => setFilter(appKey)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${filter === appKey
                ? "bg-black text-white shadow-xl scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:border-black hover:text-black"
                }`}
            >
              {t(appKey)}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        {filteredProjects.length > 0 ? (
          <div className="relative w-full bg-white rounded-xl p-4 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.05)] border-2 border-black/5 hover:border-black/20 transition-colors duration-500">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10">
              <button
                onClick={handlePrev}
                className="p-3 bg-black text-white border-2 border-transparent hover:bg-white hover:text-black hover:border-black rounded-full shadow-xl transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10">
              <button
                onClick={handleNext}
                className="p-3 bg-black text-white border-2 border-transparent hover:bg-white hover:text-black hover:border-black rounded-full shadow-xl transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Project Content */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="group"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {currentProject.images.map((img, i) => (
                    <div
                      key={i}
                      className={`bg-gray-100 rounded-lg overflow-hidden border border-black/5 group-hover:border-black/20 transition-colors duration-500 relative ${i === 0 ? 'md:col-span-2 md:row-span-2 h-48 md:h-[28rem]' : 'col-span-1 h-32 md:h-[13.5rem]'
                        }`}
                    >
                      {typeof img === 'string' ? (
                        <Image
                          src={img}
                          alt={`${currentProject.title} Image ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                          priority
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium tracking-wide">Image {img}</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Preload adjacent project images for instant loading */}
                {/* Preload ALL project images for instant loading anywhere */}
                <div className="hidden">
                  {filteredProjects.map((proj, pIdx) => (
                    proj?.images.map((img, i) => (
                      typeof img === 'string' && (
                        <Image
                          key={`preload-all-${pIdx}-${i}`}
                          src={img}
                          alt="preload"
                          fill
                          sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                          priority
                        />
                      )
                    ))
                  ))}
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="max-w-3xl">
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">{currentProject.title}</h3>

                    {/* Optional Description */}
                    {currentProject.description && (
                      <p className="text-gray-700 leading-relaxed mb-4">{currentProject.description}</p>
                    )}

                    {/* Optional Partner Links */}
                    {currentProject.partnerLinks && currentProject.partnerLinks.length > 0 && (
                      <div className="flex items-center flex-wrap gap-2 mt-4">
                        <span className="text-sm text-gray-400 font-bold uppercase tracking-wider">Partners:</span>
                        {currentProject.partnerLinks.map((partner, pIdx) => (
                          <a
                            key={pIdx}
                            href={partner.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-bold text-black hover:text-gray-500 underline decoration-2 underline-offset-4 transition-colors"
                          >
                            {partner.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.models.map(model => (
                      <span key={model} className="text-sm font-bold px-4 py-2 bg-black text-white rounded-md uppercase tracking-wide">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-12">
              {filteredProjects.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-10 bg-black' : 'w-2 bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 py-24 border-2 border-dashed border-gray-200 rounded-2xl text-lg font-medium">
            {t("no_projects", { filter: t(filter) })}
          </div>
        )}
      </div>
    </section>
  );
}
