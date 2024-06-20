import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

const CustomerForm = ({ addCustomer }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          type='email'
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">Add Customer</Button>
      </form>
    </Container>
  );
};

export default CustomerForm;
