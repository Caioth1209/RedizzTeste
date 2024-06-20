import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductList = ({ products, deleteProduct }) => {
  return (
    <List>
      {products.map((product, index) => (
        <ListItem key={index}>
          <ListItemText primary={`${product.name} - R$${product.price}`} />
          <IconButton edge="end" aria-label="delete" onClick={() => deleteProduct(index)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;
