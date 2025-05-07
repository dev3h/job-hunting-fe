import PDFViewer from '@/components/app/PdfViewer'
import React, { useEffect, useRef, useState } from 'react'

const ResumeTab = () => {
  const pdfUrl = "/assets/pdf/resume.pdf";
  const [scale, setScale] = useState(1.0);
  const containerRef = useRef(null);
  const handleChangeScale = (newScale) => {
    setScale(newScale);
  }
  useEffect(() => {
    const adjustScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const defaultPageWidth = 612; // Default width of a PDF page in points (8.5 inches * 72 DPI)
        const newScale = containerWidth / defaultPageWidth;
        setScale(newScale);
      }
    };

    adjustScale();
    window.addEventListener("resize", adjustScale);
    return () => window.removeEventListener("resize", adjustScale);
  }, []);
  return (
      <div ref={containerRef}><PDFViewer fileUrl={pdfUrl} scale={scale} onChangeScale={handleChangeScale}/></div>
  )
}

export default ResumeTab