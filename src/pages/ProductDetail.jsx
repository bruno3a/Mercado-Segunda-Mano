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
      // Datos de ejemplo actualizados
      const products = [
        {
          id: 1,
          name: 'PlayStation 5 Slim con disco',
          category: 'Electrónica',
          price: 750000,
          condition: 'Nuevo',
          location: 'Almirante Brown',
          seller: {
            name: 'Lucas Martínez',
            phone: '+54 11 5678-9012',
            whatsapp: '+54 11 5678-9012',
            email: 'lucas@example.com'
          },
          description: 'PlayStation 5 Slim edición con lector de disco. Nueva y sellada. Incluye un control DualSense, cables y base.',
          images: [
            'https://http2.mlstatic.com/D_NQ_NP_734451-MLA81264945648_122024-O.webp'
          ]
        },
        {
          id: 2,
          name: 'Ron Cubano Havana Club 7 Años',
          category: 'Bebidas',
          price: 250000,
          condition: 'Nuevo',
          location: 'Almirante Brown',
          seller: {
            name: 'Ana García',
            phone: '+54 11 4567-8901',
            whatsapp: '+54 11 4567-8901',
            email: 'ana@example.com'
          },
          description: 'Ron Havana Club 7 Años, importado directamente de Cuba. Botella de 750ml, sellada y en perfectas condiciones.',
          images: [
            'https://http2.mlstatic.com/D_NQ_NP_804037-MLA81535336453_122024-O.webp'
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
