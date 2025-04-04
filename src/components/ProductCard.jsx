import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/producto/${product.id}`} className="product-card-link">
        <div className="product-card-image">
          <img
            src={product.images[0] || 'https://via.placeholder.com/400x300?text=No+Image'}
            alt={product.name}
          />
          <div className="product-card-price">${product.price.toLocaleString()}</div>
        </div>
        <div className="product-card-content">
          <h3 className="product-card-title">{product.name}</h3>
          <div className="product-card-details">
            <p><strong>Categoría:</strong> {product.category}</p>
            <p><strong>Estado:</strong> {product.condition}</p>
            <p><strong>Ubicación:</strong> {product.location}</p>
          </div>
          <div className="product-card-footer">
            <button className="btn-contact">Contactar</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
