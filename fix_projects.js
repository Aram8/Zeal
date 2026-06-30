const fs = require('fs');
const path = './src/components/sections/ProjectsSection.tsx';
let content = fs.readFileSync(path, 'utf8');

const newProjectsArray = `  const projects = [
    { 
      id: 1, 
      title: "Alaska Restaurant", 
      app: t("restaurant"), 
      models: ["Premium Audio"], 
      images: ["/projects/Alaska.jpg"],
      description: "A high-end acoustic installation tuned for an immersive dining experience. The system blends seamlessly into the architecture.",
      partnerLinks: [{ name: "ZigZag", url: "#" }, { name: "Audoo", url: "#" }]
    },
    { 
      id: 2, 
      title: "Azura Restaurant", 
      app: t("restaurant"), 
      models: ["Premium Audio"], 
      images: ["/projects/Azura.jpg"],
      description: "",
      partnerLinks: []
    },
    { 
      id: 3, 
      title: "Hans & Franz Restaurant", 
      app: t("restaurant"), 
      models: ["Premium Audio"], 
      images: ["/projects/Hans.jpg"],
      description: "",
      partnerLinks: []
    },
    { 
      id: 4, 
      title: "Caramel Cafe", 
      app: t("cafe"), 
      models: ["Premium Audio"], 
      images: ["/projects/Caramel.jpg"],
      description: "",
      partnerLinks: []
    },
    { 
      id: 5, 
      title: "Ground Zero Cafe", 
      app: t("cafe"), 
      models: ["Premium Audio"], 
      images: ["/projects/Ground Zero.jpg"],
      description: "",
      partnerLinks: []
    },
    { 
      id: 6, 
      title: "Rolls Komitas Cafe", 
      app: t("cafe"), 
      models: ["Premium Audio"], 
      images: ["/projects/Rolls.jpg"],
      description: "",
      partnerLinks: []
    },
    { 
      id: 7, 
      title: "Rolls Dilijan Cafe", 
      app: t("cafe"), 
      models: ["Premium Audio"], 
      images: ["/projects/Rolls Dilijan.jpg"],
      description: "",
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
      models: ["Premium Audio"], 
      images: ["/projects/Terra.jpg"],
      description: "",
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

  const [filter`;

content = content.replace(/const projects = \[([\s\S]*?)const \[filter/m, newProjectsArray);

fs.writeFileSync(path, content);
console.log("Updated projects array");
