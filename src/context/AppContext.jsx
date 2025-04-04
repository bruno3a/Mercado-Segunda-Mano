import { createContext, useState, useContext } from 'react';

// Crear el contexto
const AppContext = createContext();

// Hook personalizado para usar el contexto
export const useAppContext = () => useContext(AppContext);

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // Cambiado a 'all' por defecto
  const [vehicleFilters, setVehicleFilters] = useState({
    brand: 'Todos',
    type: 'Todos'
  });
  const [productFilters, setProductFilters] = useState({
    category: 'Todos'
  });

  // Datos de ejemplo para marcas y tipos de vehículos
  const brands = [
    'Todos',
    'Toyota',
    'Honda',
    'Ford',
    'Volkswagen',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Kia',
    'Peugeot'
  ];

  const vehicleTypes = [
    'Todos',
    'Sedán',
    'Hatchback',
    'SUV',
    'Crossover',
    'Pickup',
    'Furgoneta'
  ];

  const productCategories = [
    'Todos',
    'Electrónica',
    'Hogar',
    'Deportes',
    'Moda',
    'Juguetes'
  ];

  // Función para filtrar vehículos
  const filterVehicles = (brand, type) => {
    setVehicleFilters({ brand, type });
  };

  // Función para filtrar productos
  const filterProducts = (category) => {
    setProductFilters({ category });
  };

  // Función para cambiar entre vehículos y otros productos
  const changeCategory = (category) => {
    setSelectedCategory(category);
  };

  // Valores que se proporcionarán a través del contexto
  const value = {
    selectedCategory,
    changeCategory,
    vehicleFilters,
    productFilters,
    filterVehicles,
    filterProducts,
    brands,
    vehicleTypes,
    productCategories
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


