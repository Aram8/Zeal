import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BrandsSection from "@/components/sections/BrandsSection";
import CatalogsSection from "@/components/sections/CatalogsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <BrandsSection />
        <CatalogsSection />
        <ProjectsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
