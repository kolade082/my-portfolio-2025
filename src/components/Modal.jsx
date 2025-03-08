import React, { useEffect, useState, useCallback } from "react";
import "./modal.css";

function Modal({ isOpen, onClose, item }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleImageClick = (index) => {
    setSelectedImage(item.screenshots[index]);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + item.screenshots.length) % item.screenshots.length;
    setSelectedImage(item.screenshots[newIndex]);
    setCurrentImageIndex(newIndex);
  }, [currentImageIndex, item.screenshots]);

  const handleNextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % item.screenshots.length;
    setSelectedImage(item.screenshots[newIndex]);
    setCurrentImageIndex(newIndex);
  }, [currentImageIndex, item.screenshots]);

  const closeImageViewer = (e) => {
    if (e) e.stopPropagation();
    setSelectedImage(null);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          handlePrevImage();
          break;
        case 'ArrowRight':
          handleNextImage();
          break;
        case 'Escape':
          closeImageViewer();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, handlePrevImage, handleNextImage]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="bi bi-x"></i>
        </button>
        
        <div className="modal-header">
          <h2>{item.title}</h2>
          <div className="modal-links">
            {item.demoUrl && (
              <a href={item.demoUrl} target="_blank" rel="noopener noreferrer" className="modal-link">
                <i className="bi bi-link-45deg"></i>
                Live Demo
              </a>
            )}
            {item.githubUrl && (
              <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-link">
                <i className="bi bi-github"></i>
                Source Code
              </a>
            )}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-description">
            <p>{item.description}</p>
          </div>

          <div className="modal-tools">
            <h4>Technologies Used</h4>
            <ul className="tools-list">
              {item.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>

          <div className="modal-gallery">
            <h4>Project Screenshots</h4>
            <div className="screenshots">
              {item.screenshots.map((screenshot, index) => (
                <div 
                  key={index} 
                  className="screenshot-wrapper"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={screenshot}
                    alt={`${item.title} screenshot ${index + 1}`}
                    className="screenshot-img"
                    loading="lazy"
                  />
                  <div className="screenshot-overlay">
                    <i className="bi bi-zoom-in"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="image-viewer-overlay" onClick={closeImageViewer}>
          <button className="viewer-close" onClick={closeImageViewer}>
            <i className="bi bi-x"></i>
          </button>
          <button className="viewer-nav prev" onClick={handlePrevImage}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="viewer-nav next" onClick={handleNextImage}>
            <i className="bi bi-chevron-right"></i>
          </button>
          <div className="viewer-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Full size view" />
            <div className="viewer-counter">
              {currentImageIndex + 1} / {item.screenshots.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
