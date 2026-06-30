import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-[calc(100vh-4rem)] flex flex-col justify-center px-6 overflow-hidden bg-white">
      {/* Background Image & Overlay within Decorative Frame */}
      <div className="absolute inset-4 md:inset-8 z-0 overflow-hidden rounded-xl border border-black/10">
        <Image
          src="/Hero-bg.svg"
          alt="Hero Background"
          fill
          className="object-cover object-right"
          priority
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/10 to-white/0" style={{ transform: 'translateZ(0)' }} />
      </div>



      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="w-full md:w-1/2 lg:w-5/12 xl:w-[45%] max-w-2xl flex flex-col items-start text-left gap-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl font-medium">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="text-gray-400 text-sm font-semibold uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-black/20 mx-auto mt-2" />
      </div>
    </section >
  );
}
