import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Navigation");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#hero" className="text-xl font-bold tracking-tighter flex items-center">
          <Image src="/Logo Vector.svg" alt="Zeal AV" width={120} height={50} className="h-10 w-auto" priority quality={100} />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <Link href="#brands" className="hover:text-gray-500 transition-colors">{t("brands")}</Link>
          <Link href="#catalogs" className="hover:text-gray-500 transition-colors">{t("catalogs")}</Link>
          <Link href="#projects" className="hover:text-gray-500 transition-colors">{t("projects")}</Link>
          <Link href="#partners" className="hover:text-gray-500 transition-colors">{t("partners")}</Link>
        </nav>
        <div className="flex items-center gap-6">
          <Link href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-black text-white text-sm font-bold uppercase tracking-wider rounded-md hover:bg-gray-800 transition-colors">
            {t("contact_now")}
          </Link>
          <LanguageSwitcher />
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </header>
  );
}
