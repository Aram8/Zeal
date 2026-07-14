export const applicationKeys = [
  "all", "restaurant", "cafe", "hotel", "store", "gallery", "residential",
  "venues", "clubs", "theatres"
] as const;

export type AppKey = typeof applicationKeys[number];

export type Project = {
  id: number;
  title: string;
  appKey: Exclude<AppKey, "all">;
  models: string[];
  images: string[];
  description: string;
  partnerLinks: { name: string; url: string; }[];
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Terra Restaurant",
    appKey: "restaurant",
    models: ["KT2", "KU26", "KA18"],
    images: ["/projects/Terra 1.JPG", "/projects/Terra 2.jpg", "/projects/Terra 3.JPG"],
    description: "Being one of the first in Armenia to experience K-Array, Terra offers highly detailed decor, as well as a special accent on sound. With powerful Komannder line amplifiers driving small but efficient  KT2 speakers, Terra can provide quality and efficiency without compromise. Violin, Saxophone, Guitars and Pianos, no longer require special equipment, just connecting them to our system provides even, excellent and high quality coverage, wherever you sit and whatever enjoy.",
    partnerLinks: [{ name: "Terra", url: "https://www.instagram.com/terra_restaurant__/" },]
  },
  {
    id: 2,
    title: "Terra Outdoors",
    appKey: "restaurant",
    models: ["KT2", "KU210", "KTR25", "KA18"],
    images: ["/projects/Terra Out 1.jpg", "/projects/Terra Out 2.jpg", "/projects/Terra Out 3.jpg"],
    description: "Terra's outdoor space is a serene ode to nature, perfectly complementing its elegant interior. Enhanced by a state-of-the-art K-Array sound system, the terrace features high-excursion KU210 subwoofers and unobtrusive KT2 speakers. This combination delivers rich, balanced, and immersive audio that envelops guests without disrupting the tranquil vibe. The seamless integration of pristine nature and premium AV technology generates an unparalleled outdoor dining experience.",
    partnerLinks: [{ name: "Terra", url: "https://www.instagram.com/terra_restaurant__/" },]
  },
  {
    id: 3,
    title: "Azura",
    appKey: "restaurant",
    models: ["GF162 I", "GS12", "GA43"],
    images: ["/projects/Azura 1.jpg", "/projects/Azura 2.jpg", "/projects/Azura 3.jpg"],
    description: "As the first project by the creators of Azura, it offers some of the finest Mediterranean food in Yerevan. The bright interior design never overwhelms the senses. KGEAR's elegant white GF line speakers and completely hidden GS subs deliver an impressive punch during live performances, without breaking the interior flow. This beautiful design shatters traditional ideas of bulky speaker visibility, proving you can have an invisible system without losing power or quality.",
    partnerLinks: [{ name: "MBG Group Azura", url: "https://mbgroup.am/azura" }, { name: "Azura", url: "https://www.instagram.com/azura_mbg/" }]
  },
  {
    id: 4,
    title: "Alaska",
    appKey: "restaurant",
    models: ["GF162 I", "GF82 I", "GF42 I", "GF4", "GA43", "GA201"],
    images: ["/projects/Alaska 1.jpeg", "/projects/Alaska 2.jpeg", "/projects/Alaska 3.jpeg"],
    description: "As the second collaboration with the creators of Azura, Alaska offers fine red wine and one of the best steak kitchens in Yerevan. The warm atmosphere and dark tones of the beautiful wood and metal decor remain fully uninterrupted. Almost invisible black GF line speakers and hidden 12-inch GS line subwoofers deliver impressive sound. Complete zone control allows the management to precisely adjust the exact audio volume and tone for the private room and all other zones.",
    partnerLinks: [{ name: "MBG Group Alaska", url: "https://mbgroup.am/alaska" }, { name: "Alaska", url: "https://www.instagram.com/alaska_mbg/" }]
  },
  {
    id: 5,
    title: "Hans & Franz",
    appKey: "restaurant",
    models: ["GF162 I", "GS12", "GA43"],
    images: ["/projects/Hans 1.jpg", "/projects/Hans 2.JPG", "/projects/Hans 3.jpg"],
    description: "Hans&Franz is back to remind us how excellent of a place it was. After a major renovation, the famous Azura restaurant became Hans&Franz. The design and vibe have changed completely, as well as the main purpose of sound in the area. But audio quality was never in question. The new interior, full of intense and brutalist approaches, has a sharp and distinct sound that never interferes with any conversation. KGEAR is here to enhance every experience at this unique venue.",
    partnerLinks: [{ name: "MBG Group Hans&Franz", url: "https://mbgroup.am/" }, { name: "Hans&Franz", url: "https://www.instagram.com/hansandfranz_mbg/" }]
  },
  {
    id: 9,
    title: "Caramel Cafe",
    appKey: "cafe",
    models: ["GF22", "GA201"],
    images: ["/projects/Caramel 1.JPG", "/projects/Caramel 2.JPG", "/projects/Caramel 3.jpeg"],
    description: "Located on Saryan Street, Yerevan's most joyful avenue, Caramel Cafe offers a unique experience with its stylish interior and delicious cuisine. Whether stopping for a quick coffee break or a full dinner, you will always be welcomed by the hospitable staff and beautiful sound. You can sit inside, relax outside, or simply enjoy the fancy beats while passing by in the winter. Even without dedicated subwoofers, the KGEAR audio system provides full and even sound coverage.",
    partnerLinks: [{ name: "ZigZag", url: "https://www.zigzag.am" }, { name: "Caramel Cafe", url: "https://www.instagram.com/caramelcafe.yvn/" }]
  },
  {
    id: 10,
    title: "Ground Zero Cafe",
    appKey: "cafe",
    models: ["KZ14", "KZ1", "KTR25", "KA02", "GP8"],
    images: ["/projects/Ground Zero 1.jpg", "/projects/Ground Zero 2.jpg", "/projects/Ground Zero 3.jpeg"],
    description: "Continuing our work on Saryan Street, Ground Zero is the first commercial project in Armenia to feature the K-Array KZ series. More than just a place, it is a vibrant community space to meet, work, and relax. K-Array's tiny KZ speakers provide an almost invisible yet deeply immersive sound. For their regular speeches and active events, the portable KGEAR GP system is a perfect match. Whether stopping by for a quick coffee or joining a lively Q&A, you are truly welcome.",
    partnerLinks: [{ name: "ZigZag", url: "https://www.zigzag.am" }, { name: "Ground Zero", url: "https://www.instagram.com/ground_zero_specialty_coffee/" }]
  },
  {
    id: 6,
    title: "Rolls Dilijan Cafe",
    appKey: "cafe",
    models: ["GF22", "GF42 I", "GS6", "GA201", "GM44L"],
    images: ["/projects/Rolls Dilijan.jpg", "/projects/Rolls Dilijan.jpg", "/projects/Rolls Dilijan.jpg"],
    description: "Roll into the world of tasty, stylish food and a warm, cozy environment. KGEAR is there to provide the perfect beats and vibes to fit the space. Point source speakers from the GF line make the audio radiant when accompanied by powerful GS line subs. The natural wood interior and the welcoming staff make this venue one of the absolute best spots in Dilijan for a quick stop. Whether you are grabbing a quick coffee or a delicious meal, you are always warmly welcomed here.",
    partnerLinks: [{ name: "Rolls", url: "https://www.rolls.am" }]
  },
  {
    id: 7,
    title: "Rolls Komitas",
    appKey: "cafe",
    models: ["GF42 I", "GS6", "GA201"],
    images: ["/projects/Rolls EVN 1.jpg", "/projects/Rolls EVN 2.jpg", "/projects/Rolls EVN 3.jpg"],
    description: "From the slopes of Dilijan to the heart of Yerevan, Rolls continues to delight with its signature blend of style and flavor. Now on Komitas Avenue, the experience is elevated with a premium KGEAR sound system. Designed to complement the vibrant atmosphere, it delivers crisp, clear audio that enhances every moment—whether you're savoring a quiet coffee or enjoying a lively evening. Rolls Komitas invites you to dine, relax, and immerse yourself in the truly perfect vibe.",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  },
  {
    id: 8,
    title: "SAS Mashtots",
    appKey: "store",
    models: ["Premium Audio"],
    images: ["/projects/SAS.jpg", "/projects/SAS.jpg", "/projects/SAS.jpg"],
    description: "",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  },
  {
    id: 11,
    title: "The Garden",
    appKey: "cafe",
    models: ["Premium Audio"],
    images: ["/projects/The Garden 1.JPG", "/projects/The Garden 2.JPG", "/projects/The Garden 3.JPG"],
    description: "The Garden is a welcoming family restaurant and beer house. As an official partner of Paulaner, it offers the finest brews paired with unforgettable flavors. The vibrant outdoor space is elevated by a premium KGEAR audio integration. Sleek GF line speakers combined with the powerful 12-inch GS subs deliver incredible acoustic clarity. Whether guests are enjoying background music or watching a thrilling stadium-like football match, the sound experience remains flawless.",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  },
  {
    id: 12,
    title: "Unicorn",
    appKey: "cafe",
    models: ["Premium Audio"],
    images: ["/projects/Unicorn.jpg", "/projects/Unicorn.jpg", "/projects/Unicorn.jpg"],
    description: "Unicorn Community Café is a space where innovators hang out and spread true startup culture. As forward-thinkers, they were among the very first to integrate a premium KGEAR audio system to achieve a highly special sound. The beautifully tuned setup provides soft, non-disturbing background music that perfectly fuels focus and daily creativity. Whether networking with peers or deep in thought, the acoustic environment flawlessly complements this modern, inspiring space.",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  },
  {
    id: 13,
    title: "JAM",
    appKey: "cafe",
    models: ["Premium Audio"],
    images: ["/projects/JAM 1.jpg", "/projects/JAM 2.jpg", "/projects/JAM 3.jpg"],
    description: "JAM is a cozy and warm cafe offering a delightful European fusion menu, with a true superpower for incredible breakfasts and coffee. Crafted by the creators of Terra Restaurant, the space features a similarly perfect yet delightfully lighter design. The audio is powered by simple yet highly efficient KGEAR GF4 full-range speakers. Perfectly enhanced by a compact GS line subwoofer, the acoustic environment is flawlessly balanced, making every visit a truly special one. ",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  },
  {
    id: 14,
    title: "Paulaner Teryan",
    appKey: "restaurant",
    models: ["Premium Audio"],
    images: ["/projects/Paulaner Teryan 1.JPG", "/projects/Paulaner Teryan 2.JPG", "/projects/Paulaner Teryan 3.jpg"],
    description: "Located on Teryan Street in the heart of Yerevan, Paulaner BeerHouse offers Germany's finest Weissbier and authentic cuisine. The inside features a flawless KGEAR audio setup, pairing impressive GU subwoofers with long, slim GF line arrays for rich, powerful sound. Outside, a unique stereo reversed image setup creates an immersive stadium fill, making this venue one of the absolute greatest and most popular places in all of Armenia to watch football and celebrate life.",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  },
  {
    id: 15,
    title: "Paulaner Cascade",
    appKey: "restaurant",
    models: ["Premium Audio"],
    images: ["/projects/Paulaner Cascade.jpg", "/projects/Paulaner Cascade.jpg", "/projects/Paulaner Cascade.jpg"],
    description: "The second project in the Paulaner chain brings Germany's number one Weissbier and authentic cuisine right next to the iconic Cascade in Yerevan. A flawlessly integrated KGEAR audio setup was designed to complement the warm atmosphere. Featuring shorter GF line arrays paired with highly impressive 6-inch GS subwoofers, the system delivers a truly rich tone. Every speaker is carefully hidden to never disrupt the existing decor and beautifully underline the overall feel.",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  },
  {
    id: 16,
    title: "HUNT Restaurant",
    appKey: "restaurant",
    models: ["Premium Audio"],
    images: ["/projects/HUNT.jpg", "/projects/HUNT.jpg", "/projects/HUNT.jpg"],
    description: "",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  },
  {
    id: 17,
    title: "Red Fox",
    appKey: "restaurant",
    models: ["GH4", "GF162 I", "GF42 I", "GF4", "GS18", "GS6", "GU210", "GA43", "GA201"],
    images: ["/projects/Red Fox.jpg", "/projects/Red Fox.jpg", "/projects/Red Fox.jpg"],
    description: "In the Heart of Yerevan, next to Republic Square, in a very special place, there is a Pub, where you can watch all sports, while experiencing one of the best kitchens in Yerevan. Feel the cozy energy floating around, as well as powerful energy provided by detailed sound and games on multiple screens. GH line, while being visual only slightly, performs exceptionally well under any load, no matter it's live performance, background music or a commentator screaming GOAAAAL!",
    partnerLinks: [{ name: "Red Fox", url: "#" }]
  },
  {
    id: 18,
    title: "Bosch Store",
    appKey: "store",
    models: ["Premium Audio"],
    images: ["/projects/Bosch 1.JPG", "/projects/Bosch 2.JPG", "/projects/Bosch 3.JPG"],
    description: "",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  },
  {
    id: 19,
    title: "Miele Store",
    appKey: "store",
    models: ["Premium Audio"],
    images: ["/projects/Miele 1.JPG", "/projects/Miele 2.JPG", "/projects/Miele 3.JPG"],
    description: "",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  },
  {
    id: 20,
    title: "Two Arcs Gallery",
    appKey: "gallery",
    models: ["Premium Audio"],
    images: ["/projects/Two Arcs.jpg", "/projects/Two Arcs.jpg", "/projects/Two Arcs.jpg"],
    description: "",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  },
  {
    id: 21,
    title: "Jijil",
    appKey: "restaurant",
    models: ["Premium Audio"],
    images: ["/projects/Jijil 1.jpg", "/projects/Jijil 2.JPG", "/projects/Jijil 3.JPG"],
    description: "",
    partnerLinks: [{ name: "ZigZag", url: "https://www.zigzag.am" }, { name: "Jijil", url: "https://www.instagram.com/jijil_tavern/" }]
  },
  {
    id: 22,
    title: "Anima Resort",
    appKey: "hotel",
    models: ["Premium Audio"],
    images: ["/projects/Anima.jpg", "/projects/Anima.jpg", "/projects/Anima.jpg"],
    description: "",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  },
  {
    id: 23,
    title: "The Forest Tsagkhadzor",
    appKey: "hotel",
    models: ["Premium Audio"],
    images: ["/projects/Forest.jpg", "/projects/Forest.jpg", "/projects/Forest.jpg"],
    description: "",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  },
  {
    id: 24,
    title: "IMTOON Dilijan Hotel",
    appKey: "hotel",
    models: ["Premium Audio"],
    images: ["/projects/IMTOON.jpg", "/projects/IMTOON.jpg", "/projects/IMTOON.jpg"],
    description: "",
    partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
  }
];
