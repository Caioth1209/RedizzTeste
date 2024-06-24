import React, { useState, useEffect } from 'react';
import OrderForm from '../components/order/OrderForm';
import OrderList from '../components/order/OrderList';
import { Container, Typography } from '@mui/material';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }

    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }

    const savedCustomers = localStorage.getItem('customers');
    if (savedCustomers) {
      setCustomers(JSON.parse(savedCustomers));
    }
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem('orders', JSON.stringify(orders));
    }
  }, [orders]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const deleteOrder = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Typography variant="h4" style={{ margin: '20px 0' }}>Order Management</Typography>
      <OrderForm addOrder={addOrder} products={products} customers={customers} />
      <OrderList orders={orders} deleteOrder={deleteOrder} />
    </Container>
  );
};

export default OrdersPage;