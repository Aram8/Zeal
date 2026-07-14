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
      title: "Terra Restaurant",
      app: t("restaurant"),
      models: ["KT2", "KU26", "KA18"],
      images: ["/projects/Terra 1.JPG", "/projects/Terra 2.jpg", "/projects/Terra 3.JPG"],
      description: "Being one of the first in Armenia to experience K-Array, Terra offers highly detailed decor, as well as a special accent on sound. With powerful Komannder line amplifiers driving small but efficient  KT2 speakers, Terra can provide quality and efficiency without compromise. Violin, Saxophone, Guitars and Pianos, no longer require special equipment, just connecting them to our system provides even, excellent and high quality coverage, wherever you sit and whatever enjoy.",
      partnerLinks: [{ name: "Terra", url: "https://www.instagram.com/terra_restaurant__/" },]
    },
    {
      id: 2,
      title: "Terra Outdoors",
      app: t("restaurant"),
      models: ["KT2", "KU210", "KTR25", "KA18"],
      images: ["/projects/Terra Out 1.jpg", "/projects/Terra Out 2.jpg", "/projects/Terra Out 3.jpg"],
      description: "Terra's outdoor space is a serene ode to nature, perfectly complementing its elegant interior. Enhanced by a state-of-the-art K-Array sound system, the terrace features high-excursion KU210 subwoofers and unobtrusive KT2 speakers. This combination delivers rich, balanced, and immersive audio that envelops guests without disrupting the tranquil vibe. The seamless integration of pristine nature and premium AV technology generates an unparalleled outdoor dining experience.",
      partnerLinks: [{ name: "Terra", url: "https://www.instagram.com/terra_restaurant__/" },]
    },
    {

      id: 3,
      title: "Azura",
      app: t("restaurant"),
      models: ["GF162 I", "GS12", "GA43"],
      images: ["/projects/Azura 1.jpg", "/projects/Azura 2.jpg", "/projects/Azura 3.jpg"],
      description: "As the first project by the creators of Azura, it offers some of the finest Mediterranean food in Yerevan. The bright interior design never overwhelms the senses. KGEAR's elegant white GF line speakers and completely hidden GS subs deliver an impressive punch during live performances, without breaking the interior flow. This beautiful design shatters traditional ideas of bulky speaker visibility, proving you can have an invisible system without losing power or quality.",
      partnerLinks: [{ name: "MBG Group Azura", url: "https://mbgroup.am/azura" }, { name: "Azura", url: "https://www.instagram.com/azura_mbg/" }]
    },

    {
      id: 4,
      title: "Alaska",
      app: t("restaurant"),
      models: ["GF162 I", "GF82 I", "GF42 I", "GF4", "GA43", "GA201"],
      images: ["/projects/Alaska 1.jpeg", "/projects/Alaska 2.jpeg", "/projects/Alaska 3.jpeg"],
      description: "As the second collaboration with the creators of Azura, Alaska offers fine red wine and one of the best steak kitchens in Yerevan. The warm atmosphere and dark tones of the beautiful wood and metal decor remain fully uninterrupted. Almost invisible black GF line speakers and hidden 12-inch GS line subwoofers deliver impressive sound. Complete zone control allows the management to precisely adjust the exact audio volume and tone for the private room and all other zones.",
      partnerLinks: [{ name: "MBG Group Alaska", url: "https://mbgroup.am/alaska" }, { name: "Alaska", url: "https://www.instagram.com/alaska_mbg/" }]
    },

    {
      id: 5,
      title: "Hans & Franz",
      app: t("restaurant"),
      models: ["GF162 I", "GS12", "GA43"],
      images: ["/projects/Hans 1.jpg", "/projects/Hans 2.JPG", "/projects/Hans 3.jpg"],
      description: "Hans&Franz is back to remind us how excellent of a place it was. After a major renovation, the famous Azura restaurant became Hans&Franz. The design and vibe have changed completely, as well as the main purpose of sound in the area. But audio quality was never in question. The new interior, full of intense and brutalist approaches, has a sharp and distinct sound that never interferes with any conversation. KGEAR is here to enhance every experience at this unique venue.",
      partnerLinks: [{ name: "MBG Group Hans&Franz", url: "https://mbgroup.am/" }, { name: "Hans&Franz", url: "https://www.instagram.com/hansandfranz_mbg/" }]
    },
    {
      id: 9,
      title: "Caramel Cafe",
      app: t("cafe"),
      models: ["GF22", "GA201"],
      images: ["/projects/Caramel 1.JPG", "/projects/Caramel 2.JPG", "/projects/Caramel 3.jpeg"],
      description: "Located on Saryan Street, Yerevan's most joyful avenue, Caramel Cafe offers a unique experience with its stylish interior and delicious cuisine. Whether stopping for a quick coffee break or a full dinner, you will always be welcomed by the hospitable staff and beautiful sound. You can sit inside, relax outside, or simply enjoy the fancy beats while passing by in the winter. Even without dedicated subwoofers, the KGEAR audio system provides full and even sound coverage.",
      partnerLinks: [{ name: "ZigZag", url: "https://www.zigzag.am" }, { name: "Caramel Cafe", url: "https://www.instagram.com/caramelcafe.yvn/" }]
    },
    {
      id: 10,
      title: "Ground Zero Cafe",
      app: t("cafe"),
      models: ["KZ14", "KZ1", "KTR25", "KA02", "GP8"],
      images: ["/projects/Ground Zero 1.jpg", "/projects/Ground Zero 2.jpg", "/projects/Ground Zero 3.jpeg"],
      description: "Continuing our work on Saryan Street, Ground Zero is the first commercial project in Armenia to feature the K-Array KZ series. More than just a place, it is a vibrant community space to meet, work, and relax. K-Array's tiny KZ speakers provide an almost invisible yet deeply immersive sound. For their regular speeches and active events, the portable KGEAR GP system is a perfect match. Whether stopping by for a quick coffee or joining a lively Q&A, you are truly welcome.",
      partnerLinks: [{ name: "ZigZag", url: "https://www.zigzag.am" }, { name: "Ground Zero", url: "https://www.instagram.com/ground_zero_specialty_coffee/" }]
    },

    {
      id: 6,
      title: "Rolls Dilijan Cafe",
      app: t("cafe"),
      models: ["GF22", "GF42 I", "GS6", "GA201", "GM44L"],
      images: ["/projects/Rolls Dilijan.jpg", "/projects/Rolls Dilijan.jpg", "/projects/Rolls Dilijan.jpg"],
      description: "Roll into the world of tasty stylish food and cozy environment. KGEAR is there to provide the beats and vibes to fit the place.",
      partnerLinks: [{ name: "Rolls", url: "https://www.rolls.am" }]
    },

    {
      id: 7,
      title: "Rolls Komitas",
      app: t("cafe"),
      models: ["GF42 I", "GS6", "GA201"],
      images: ["/projects/Rolls EVN 1.jpg", "/projects/Rolls EVN 2.jpg", "/projects/Rolls EVN 3.jpg"],
      description: "From the slopes of Dilijan to the heart of Yerevan, Rolls continues to delight with its signature blend of style and flavor. Now on Komitas Avenue, the experience is elevated with KGEAR's premium sound system. Designed to complement the vibrant atmosphere, the system delivers crisp, clear audio that enhances every moment—whether you're savoring a quiet coffee or enjoying a lively evening. With seamless coverage and exceptional sound quality, Rolls Komitas invites you to eat, relax, and immerse yourself in the perfect vibe.",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },

    {
      id: 8,
      title: "SAS Mashtots",
      app: t("store"),
      models: ["Premium Audio"],
      images: ["/projects/SAS.jpg", "/projects/SAS.jpg", "/projects/SAS.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },

    {
      id: 11,
      title: "The Garden",
      app: t("cafe"),
      models: ["Premium Audio"],
      images: ["/projects/The Garden 1.JPG", "/projects/The Garden 2.JPG", "/projects/The Garden 3.JPG"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 12,
      title: "Unicorn",
      app: t("cafe"),
      models: ["Premium Audio"],
      images: ["/projects/Unicorn.jpg", "/projects/Unicorn.jpg", "/projects/Unicorn.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 13,
      title: "JAM",
      app: t("cafe"),
      models: ["Premium Audio"],
      images: ["/projects/JAM 1.jpg", "/projects/JAM 2.jpg", "/projects/JAM 3.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 14,
      title: "Paulaner Teryan",
      app: t("restaurant"),
      models: ["Premium Audio"],
      images: ["/projects/Paulaner Teryan 1.JPG", "/projects/Paulaner Teryan 2.JPG", "/projects/Paulaner Teryan 3.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 15,
      title: "Paulaner Cascade",
      app: t("restaurant"),
      models: ["Premium Audio"],
      images: ["/projects/Paulaner Cascade.jpg", "/projects/Paulaner Cascade.jpg", "/projects/Paulaner Cascade.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 16,
      title: "HUNT Restaurant",
      app: t("restaurant"),
      models: ["Premium Audio"],
      images: ["/projects/HUNT.jpg", "/projects/HUNT.jpg", "/projects/HUNT.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 17,
      title: "Red Fox",
      app: t("restaurant"),
      models: ["GH4", "GF162 I", "GF42 I", "GF4", "GS18", "GS6", "GU210", "GA43", "GA201"],
      images: ["/projects/Red Fox.jpg", "/projects/Red Fox.jpg", "/projects/Red Fox.jpg"],
      description: "In the Heart of Yerevan, next to Republic Square, in a very special place, there is a Pub, where you can watch all sports, while experiencing one of the best kitchens in Yerevan. Feel the cozy energy floating around, as well as powerful energy provided by detailed sound and games on multiple screens. GH line, while being visual only slightly, performs exceptionally well under any load, no matter it's live performance, background music or a commentator screaming GOAAAAL!",
      partnerLinks: [{ name: "Red Fox", url: "#" }]
    },
    {
      id: 18,
      title: "Bosch Store",
      app: t("store"),
      models: ["Premium Audio"],
      images: ["/projects/Bosch 1.JPG", "/projects/Bosch 2.JPG", "/projects/Bosch 3.JPG"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 19,
      title: "Miele Store",
      app: t("store"),
      models: ["Premium Audio"],
      images: ["/projects/Miele 1.JPG", "/projects/Miele 2.JPG", "/projects/Miele 3.JPG"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 20,
      title: "Two Arcs Gallery",
      app: t("gallery"),
      models: ["Premium Audio"],
      images: ["/projects/Two Arcs.jpg", "/projects/Two Arcs.jpg", "/projects/Two Arcs.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 21,
      title: "Jijil",
      app: t("restaurant"),
      models: ["Premium Audio"],
      images: ["/projects/Jijil 1.jpg", "/projects/Jijil 2.JPG", "/projects/Jijil 3.JPG"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "https://www.zigzag.am" }, { name: "Jijil", url: "https://www.instagram.com/jijil_tavern/" }]
    },
    {
      id: 22,
      title: "Anima Resort",
      app: t("hotel"),
      models: ["Premium Audio"],
      images: ["/projects/Anima.jpg", "/projects/Anima.jpg", "/projects/Anima.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 23,
      title: "The Forest Tsagkhadzor",
      app: t("hotel"),
      models: ["Premium Audio"],
      images: ["/projects/Forest.jpg", "/projects/Forest.jpg", "/projects/Forest.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 24,
      title: "IMTOON Dilijan Hotel",
      app: t("hotel"),
      models: ["Premium Audio"],
      images: ["/projects/IMTOON.jpg", "/projects/IMTOON.jpg", "/projects/IMTOON.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
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
                      <Image
                        src={img}
                        alt={`${currentProject.title} Image ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                        priority={i === 0}
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
