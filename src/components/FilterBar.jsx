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
              <option value="">Todas las marcas</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
            <select 
              name="type" 
              value={vehicleFilters.type} 
              onChange={handleVehicleFilterChange}
            >
              <option value="">Todos los tipos</option>
              {vehicleTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        )}
        {selectedCategory === 'products' && (
          <div className="filter-form">
            <select 
              name="category" 
              value={productFilters.category} 
              onChange={handleProductFilterChange}
            >
              <option value="">Todas las categorías</option>
              {productCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
