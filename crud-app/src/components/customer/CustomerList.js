import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomerList = ({ customers, deleteCustomer }) => {
  return (
    <List>
      {customers.map((customer, index) => (
        <ListItem key={index}>
          <ListItemText primary={`${customer.name} - ${customer.email}`} />
          <IconButton edge="end" aria-label="delete" onClick={() => deleteCustomer(index)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default CustomerList;
