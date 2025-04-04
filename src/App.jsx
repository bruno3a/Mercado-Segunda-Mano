import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import VehicleDetail from './pages/VehicleDetail';
import ProductDetail from './pages/ProductDetail';
import './styles/main.scss';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehiculo/:id" element={<VehicleDetail />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
