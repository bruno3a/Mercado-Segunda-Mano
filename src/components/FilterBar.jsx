import { useAppContext } from '../context/AppContext';

const FilterBar = () => {
  const { 
    selectedCategory, 
    vehicleFilters, 
    productFilters, 
    filterVehicles, 
    filterProducts, 
    brands, 
    vehicleTypes, 
    productCategories 
  } = useAppContext();

  const handleVehicleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'brand') {
      filterVehicles(value, vehicleFilters.type);
    } else if (name === 'type') {
      filterVehicles(vehicleFilters.brand, value);
    }
  };

  const handleProductFilterChange = (e) => {
    const { value } = e.target;
    filterProducts(value);
  };

  return (
    <div className="filter-bar">
      <div className="container">
        {selectedCategory === 'vehicles' && (
          <div className="filter-form">
            <select 
              name="brand" 
              value={vehicleFilters.brand} 
              onChange={handleVehicleFilterChange}
            >
              <option value="">Selecciona una marca</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>{brand}</option>
              ))}
            </select>
            <select 
              name="type" 
              value={vehicleFilters.type} 
              onChange={handleVehicleFilterChange}
            >
              <option value="">Selecciona un tipo</option>
              {vehicleTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
            <button type="button">Buscar</button>
          </div>
        )}
        {selectedCategory === 'products' && (
          <div className="filter-form">
            <select 
              name="category" 
              value={productFilters.category} 
              onChange={handleProductFilterChange}
            >
              <option value="">Selecciona una categoría</option>
              {productCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
            <button type="button">Buscar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;

