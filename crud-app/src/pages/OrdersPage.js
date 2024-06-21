import React, { useState, useEffect } from 'react';
import OrderForm from '../components/order/OrderForm';
import OrderList from '../components/order/OrderList';
import { Container, Typography } from '@mui/material';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders'));
    if (savedOrders) {
      setOrders(savedOrders);
    }

    const savedProducts = JSON.parse(localStorage.getItem('products'));
    if (savedProducts) {
      setProducts(savedProducts);
    }

    const savedCustomers = JSON.parse(localStorage.getItem('customers'));
    if (savedCustomers) {
      setCustomers(savedCustomers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
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
