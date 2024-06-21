import React, { useState, useEffect } from 'react';
import CustomerForm from '../components/customer/CustomerForm';
import CustomerList from '../components/customer/CustomerList';
import { Container, Typography } from '@mui/material';

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const savedCustomers = JSON.parse(localStorage.getItem('customers'));
    if (savedCustomers) {
      setCustomers(savedCustomers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers));
  }, [customers]);

  const addCustomer = (customer) => {
    setCustomers([...customers, customer]);
  };

  const deleteCustomer = (index) => {
    setCustomers(customers.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Typography variant="h4" style={{ margin: '20px 0' }}>Customer Management</Typography>
      <CustomerForm addCustomer={addCustomer} />
      <CustomerList customers={customers} deleteCustomer={deleteCustomer} />
    </Container>
  );
};

export default CustomersPage;
