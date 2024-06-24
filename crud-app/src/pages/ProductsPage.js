import React, { useState, useEffect } from 'react';
import ProductForm from '../components/product/ProductForm';
import ProductList from '../components/product/ProductList';
import { Container, Typography } from '@mui/material';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Typography variant="h4" style={{ margin: '20px 0' }}>Product Management</Typography>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </Container>
  );
};

export default ProductsPage;