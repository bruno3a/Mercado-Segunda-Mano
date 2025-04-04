export const getImageUrl = (imagePath) => {
  if (!imagePath) {
    return '/src/assets/images/placeholder.svg';
  }

  // Si la imagen comienza con http o https, es una URL externa
  if (imagePath.startsWith('http')) {
    return imagePath;
  }

  // Si no, asumimos que es una imagen local en src/assets/images
  return `/src/assets/images/${imagePath}`;
};