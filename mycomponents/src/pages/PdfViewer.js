import React, { useState } from 'react';

const PdfViewer = ({ pdfUrl }) => {
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
    <div>
      <button onClick={toggleFullScreen}>
        {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
      </button>
      <iframe  title ={Math.random()}src={pdfUrl} width="100%" height="600px"></iframe>
    </div>
  );
};

export default PdfViewer;
