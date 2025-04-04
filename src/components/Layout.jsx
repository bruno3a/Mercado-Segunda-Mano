import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import FilterBar from './FilterBar';

const Layout = ({ children }) => {
  const { selectedCategory, changeCategory } = useAppContext();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app-container">
      <header>
        <nav>
          <div className="container">
            <div className="logo">
              <Link to="/">Mercado Particular de Segunda Mano</Link>
            </div>
            <ul className="nav-links">
              <li>
                <Link 
                  to="/" 
                  className={selectedCategory === 'all' ? 'active' : ''}
                  onClick={() => changeCategory('all')}
                >
                  Todos
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className={selectedCategory === 'vehicles' ? 'active' : ''}
                  onClick={() => changeCategory('vehicles')}
                >
                  Vehículos
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className={selectedCategory === 'products' ? 'active' : ''}
                  onClick={() => changeCategory('products')}
                >
                  Otros Artículos
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {isHomePage && <FilterBar />}
      </header>
      {children}
    </div>
  );
};

export default Layout;



