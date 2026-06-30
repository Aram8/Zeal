"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  const t = useTranslations("Projects");

  const applications = [
    t("all"), t("restaurant"), t("cafe"), t("hotel"), t("store"), t("gallery"), t("residential"),
    t("venues"), t("clubs"), t("theatres")
  ];

  const projects = [
    {

      id: 1,
      title: "Azura Restaurant",
      app: t("restaurant"),
      models: ["GF162 I", "GS12", "GA43"],
      images: ["/projects/Azura.jpg"],
      description: "Being the first cooperation in a long list of projects done by the creaters of Azura, it offers one of the finest Medeteranian kitchens in Yerevan. Interior design while being in light tones, never overwhelms as well as covered KGEAR subs with impressive punch during performances. This project is destroying traditional impressions of speaker visibility, never deflecting on power and quality.",
      partnerLinks: []
    },

    {
      id: 2,
      title: "Alaska Restaurant",
      app: t("restaurant"),
      models: ["GF162 I", "GF82 I", "GF42 I", "GF4", "GA43", "GA201"],
      images: ["/projects/Alaska.jpg"],
      description: "Second on the list of cooperation with creators of Azura, is Alaska. Finest red wine, enhancing one of the best stake kitchens in Yerevan, inspired by the same impressive sound .",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },

    {
      id: 3,
      title: "Hans & Franz Restaurant",
      app: t("restaurant"),
      models: ["GF162 I", "GF82 I", "GF42 I", "GF4", "GA43", "GA201"],
      images: ["/projects/Hans.jpg"],
      description: "After a renovation, famous Azura restaurant became Hans&Franz. Design and vibe has been changed, but quality sound that never disappoints is still there.",
      partnerLinks: []
    },
    {
      id: 4,
      title: "Caramel Cafe",
      app: t("cafe"),
      models: ["GF22", "GA201"],
      images: ["/projects/Caramel.jpg"],
      description: "In the heart of Yerevan's most busy and joyful street, Caramel Cafe offers a unique experience with its stylish interior and delicious cuisine. And to highlight that, KGEAR is there to provide best envirment for a nice both indoor and outdoor stay.",
      partnerLinks: []
    },
    {
      id: 5,
      title: "Ground Zero Cafe",
      app: t("cafe"),
      models: ["KZ14", "KZ1", "KTR25", "KA02"],
      images: ["/projects/Ground Zero.jpg"],
      description: "Ground Zero is not only a cafe, but a community space. A place where you can meet, greet, work and chill. K-Array's smallest KZ1s provide almost invisible but immersive sound, while KGEARs portabe system is perfect for event's and speeches which are regular for a place as active as Ground Zero.",
      partnerLinks: []
    },

    {
      id: 6,
      title: "Rolls Dilijan Cafe",
      app: t("cafe"),
      models: ["GF22", "GF42 I", "GS6", "GA201", "GM44L"],
      images: ["/projects/Rolls Dilijan.jpg"],
      description: "Roll into the world of tasty stylish food and cozy environment. KGEAR is there to provide the beats and vibes to fit the place.",
      partnerLinks: []
    },

    {
      id: 7,
      title: "Rolls Komitas Cafe",
      app: t("cafe"),
      models: ["GF42 I", "GS6", "GA201"],
      images: ["/projects/Rolls.jpg"],
      description: "Rolling from Dilijan to Yerevan, you can find another spot with great food and even better sound. Just like Dilijan, come, eat, and have fun.",
      partnerLinks: []
    },

    {
      id: 8,
      title: "SAS Mashtots",
      app: t("store"),
      models: ["Premium Audio"],
      images: ["/projects/SAS.jpg"],
      description: "",
      partnerLinks: []
    },
    {
      id: 9,
      title: "Terra Restaurant",
      app: t("restaurant"),
      models: ["KT2", "KU26", "KA18"],
      images: ["/projects/Terra.jpg"],
      description: "Being one of the first in Armenia to experience K-Array, Terra offers highly detailed decor, as well as a speacal accent on sound. With powerful Komannder line amplifiers driving small but efficent KT2 speakers, Terra can provide quality and efficency without compromise. Smart control over the tablet and detailed zoneing makes both staff and visitors happy and impressed.",
      partnerLinks: []
    },
    {
      id: 10,
      title: "The Garden Cafe",
      app: t("cafe"),
      models: ["Premium Audio"],
      images: ["/projects/The Garden.jpg"],
      description: "",
      partnerLinks: []
    },
    {
      id: 11,
      title: "Unicorn Cafe",
      app: t("cafe"),
      models: ["Premium Audio"],
      images: ["/projects/Unicorn.jpg"],
      description: "",
      partnerLinks: []
    },
    {
      id: 12,
      title: "JAM Caffe",
      app: t("cafe"),
      models: ["Premium Audio"],
      images: ["/projects/JAM.jpg"],
      description: "",
      partnerLinks: []
    },
    {
      id: 13,
      title: "Paulaner Teryan Restaurant",
      app: t("restaurant"),
      models: ["Premium Audio"],
      images: ["/projects/Paulaner.jpg"],
      description: "",
      partnerLinks: []
    },
    {
      id: 14,
      title: "Paulaner Cascade Restaurant",
      app: t("restaurant"),
      models: ["Premium Audio"],
      images: ["/projects/Paulaner Cascade.jpg"],
      description: "",
      partnerLinks: []
    },
    {
      id: 15,
      title: "HUNT Restaurant",
      app: t("restaurant"),
      models: ["Premium Audio"],
      images: ["/projects/HUNT.jpg"],
      description: "",
      partnerLinks: []
    },
    {
      id: 16,
      title: "Bosch Store",
      app: t("store"),
      models: ["Premium Audio"],
      images: ["/projects/Bosch.jpg"],
      description: "",
      partnerLinks: []
    },
    {
      id: 17,
      title: "Miele Store",
      app: t("store"),
      models: ["Premium Audio"],
      images: ["/projects/Miele.jpg"],
      description: "",
      partnerLinks: []
    },
    {
      id: 18,
      title: "Two Arcs Gallery",
      app: t("gallery"),
      models: ["Premium Audio"],
      images: ["/projects/Two Arcs.jpg"],
      description: "",
      partnerLinks: []
    },
    {
      id: 19,
      title: "Jijil Restaurant",
      app: t("restaurant"),
      models: ["Premium Audio"],
      images: ["/projects/Jijil.jpg"],
      description: "",
      partnerLinks: []
    },
    {
      id: 20,
      title: "Anima Resort",
      app: t("hotel"),
      models: ["Premium Audio"],
      images: ["/projects/Anima.jpg"],
      description: "",
      partnerLinks: []
    },
    {
      id: 21,
      title: "The Forest Tsagkhadzor Hotel",
      app: t("hotel"),
      models: ["Premium Audio"],
      images: ["/projects/Forest.jpg"],
      description: "",
      partnerLinks: []
    },
    {
      id: 22,
      title: "IMTOON Dilijan Hotel",
      app: t("hotel"),
      models: ["Premium Audio"],
      images: ["/projects/IMTOON.jpg"],
      description: "",
      partnerLinks: []
    }
  ];

  const [filter, setFilter] = useState(t("all"));
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = filter === t("all") ? projects : projects.filter(p => p.app === filter);
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
          {applications.map(app => (
            <button
              key={app}
              onClick={() => setFilter(app)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${filter === app
                ? "bg-black text-white shadow-xl scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:border-black hover:text-black"
                }`}
            >
              {app}
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
            <div className="group">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {currentProject.images.map((img, i) => (
                  <div
                    key={i}
                    className={`bg-gray-100 rounded-lg overflow-hidden border border-black/5 group-hover:border-black/20 transition-colors duration-500 relative ${i === 0 ? 'md:col-span-2 md:row-span-2 h-48 md:h-[28rem]' : 'col-span-1 h-32 md:h-[13.5rem]'
                      }`}
                  >
                    {typeof img === 'string' ? (
                      <Image src={img} alt={`${currentProject.title} Image ${i + 1}`} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium tracking-wide">Image {img}</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-3xl">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">{currentProject.title}</h3>
                  <p className="text-gray-500 text-lg mb-4">{t("perfect_for", { app: currentProject.app.toLowerCase() })}</p>

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
            </div>

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
            {t("no_projects", { filter })}
          </div>
        )}
      </div>
    </section>
  );
}
