import { useEffect, useState } from 'react';
import VehicleCard from '../components/VehicleCard';
import ProductCard from '../components/ProductCard';
import { useAppContext } from '../context/AppContext';
import { vehiclesData } from '../data/vehiclesData';

function Home() {
  const { 
    selectedCategory, 
    vehicleFilters, 
    productFilters 
  } = useAppContext();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const mockProducts = [
    {
      id: 1,
      name: 'PlayStation 5 Slim con disco',
      category: 'Electrónica',
      price: 750000,
      condition: 'Nuevo',
      location: 'Almirante Brown',
      images: ['https://http2.mlstatic.com/D_NQ_NP_734451-MLA81264945648_122024-O.webp']
    },
    {
      id: 2,
      name: 'Ron Cubano Havana Club 7 Años',
      category: 'Bebidas',
      price: 250000,
      condition: 'Nuevo',
      location: 'Almirante Brown',
      images: ['https://http2.mlstatic.com/D_NQ_NP_804037-MLA81535336453_122024-O.webp']
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, []);

  // Filtrar vehículos según los filtros seleccionados
  const filteredVehicles = vehiclesData.filter(vehicle => {
    if (vehicleFilters.brand && vehicle.brand !== vehicleFilters.brand) {
      return false;
    }
    if (vehicleFilters.type && vehicle.type !== vehicleFilters.type) {
      return false;
    }
    return true;
  });

  // Filtrar productos según los filtros seleccionados
  const filteredProducts = products.filter(product => {
    if (productFilters.category && product.category !== productFilters.category) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      {(selectedCategory === 'all' || selectedCategory === 'vehicles') && (
        <section className="featured-section">
          <div className="container">
            <h2>Vehículos</h2>
            <div className="vehicles-grid">
              {filteredVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </section>
      )}

      {(selectedCategory === 'all' || selectedCategory === 'products') && (
        <section className="featured-section">
          <div className="container">
            <h2>Productos</h2>
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;

