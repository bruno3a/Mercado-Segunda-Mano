import { useEffect } from 'react';
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

  // Datos de ejemplo para productos
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
      images: [
        'https://http2.mlstatic.com/D_NQ_NP_2X_941642-MLA74284744618_022024-F.webp'
      ],
      featured: true,
      recentlyAdded: true,
      specifications: {
        modelo: 'PlayStation 5 Slim',
        edición: 'Standard Edition',
        almacenamiento: '1TB',
        conectividad: 'Wi-Fi, Bluetooth, USB',
        resolución: '4K',
        contenido: 'Consola, 1 control DualSense, cables, base'
      }
    },
    {
      id: 2,
      name: 'Ron Cubano Eminente Reserva 7 años',
      category: 'Bebidas',
      price: 230000,
      condition: 'Nuevo',
      location: 'Almirante Brown',
      seller: {
        name: 'Carolina López',
        phone: '+54 11 6789-0123',
        whatsapp: '+54 11 6789-0123',
        email: 'carolina@example.com'
      },
      images: [
        'https://http2.mlstatic.com/D_NQ_NP_2X_941642-MLA74284744618_022024-F.webp'
      ],
      featured: true,
      recentlyAdded: true,
      specifications: {
        tipo: 'Ron añejo',
        origen: 'Cuba',
        añejamiento: '7 años',
        volumen: '700ml',
        graduaciónAlcohólica: '40%',
        presentación: 'Botella con estuche'
      }
    }
  ];

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

