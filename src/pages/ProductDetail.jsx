import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import ContactInfo from '../components/ContactInfo';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos la carga de datos desde una API
    const fetchProduct = () => {
      // Datos de ejemplo
      const products = [
        {
          id: 1,
          name: 'iPhone 12 Pro',
          category: 'Electrónica',
          price: 650,
          condition: 'Casi nuevo',
          location: 'Madrid',
          seller: {
            name: 'Javier López',
            phone: '+34 678 901 234',
            whatsapp: '+34 678 901 234',
            email: 'javier@example.com'
          },
          description: 'iPhone 12 Pro de 128GB en color grafito. Comprado hace 1 año, en perfecto estado. Incluye cargador y funda original. Batería al 92% de capacidad.',
          images: [
            'https://images.unsplash.com/photo-1603891128711-11b4b03bb138?q=80&w=800',
            'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800',
            'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=800'
          ]
        },
        {
          id: 2,
          name: 'Bicicleta de montaña Trek',
          category: 'Deportes',
          price: 450,
          condition: 'Buen estado',
          location: 'Barcelona',
          seller: {
            name: 'Marta Ruiz',
            phone: '+34 689 012 345',
            whatsapp: '+34 689 012 345',
            email: 'marta@example.com'
          },
          description: 'Bicicleta de montaña Trek Marlin 6. Talla M. Cambios Shimano, frenos de disco hidráulicos. Usada pero en buen estado. Ideal para rutas de montaña.',
          images: [
            'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=800',
            'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=800',
            'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=800'
          ]
        }
      ];

      const foundProduct = products.find(p => p.id === parseInt(id));
      
      setTimeout(() => {
        setProduct(foundProduct);
        setLoading(false);
      }, 500); // Simulamos un pequeño retraso
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Cargando información del producto...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="not-found-container">
        <h2>Producto no encontrado</h2>
        <p>Lo sentimos, el producto que buscas no está disponible.</p>
        <Link to="/productos" className="btn-back">Volver a productos</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail-header">
          <h1>{product.name}</h1>
          <div className="product-detail-price">${product.price.toLocaleString()}</div>
        </div>

        <div className="product-detail-content">
          <div className="product-detail-gallery">
            <ImageGallery images={product.images} />
          </div>

          <div className="product-detail-info">
            <div className="product-detail-specs">
              <h2>Información del Producto</h2>
              <div className="specs-grid">
                <div className="spec-item">
                  <div className="spec-content">
                    <span className="spec-label">Categoría</span>
                    <span className="spec-value">{product.category}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-content">
                    <span className="spec-label">Estado</span>
                    <span className="spec-value">{product.condition}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-content">
                    <span className="spec-label">Ubicación</span>
                    <span className="spec-value">{product.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-detail-description">
              <h2>Descripción</h2>
              <p>{product.description}</p>
            </div>

            <ContactInfo seller={product.seller} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
