import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ProductsPage from './pages/ProductsPage';
import CustomersPage from './pages/CustomersPage';
import OrdersPage from './pages/OrdersPage';
import { ThemeProviderWrapper } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProviderWrapper>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/" element={<ProductsPage />} />
        </Routes>
      </Router>
    </ThemeProviderWrapper>
  );
};

export default App;