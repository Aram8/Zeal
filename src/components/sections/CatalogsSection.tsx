"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('../PDFViewer'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full w-full font-medium text-gray-500 animate-pulse">Loading Document...</div>
});

export default function CatalogsSection() {
  const t = useTranslations("Catalogs");
  const catalogs = [
    { id: 1, name: "K-Array Catalog 2024", file: "/catalogs/KARRAY.pdf" },
    { id: 2, name: "KGEAR Lineup", file: "/catalogs/KGEAR.pdf" },
    { id: 3, name: "KSCAPE Solutions", file: "/catalogs/KSCAPE.pdf" },
  ];

  const [activeCatalog, setActiveCatalog] = useState(catalogs[0]);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  // Reset page number when catalog changes
  useEffect(() => {
    setPageNumber(1);
  }, [activeCatalog]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => Math.min(Math.max(1, prevPageNumber + offset), numPages));
  }

  return (
    <section id="catalogs" className="py-10 md:py-14 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 scroll-mt-16 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-48 h-48 bg-black/5 rounded-br-[150px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-gradient-to-tl from-black/5 to-transparent rounded-tl-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">{t("title")}</h2>

        </div>

        <div className="flex flex-col lg:flex-row gap-12 h-[800px]">
          {/* Catalog List */}
          <div className="w-full lg:w-1/4 flex flex-col gap-4 overflow-y-auto pr-2">
            {catalogs.map((catalog) => (
              <button
                key={catalog.id}
                onClick={() => setActiveCatalog(catalog)}
                className={`p-6 text-left rounded-xl transition-all duration-300 border-2 shrink-0 ${activeCatalog.id === catalog.id
                  ? "border-black bg-black text-white shadow-xl translate-x-2"
                  : "border-transparent bg-gray-50 hover:bg-gray-100 hover:border-black/10"
                  }`}
              >
                <h4 className="font-bold text-lg">{catalog.name}</h4>
                <p className="text-sm mt-3 opacity-80 font-medium uppercase tracking-wider">{t("view_pdf")} &rarr;</p>
              </button>
            ))}
          </div>

          {/* Catalog Viewer */}
          <div className="w-full lg:w-3/4 bg-white rounded-2xl p-4 md:p-8 flex flex-col border-4 border-black relative overflow-hidden shadow-2xl">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-r-2 border-b-2 border-black" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-l-2 border-t-2 border-black" />

            {/* Viewer Controls (Header) */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200 z-10">
              <div className="font-bold text-lg truncate max-w-[200px] sm:max-w-xs">{activeCatalog.name}</div>
              {numPages > 0 && (
                <div className="text-sm font-medium">Page {pageNumber} of {numPages}</div>
              )}
            </div>

            {/* Document Render Area */}
            <div className="flex-grow bg-gray-50 rounded-lg border border-black/5 flex items-center justify-between overflow-hidden">

              {/* Previous Arrow - Left Side */}
              <div className="flex-shrink-0 px-2 md:px-4 z-10">
                {numPages > 0 ? (
                  <button
                    onClick={() => changePage(-1)}
                    disabled={pageNumber <= 1}
                    className="p-3 bg-white border border-black/10 rounded-full shadow-md hover:bg-black hover:text-white disabled:opacity-50 transition-all cursor-pointer"
                  >
                    <ChevronLeft size={24} />
                  </button>
                ) : <div className="w-12 h-12" />}
              </div>

              {/* PDF Document */}
              <div className="flex-grow h-full overflow-auto flex justify-center py-4">
                <PDFViewer
                  file={activeCatalog.file}
                  pageNumber={pageNumber}
                  onDocumentLoadSuccess={onDocumentLoadSuccess}
                />
              </div>

              {/* Next Arrow - Right Side */}
              <div className="flex-shrink-0 px-2 md:px-4 z-10">
                {numPages > 0 ? (
                  <button
                    onClick={() => changePage(1)}
                    disabled={pageNumber >= numPages}
                    className="p-3 bg-white border border-black/10 rounded-full shadow-md hover:bg-black hover:text-white disabled:opacity-50 transition-all cursor-pointer"
                  >
                    <ChevronRight size={24} />
                  </button>
                ) : <div className="w-12 h-12" />}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
