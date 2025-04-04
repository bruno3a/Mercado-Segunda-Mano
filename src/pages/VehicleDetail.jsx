import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import ContactInfo from '../components/ContactInfo';

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos la carga de datos desde una API
    const fetchVehicle = () => {
      // Datos de ejemplo
      const vehicles = [
        {
          id: 1,
          brand: 'Toyota',
          model: 'Corolla',
          year: 2019,
          price: 15000,
          mileage: 45000,
          transmission: 'Automática',
          fuel: 'Gasolina',
          color: 'Blanco',
          location: 'Madrid',
          seller: {
            name: 'Carlos Rodríguez',
            phone: '+34 612 345 678',
            whatsapp: '+34 612 345 678',
            email: 'carlos@example.com'
          },
          description: 'Toyota Corolla en excelente estado. Único dueño, mantenimiento al día, nunca ha sido chocado. Interior impecable, aire acondicionado funcionando perfectamente.',
          features: ['Aire acondicionado', 'Bluetooth', 'Cámara trasera', 'Control de crucero', 'Asientos de cuero'],
          images: [
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800',
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800'
          ]
        },
        {
          id: 2,
          brand: 'Honda',
          model: 'Civic',
          year: 2018,
          price: 14000,
          mileage: 60000,
          transmission: 'Manual',
          fuel: 'Gasolina',
          color: 'Azul',
          location: 'Barcelona',
          seller: {
            name: 'Ana Martínez',
            phone: '+34 623 456 789',
            whatsapp: '+34 623 456 789',
            email: 'ana@example.com'
          },
          description: 'Honda Civic en buen estado. Segundo dueño, todos los servicios realizados en concesionario oficial. Neumáticos nuevos, frenos recién cambiados.',
          features: ['Aire acondicionado', 'Bluetooth', 'Pantalla táctil', 'Llantas de aleación', 'Faros LED'],
          images: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800',
            'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800'
          ]
        },
        {
          id: 3,
          brand: 'Ford',
          model: 'Focus',
          year: 2020,
          price: 16500,
          mileage: 30000,
          transmission: 'Automática',
          fuel: 'Diésel',
          color: 'Gris',
          location: 'Valencia',
          seller: {
            name: 'Miguel Sánchez',
            phone: '+34 634 567 890',
            whatsapp: '+34 634 567 890',
            email: 'miguel@example.com'
          },
          description: 'Ford Focus prácticamente nuevo. Mantenimiento al día, interior en perfecto estado. Bajo consumo y excelente rendimiento en carretera.',
          features: ['Navegador GPS', 'Sensores de aparcamiento', 'Control de crucero adaptativo', 'Asistente de mantenimiento de carril', 'Climatizador bizona'],
          images: [
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800',
            'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800',
            'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800'
          ]
        }
      ];

      const foundVehicle = vehicles.find(v => v.id === parseInt(id));
      
      setTimeout(() => {
        setVehicle(foundVehicle);
        setLoading(false);
      }, 500); // Simulamos un pequeño retraso
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
