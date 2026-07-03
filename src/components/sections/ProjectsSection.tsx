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
      title: "Azura",
      app: t("restaurant"),
      models: ["GF162 I", "GS12", "GA43"],
      images: ["/projects/Azura.jpg", "/projects/Azura.jpg", "/projects/Azura.jpg"],
      description: "Being the first cooperation in a long list of projects done by the creaters of Azura, it offers one of the finest Medeteranian kitchens in Yerevan.  Interior design while being in light tones, never overwhelms, and KGEAR's elegant white GF line and completly hidden GS subs provide an impressive punch during performances, without interrupting the interior flow. This project is shattering traditional impressions of speakers' visibility, without deflecting on power and quality.",
      partnerLinks: [{ name: "MBG Group Azura", url: "https://mbgroup.am/azura" }, { name: "Azura", url: "https://www.instagram.com/azura_mbg/" }]
    },

    {
      id: 2,
      title: "Alaska",
      app: t("restaurant"),
      models: ["GF162 I", "GF82 I", "GF42 I", "GF4", "GA43", "GA201"],
      images: ["/projects/Alaska.jpg", "/projects/Alaska.jpg", "/projects/Alaska.jpg"],
      description: "Second on the list of cooperation with creators of Azura, is Alaska. Finest red wine, enhancing one of the best stake kitchens in Yerevan, inspired by the same impressive sound. Dark tones and warm atmosphere is very descriptive of this place, and metallic and wood decor is never interrupted with almost invisible GF line black speakers and hidden GS line 12 Inch subwoofers. Complete zone control, let's the management decide the volume and tone of private room and other zones.",
      partnerLinks: [{ name: "MBG Group Alaska", url: "https://mbgroup.am/alaska" }, { name: "Alaska", url: "https://www.instagram.com/alaska_mbg/" }]
    },

    {
      id: 3,
      title: "Hans & Franz",
      app: t("restaurant"),
      models: ["GF162 I", "GS12", "GA43"],
      images: ["/projects/HF.jpg", "/projects/HF.jpg", "/projects/HF.jpg"],
      description: "Hans&Franz is back to remind how excellent of a place is was. After renovation, famous Azura restaurant became Hans&Franz. Design and vibe has been changed completely, as well as the main purpose of sound in the whole area. But quality sound was never under question. Interior, full of pretty intense and brutalist approaches, has a sharp and distinct sound, that never interferes with any conversation. KGEAR is here to only enhance the experiences you will have at this location.",
      partnerLinks: [{ name: "MBG Group Hans&Franz", url: "https://mbgroup.am/" }, { name: "Hans&Franz", url: "https://www.instagram.com/hansandfranz_mbg/" }]
    },
    {
      id: 4,
      title: "Caramel Cafe",
      app: t("cafe"),
      models: ["GF22", "GA201"],
      images: ["/projects/Caramel.jpg", "/projects/Caramel.jpg", "/projects/Caramel.jpg"],
      description: "In the center of Yerevan's busiest and most joyful street, Saryan street, Caramel Cafe offers a unique experience with its stylish interior and delicious cuisine. No matter just a coffee break, or a dinner, you can always stop by and be welcomed by the hospital stuff and high quality sound. You can sit inside, sit outside, or even have a cup of Caramel and experience the fancy beats when passing at winters. KGEAR system even without a dedicated sub, provides a full and even coverage.",
      partnerLinks: [{ name: "ZigZag", url: "https://www.zigzag.am" }, { name: "Caramel Cafe", url: "https://www.instagram.com/caramelcafe.yvn/" }]
    },
    {
      id: 5,
      title: "Ground Zero Cafe",
      app: t("cafe"),
      models: ["KZ14", "KZ1", "KTR25", "KA02", "GP8"],
      images: ["/projects/Ground Zero.jpg", "/projects/Ground Zero.jpg", "/projects/Ground Zero.jpg"],
      description: "Continuing our integration into Saryan street, Ground Zero is the first commercial project in Armenia that experienced the KZ series K-Array. But it's not just a cafe, it's a community. A place where you can meet, greet, work and chill. K-Array's smallest KZs provide almost invisible but immersive sound. And KGEARs portable GP system is perfect for event's and speeches which are regular for a place as active as Ground Zero. Stop for a coffee or come to have talks and Q&As.",
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
      title: "Rolls Komitas Cafe",
      app: t("cafe"),
      models: ["GF42 I", "GS6", "GA201"],
      images: ["/projects/Rolls.jpg", "/projects/Rolls.jpg", "/projects/Rolls.jpg"],
      description: "Rolling from Dilijan to Yerevan, you can find another spot with great food and even better sound. Just like Dilijan, come, eat, and have fun.",
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
      id: 9,
      title: "Terra Restaurant",
      app: t("restaurant"),
      models: ["KT2", "KU26", "KA18"],
      images: ["/projects/Terra.jpg", "/projects/Terra.jpg", "/projects/Terra.jpg"],
      description: "Being one of the first in Armenia to experience K-Array, Terra offers highly detailed decor, as well as a speacal accent on sound. With powerful Komannder line amplifiers driving small but efficent KT2 speakers, Terra can provide quality and efficency without compromise. Smart control over the tablet and detailed zoneing makes both staff and visitors happy and impressed.",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 10,
      title: "The Garden Cafe",
      app: t("cafe"),
      models: ["Premium Audio"],
      images: ["/projects/The Garden.jpg", "/projects/The Garden.jpg", "/projects/The Garden.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 11,
      title: "Unicorn Cafe",
      app: t("cafe"),
      models: ["Premium Audio"],
      images: ["/projects/Unicorn.jpg", "/projects/Unicorn.jpg", "/projects/Unicorn.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 12,
      title: "JAM Caffe",
      app: t("cafe"),
      models: ["Premium Audio"],
      images: ["/projects/JAM.jpg", "/projects/JAM.jpg", "/projects/JAM.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 13,
      title: "Paulaner Teryan Restaurant",
      app: t("restaurant"),
      models: ["Premium Audio"],
      images: ["/projects/Paulaner.jpg", "/projects/Paulaner.jpg", "/projects/Paulaner.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 14,
      title: "Paulaner Cascade Restaurant",
      app: t("restaurant"),
      models: ["Premium Audio"],
      images: ["/projects/Paulaner Cascade.jpg", "/projects/Paulaner Cascade.jpg", "/projects/Paulaner Cascade.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 15,
      title: "HUNT Restaurant",
      app: t("restaurant"),
      models: ["Premium Audio"],
      images: ["/projects/HUNT.jpg", "/projects/HUNT.jpg", "/projects/HUNT.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 16,
      title: "Red Fox",
      app: t("restaurant"),
      models: ["GH4", "GF162 I", "GF42 I", "GF4", "GS18", "GS6", "GU210", "GA43", "GA201"],
      images: ["/projects/Red Fox.jpg", "/projects/Red Fox.jpg", "/projects/Red Fox.jpg"],
      description: "In the Heart of Yerevan, next to Republic Square, in a very special place, there is a Pub, where you can watch all sports, while experiencing one of the best kitchens in Yerevan. Feel the cozy energy floating around, as well as powerful energy provided by detailed sound and games on multiple screens. GH line, while being visual only slightly, performs exceptionally well under any load, no matter it's live performance, background music or a commentator screaming GOAAAAL!",
      partnerLinks: [{ name: "Red Fox", url: "#" }]
    },
    {
      id: 17,
      title: "Bosch Store",
      app: t("store"),
      models: ["Premium Audio"],
      images: ["/projects/Bosch.jpg", "/projects/Bosch.jpg", "/projects/Bosch.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 18,
      title: "Miele Store",
      app: t("store"),
      models: ["Premium Audio"],
      images: ["/projects/Miele.jpg", "/projects/Miele.jpg", "/projects/Miele.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 19,
      title: "Two Arcs Gallery",
      app: t("gallery"),
      models: ["Premium Audio"],
      images: ["/projects/Two Arcs.jpg", "/projects/Two Arcs.jpg", "/projects/Two Arcs.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 20,
      title: "Jijil Restaurant",
      app: t("restaurant"),
      models: ["Premium Audio"],
      images: ["/projects/Jijil.jpg", "/projects/Jijil.jpg", "/projects/Jijil.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 21,
      title: "Anima Resort",
      app: t("hotel"),
      models: ["Premium Audio"],
      images: ["/projects/Anima.jpg", "/projects/Anima.jpg", "/projects/Anima.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 22,
      title: "The Forest Tsagkhadzor Hotel",
      app: t("hotel"),
      models: ["Premium Audio"],
      images: ["/projects/Forest.jpg", "/projects/Forest.jpg", "/projects/Forest.jpg"],
      description: "",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    {
      id: 23,
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
