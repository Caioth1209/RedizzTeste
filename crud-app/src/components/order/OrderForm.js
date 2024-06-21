import React, { useState } from 'react';
import { TextField, Button, Container, MenuItem, Select, InputLabel } from '@mui/material';

const OrderForm = ({ addOrder, products, customers }) => {
  const [customer, setCustomer] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder({ customer, product, quantity });
    setCustomer('');
    setProduct('');
    setQuantity('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputLabel>Customer</InputLabel>
        <Select
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          fullWidth
          margin="normal"
          required
        >
          {customers.map((cust, index) => (
            <MenuItem key={index} value={cust.name}>{cust.name}</MenuItem>
          ))}
        </Select>
        
        <InputLabel>Product</InputLabel>
        <Select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          fullWidth
          margin="normal"
          required
        >
          {products.map((prod, index) => (
            <MenuItem key={index} value={prod.name}>{prod.name}</MenuItem>
          ))}
        </Select>
        
        <TextField
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          fullWidth
          type='number'
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">Add Order</Button>
      </form>
    </Container>
  );
};

export default OrderForm;
