import { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div className="image-gallery">
        <div className="main-image">
          <img src="https://via.placeholder.com/400x300?text=No+Image" alt="No hay imagen disponible" />
        </div>
      </div>
    );
  }

  return (
    <div className="image-gallery">
      <div className="main-image">
        <button className="gallery-nav prev" onClick={handlePrevious}>
          &lt;
        </button>
        <img
          src={images[currentIndex] || 'https://via.placeholder.com/400x300?text=No+Image'}
          alt={`Imagen ${currentIndex + 1}`}
        />
        <button className="gallery-nav next" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image || 'https://via.placeholder.com/400x300?text=No+Image'}
              alt={`Miniatura ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
