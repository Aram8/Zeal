import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-white border-t-4 border-black py-12 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div>
          <Image src="/Logo Vector.svg" alt="Zeal AV" width={144} height={60} className="h-12 w-auto mb-4" priority />
          <p className="text-gray-500 font-medium max-w-xs">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-right">
          <a href="mailto:zeal@zealav.com" className="hover:underline text-black font-bold text-xl">
            zeal@zealav.com
          </a>
          <p className="text-gray-500 font-medium"><span className="text-black font-bold">{t("phone")}</span> +357 99 499728</p>
          <p className="text-gray-500 font-medium"><span className="text-black font-bold">{t("address")}</span> Limassol Centre Block B Office 405,<br />2 Riga Fereou Street,<br />Limassol 3095,<br />Cyprus</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t-2 border-black/5 text-sm font-bold uppercase tracking-wider text-gray-400 flex flex-col md:flex-row justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} {t("rights")}</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-black transition-colors">{t("privacy")}</a>
          <a href="#" className="hover:text-black transition-colors">{t("terms")}</a>
        </div>
      </div>
    </footer>
  );
}
