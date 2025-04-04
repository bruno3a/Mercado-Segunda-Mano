import { useState } from 'react';
import { getImageUrl } from '../utils/imageUtils';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="image-gallery">
      <div className="main-image">
        <img 
          src={getImageUrl(images[selectedImage])} 
          alt="Imagen principal" 
        />
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
            onClick={() => setSelectedImage(index)}
          >
            <img 
              src={getImageUrl(image)} 
              alt={`Miniatura ${index + 1}`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;


