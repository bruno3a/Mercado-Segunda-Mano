import { useEffect } from 'react';
import VehicleCard from '../components/VehicleCard';
import ProductCard from '../components/ProductCard';
import { useAppContext } from '../context/AppContext';

function Home() {
  const { selectedCategory } = useAppContext();
  
  // Datos de ejemplo para vehículos
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
      images: [
        'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800'
      ],
      featured: true,
      recentlyAdded: true
    },
    {
      id: 2,
      brand: 'Volkswagen',
      model: 'Vento',
      year: 2020,
      price: 13500,
      mileage: 35000,
      transmission: 'Manual',
      fuel: 'Diésel',
      color: 'Plata',
      location: 'Barcelona',
      seller: {
        name: 'Laura García',
        phone: '+34 623 456 789',
        whatsapp: '+34 623 456 789',
        email: 'laura@example.com'
      },
      images: [
        'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800'
      ],
      featured: true,
      recentlyAdded: true
    },
    {
      id: 3,
      brand: 'Kia',
      model: 'Sportage',
      year: 2021,
      price: 22000,
      mileage: 28000,
      transmission: 'Automática',
      fuel: 'Gasolina',
      color: 'Negro',
      location: 'Valencia',
      seller: {
        name: 'Miguel Sánchez',
        phone: '+34 634 567 890',
        whatsapp: '+34 634 567 890',
        email: 'miguel@example.com'
      },
      images: [
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800'
      ],
      featured: true,
      recentlyAdded: false
    },
    {
      id: 4,
      brand: 'Toyota',
      model: 'Etios',
      year: 2018,
      price: 9500,
      mileage: 65000,
      transmission: 'Manual',
      fuel: 'Gasolina',
      color: 'Rojo',
      location: 'Sevilla',
      seller: {
        name: 'Ana Martínez',
        phone: '+34 645 678 901',
        whatsapp: '+34 645 678 901',
        email: 'ana@example.com'
      },
      images: [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800'
      ],
      featured: false,
      recentlyAdded: true
    },
    {
      id: 5,
      brand: 'Peugeot',
      model: '308',
      year: 2019,
      price: 12800,
      mileage: 42000,
      transmission: 'Manual',
      fuel: 'Diésel',
      color: 'Azul',
      location: 'Málaga',
      seller: {
        name: 'David López',
        phone: '+34 656 789 012',
        whatsapp: '+34 656 789 012',
        email: 'david@example.com'
      },
      images: [
        'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800'
      ],
      featured: true,
      recentlyAdded: false
    }
  ];

  // Datos de ejemplo para productos
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
      images: [
        'https://images.unsplash.com/photo-1603891128711-11b4b03bb138?q=80&w=800'
      ],
      featured: true,
      recentlyAdded: true
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
      images: [
        'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=800'
      ],
      featured: true,
      recentlyAdded: false
    }
  ];

  // Filtrar vehículos destacados
  const featuredVehicles = vehicles.filter(vehicle => vehicle.featured);
  const featuredProducts = products.filter(product => product.featured);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      {(selectedCategory === 'all' || selectedCategory === 'vehicles') && (
        <section className="featured-section">
          <div className="container">
            <h2>Vehículos Destacados</h2>
            <div className="card-grid">
              {featuredVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </section>
      )}

      {(selectedCategory === 'all' || selectedCategory === 'products') && (
        <section className="featured-section">
          <div className="container">
            <h2>Productos Destacados</h2>
            <div className="card-grid">
              {featuredProducts.map(product => (
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

