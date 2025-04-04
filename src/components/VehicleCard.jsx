import { Link } from 'react-router-dom';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="vehicle-card">
      <Link to={`/vehiculo/${vehicle.id}`} className="vehicle-card-link">
        <div className="vehicle-card-image">
          <img
            src={vehicle.images[0] || 'https://via.placeholder.com/400x300?text=No+Image'}
            alt={`${vehicle.brand} ${vehicle.model} ${vehicle.year}`}
          />
          <div className="vehicle-card-price">${vehicle.price.toLocaleString()}</div>
        </div>
        <div className="vehicle-card-content">
          <h3 className="vehicle-card-title">{vehicle.brand} {vehicle.model} {vehicle.year}</h3>
          <div className="vehicle-card-details">
            <p><strong>Kilometraje:</strong> {vehicle.mileage.toLocaleString()} km</p>
            <p><strong>Transmisión:</strong> {vehicle.transmission}</p>
            <p><strong>Combustible:</strong> {vehicle.fuel}</p>
            <p><strong>Ubicación:</strong> {vehicle.location}</p>
          </div>
          <div className="vehicle-card-footer">
            <button className="btn-contact">Contactar</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VehicleCard;