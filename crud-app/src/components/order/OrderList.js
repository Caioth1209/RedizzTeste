import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const OrderList = ({ orders, deleteOrder }) => {
  return (
    <List>
      {orders.map((order, index) => (
        <ListItem key={index}>
          <ListItemText primary={`${order.customer} ordered ${order.quantity} of ${order.product}`} />
          <IconButton edge="end" aria-label="delete" onClick={() => deleteOrder(index)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default OrderList;