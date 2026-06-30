"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as any });
  };

  return (
    <div className="flex gap-2 text-sm font-medium">
      {["en", "ru", "hy"].map((l) => (
        <button
          key={l}
          onClick={() => changeLanguage(l)}
          className={`uppercase transition-colors ${locale === l
              ? "text-black font-bold"
              : "text-gray-400 hover:text-black"
            }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
