import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import ContactInfo from '../components/ContactInfo';
import { vehiclesData } from '../data/vehiclesData';

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicle = () => {
      const foundVehicle = vehiclesData.find(v => v.id === parseInt(id));
      setTimeout(() => {
        setVehicle(foundVehicle);
        setLoading(false);
      }, 500);
    };

    fetchVehicle();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Cargando información del vehículo...</p>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="not-found-container">
        <h2>Vehículo no encontrado</h2>
        <p>Lo sentimos, el vehículo que buscas no está disponible.</p>
        <Link to="/" className="btn-back">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="vehicle-detail-page">
      <div className="container">
        <div className="vehicle-detail-header">
          <h1>{vehicle.brand} {vehicle.model} {vehicle.year}</h1>
          <div className="vehicle-detail-price">${vehicle.price.toLocaleString()}</div>
        </div>

        <div className="vehicle-detail-content">
          <div className="vehicle-detail-gallery">
            <ImageGallery images={vehicle.images} />
          </div>

          <div className="vehicle-detail-info">
            <div className="vehicle-detail-specs">
              <h2>Especificaciones</h2>
              <div className="specs-grid">
                <div className="spec-item">
                  <div className="spec-content">
                    <span className="spec-label">Kilometraje</span>
                    <span className="spec-value">{vehicle.mileage.toLocaleString()} km</span>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-content">
                    <span className="spec-label">Combustible</span>
                    <span className="spec-value">{vehicle.fuel}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-content">
                    <span className="spec-label">Transmisión</span>
                    <span className="spec-value">{vehicle.transmission}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-content">
                    <span className="spec-label">Color</span>
                    <span className="spec-value">{vehicle.color}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-content">
                    <span className="spec-label">Marca/Modelo</span>
                    <span className="spec-value">{vehicle.brand} {vehicle.model}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-content">
                    <span className="spec-label">Ubicación</span>
                    <span className="spec-value">{vehicle.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="vehicle-detail-features">
              <h2>Características</h2>
              <ul className="features-list">
                {vehicle.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="vehicle-detail-description">
              <h2>Descripción</h2>
              <p>{vehicle.description}</p>
            </div>

            <ContactInfo seller={vehicle.seller} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;

