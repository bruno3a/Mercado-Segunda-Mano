import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [vehicleFilters, setVehicleFilters] = useState({
    brand: '',
    type: ''
  });
  const [productFilters, setProductFilters] = useState({
    category: ''
  });

  const brands = [
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
    'Sedán',
    'Hatchback',
    'SUV',
    'Crossover',
    'Pickup',
    'Furgoneta'
  ];

  const productCategories = [
    'Electrónica',
    'Hogar',
    'Deportes',
    'Moda',
    'Juguetes'
  ];

  const filterVehicles = (brand, type) => {
    setVehicleFilters({
      brand: brand || '',
      type: type || ''
    });
  };

  const filterProducts = (category) => {
    setProductFilters({
      category: category || ''
    });
  };

  const changeCategory = (category) => {
    setSelectedCategory(category);
    // Resetear filtros al cambiar de categoría
    if (category === 'vehicles') {
      setVehicleFilters({ brand: '', type: '' });
    } else if (category === 'products') {
      setProductFilters({ category: '' });
    }
  };

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

