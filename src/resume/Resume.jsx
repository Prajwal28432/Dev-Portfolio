import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Pdf from '../resume/prajwal_resume.pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
// Specify the path to the pdf.worker.min.js file
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-600 mt-10">
      <div className="w-full max-w-2xl p-5 shadow-md bg-white rounded-lg">
        <Document file={Pdf}>
          <Page
            pageNumber={1}
            scale={width > 786 ? 1 : 0.6}
            className="border border-gray-300"
          />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
