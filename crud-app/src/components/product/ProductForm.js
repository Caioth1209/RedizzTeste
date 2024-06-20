import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, price });
    setName('');
    setPrice('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          type='number'
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">Add Product</Button>
      </form>
    </Container>
  );
};

export default ProductForm;