import React, { useState } from 'react';

const PdfViewer1 = ({ pdfUrl }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  return (
    <div className={`pdf-viewer ${isFullScreen ? 'full-screen' : ''}`}>
      <button onClick={toggleFullScreen}>
        {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
      </button>
      <iframe src={pdfUrl} width="100%" height="600px"></iframe>
    </div>
  );
};

export default PdfViewer1;
