// PDFViewer.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import styled from "styled-components";

// Required to load worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PDFViewer = ({ fileUrl, scale,  onChangeScale}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // useEffect(() => {
  //   const adjustScale = () => {
  //     if (containerRef.current) {
  //       const containerWidth = containerRef.current.offsetWidth;
  //       const defaultPageWidth = 612; // Default width of a PDF page in points (8.5 inches * 72 DPI)
  //       const newScale = containerWidth / defaultPageWidth;
  //       setScale(newScale);
  //     }
  //   };

  //   adjustScale();
  //   window.addEventListener("resize", adjustScale);
  //   return () => window.removeEventListener("resize", adjustScale);
  // }, []);

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));

  const zoomIn = () => onChangeScale((prev) => Math.min(prev + 0.2, 1.6));
  const zoomOut = () => onChangeScale((prev) => Math.max(prev - 0.2, 0.6));

  return (
    <HoverableWrapper>
      <Container>
        <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>

        <Controls>
          <StyledButton onClick={zoomOut} disabled={scale <= 0.6}>－</StyledButton>
          <span>{Math.round(scale * 100)}%</span>
          <StyledButton onClick={zoomIn} disabled={scale >= 3}>＋</StyledButton>

          <Divider />
          <StyledButton onClick={goToPrevPage} disabled={pageNumber === 1}>◀</StyledButton>
          <span>{pageNumber}/{numPages}</span>
          <StyledButton onClick={goToNextPage} disabled={pageNumber === numPages}>▶</StyledButton>
        </Controls>
      </Container>
    </HoverableWrapper>
  );
};

PDFViewer.propTypes = {
  fileUrl: PropTypes.string,
  scale: PropTypes.number,
  onChangeScale: PropTypes.func,
};

const Container = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  max-width: 100%;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.95);
  padding: 8px 16px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  font-family: sans-serif;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 5px;
    padding: 6px 12px;
    font-size: 12px;
    gap: 8px;
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  color: ${({ disabled }) => (disabled ? "#ccc" : "#333")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 2px 6px;
  }
`;

const Divider = styled.span`
  width: 1px;
  height: 20px;
  background-color: #ddd;
  display: inline-block;
`;

const HoverableWrapper = styled.div`
  width: fit-content;
  &:hover ${Controls} {
    opacity: 1;
    pointer-events: all;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default PDFViewer;
