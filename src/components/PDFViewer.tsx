"use client";

import { Document, Page, pdfjs } from 'react-pdf';

if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

export default function PDFViewer({ 
  file, 
  pageNumber, 
  onDocumentLoadSuccess 
}: { 
  file: string, 
  pageNumber: number, 
  onDocumentLoadSuccess: (doc: any) => void 
}) {
  return (
    <Document
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={<div className="flex items-center justify-center h-full w-full font-medium text-gray-500 animate-pulse">Loading Document...</div>}
      className="flex flex-col items-center w-full"
    >
      <div className="shadow-2xl border border-gray-200 bg-white max-w-full overflow-hidden">
        <Page 
          pageNumber={pageNumber} 
          width={700}
          renderTextLayer={false} 
          renderAnnotationLayer={false}
          className="max-w-full !h-auto"
        />
      </div>
    </Document>
  );
}
