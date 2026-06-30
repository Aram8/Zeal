import { useTranslations } from "next-intl";
import Image from "next/image";

export default function BrandsSection() {
  const t = useTranslations("Brands");

  const brands = [
    {
      name: "K-Array",
      logo: "/K-array.jpg",
      description: t("karray_desc"),
      features: t("karray_features").split(", "),
      link: "https://www.k-array.com/en/products?brand=k-array"
    },
    {
      name: "KGEAR",
      logo: "/KGEAR.jpg",
      description: t("kgear_desc"),
      features: t("kgear_features").split(", "),
      link: "https://www.k-array.com/en/products?brand=kgear"
    },
    {
      name: "KSCAPE",
      logo: "/KSCAPE.png",
      description: t("kscape_desc"),
      features: t("kscape_features").split(", "),
      link: "https://www.k-array.com/en/products?brand=kscape"
    }
  ];

  return (
    <section id="brands" className="w-full bg-white border-t border-b border-black flex flex-col md:flex-row min-h-[calc(100vh-4rem)] scroll-mt-16">
      {brands.map((brand, index) => (
        <div
          key={brand.name}
          className={`flex-1 group relative flex flex-col p-8 md:p-16 hover:bg-black hover:text-white transition-colors duration-500 overflow-hidden ${index !== brands.length - 1 ? "border-b md:border-b-0 md:border-r border-black/10" : ""
            }`}
        >
          {/* Inner decorative frame on hover */}
          <div className="absolute inset-4 border border-transparent group-hover:border-white/20 transition-colors duration-500 rounded-lg pointer-events-none" />

          <a 
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[8rem] md:max-w-[9.5rem] aspect-square border border-black/10 group-hover:border-white/20 bg-gray-50 group-hover:bg-[#111] rounded-lg mb-12 flex items-center justify-center overflow-hidden transition-colors duration-500 shrink-0 cursor-pointer hover:opacity-90 mx-auto md:mx-0"
          >
            <Image src={brand.logo} alt={`${brand.name} Logo`} width={400} height={400} className="w-full h-full object-cover" />
          </a>

          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{brand.name}</h3>

          {/* Abstract Soundwave Graphic element */}
          <div className="flex items-end gap-1 mb-6 h-8 opacity-20 group-hover:opacity-40 transition-opacity">
            <div className="w-2 h-4 bg-current" />
            <div className="w-2 h-8 bg-current" />
            <div className="w-2 h-3 bg-current" />
            <div className="w-2 h-6 bg-current" />
            <div className="w-2 h-5 bg-current" />
          </div>

          <p className="text-gray-600 group-hover:text-gray-300 mb-8 flex-grow text-lg leading-relaxed">{brand.description}</p>

          <ul className="flex flex-wrap gap-2 mb-8">
            {brand.features.map(f => (
              <li key={f} className="text-xs font-bold px-3 py-1.5 bg-black text-white group-hover:bg-white group-hover:text-black rounded-sm uppercase tracking-wide transition-colors">
                {f}
              </li>
            ))}
          </ul>

          <a
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center w-full px-6 py-4 border-2 border-black group-hover:border-white font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-black hover:text-white group-hover:bg-white group-hover:text-black rounded-md z-10 relative overflow-hidden"
          >
            {t("view_products")}
          </a>
        </div>
      ))}
    </section>
  );
}
