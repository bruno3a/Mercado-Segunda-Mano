export const getImageUrl = (imagePath) => {
  if (!imagePath) {
    return '/placeholder.svg';
  }

  // Si la imagen comienza con http o https, es una URL externa
  if (imagePath.startsWith('http')) {
    return imagePath;
  }

  // Si la imagen comienza con /, asumimos que es una ruta absoluta
  if (imagePath.startsWith('/')) {
    return imagePath;
  }

  // Importar dinámicamente las imágenes desde src/assets/images
  try {
    // Usar la función de importación dinámica de Vite
    const imageUrl = new URL(`../assets/images/${imagePath}`, import.meta.url).href;
    return imageUrl;
  } catch (error) {
    console.error('Error loading image:', error);
    return '/placeholder.svg';
  }
};

