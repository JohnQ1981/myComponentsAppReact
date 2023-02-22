import React from 'react';
import PdfViewer from './PdfViewer';

const MyPdfPage = () => {
  const pdfUrl = 'https://example.com/my-file.pdf';

  return (
    <div>
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default MyPdfPage;
